---
sidebar_position: 2
title: Libro mayor
---

# Libro mayor

Decisión B del Módulo 6: **cómo se registra el dinero**. Es lo más importante del módulo porque de aquí depende el principio PA-02: «el dinero siempre cuadra».

Un **libro mayor** es el registro donde queda cada movimiento de dinero. Se escribe una vez y no se modifica: si hay un error, se corrige con un movimiento nuevo.

## B1. Partida doble ligera

Cada operación escribe varios **apuntes que suman cero**. Una transferencia de 50.000 pesos es −50.000 en la cuenta A y +50.000 en la cuenta B. El dinero que sale a Bre-B o a un corresponsal pasa por **cuentas internas de tránsito**; no desaparece de un lado y aparece en otro.

- **Ventaja:** «el dinero cuadra» se verifica con una suma. Si la suma de todos los apuntes no da cero, hay un error. También facilita conciliar con Bre-B y con las redes de corresponsales.
- **Costo:** más registros y una idea más para explicar. Se llama «ligera» porque no es contabilidad formal: la contabilidad sigue siendo del sistema contable externo, al que Cuentas le entrega los asientos.

| Operación | Apuntes (suman cero) |
|---|---|
| Transferencia entre cuentas de 50.000 | Depósito A −50.000 · Depósito B +50.000 |
| Transferencia Bre-B de 50.000 (al confirmar) | Depósito A −50.000 · Tránsito Bre-B +50.000 |
| Liquidación de lo enviado por Bre-B | Tránsito Bre-B −50.000 · Contrapartida de liquidación +50.000 |
| Depósito de efectivo de 100.000 (al confirmar) | Tránsito efectivo −100.000 · Depósito A +100.000 |

Los valores del GMF y de otras tarifas siguen la misma regla: son apuntes más en la misma operación.

## B2. Saldo

El saldo se guarda y se actualiza **en la misma transacción** que escribe los apuntes, bloqueando esa fila para que dos operaciones simultáneas no la pisen. Un proceso periódico **recalcula** el saldo desde los apuntes y avisa si no coincide. El **saldo disponible** es el saldo menos las reservas activas.

## B3. Correcciones

Un error se corrige con un **movimiento contrario** que lo anula, nunca con `UPDATE` ni `DELETE`. A la aplicación se le quitan esos permisos sobre las tablas del libro.

## B4. Idempotencia

Toda operación que mueve dinero lleva una **llave de idempotencia**: un identificador único. Si la misma petición llega dos veces por un reintento, la base de datos rechaza el duplicado y se devuelve el resultado original. Importa sobre todo con Bre-B y con los reintentos de los terminales.

## Reglas de representación

- Valores en **decimal exacto** (o entero en la unidad mínima), nunca punto flotante.
- Una sola moneda: COP.
- Los apuntes guardan solo identificadores, no datos personales (decisión A).

## Detalle del libro

```mermaid
erDiagram
    DEPOSITO ||--|| CUENTA_LIBRO : "tiene una"
    CUENTA_LIBRO ||--o{ APUNTE : recibe
    OPERACION ||--|{ APUNTE : "genera (suman cero)"
    DEPOSITO ||--o{ RESERVA : aparta
    OPERACION ||--o| OPERACION : "se corrige con"

    DEPOSITO {
        uuid id PK
        uuid cliente_id
        string estado
        decimal saldo
        int version "bloqueo de fila"
    }
    CUENTA_LIBRO {
        uuid id PK
        string tipo "cliente, transito o liquidacion"
    }
    OPERACION {
        uuid id PK
        string tipo
        string llave_idempotencia UK
        uuid corrige_a FK
        datetime creada
    }
    APUNTE {
        uuid id PK
        uuid operacion_id FK
        uuid cuenta_libro_id FK
        decimal valor "positivo o negativo"
    }
    RESERVA {
        uuid id PK
        uuid deposito_id FK
        decimal valor
        string estado "activa, confirmada o liberada"
        string llave_idempotencia UK
    }
```

## Escritura de una operación

```mermaid
sequenceDiagram
    autonumber
    participant P as Puerta publica de Cuentas
    participant L as Libro mayor
    participant O as Outbox
    participant A as Auditoria
    P->>L: Verifica la llave de idempotencia
    Note over P,L: Si ya existe, devuelve el resultado original
    P->>L: Bloquea la fila del deposito
    P->>L: Escribe los apuntes (suman cero)
    P->>L: Actualiza el saldo
    P->>A: Registra la operacion (misma transaccion)
    P->>O: Guarda el evento (misma transaccion)
    Note over P,O: Todo o nada: una sola transaccion de base de datos
```

## Verificaciones periódicas

| Verificación | Qué detecta |
|---|---|
| Suma de todos los apuntes = 0 | Una operación escrita a medias o con error |
| Saldo guardado = suma de apuntes de la cuenta | Un saldo que se desvió |
| Tránsito Bre-B y efectivo contra los extractos de Bre-B y de las redes | Operaciones enviadas que no se confirmaron, o confirmadas que no se registraron |

Los umbrales y la frecuencia de estas verificaciones se fijan en el Módulo 10.
