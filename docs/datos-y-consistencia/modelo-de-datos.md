---
sidebar_position: 1
title: Modelo de datos
---

# Modelo de datos

Decisión A del Módulo 6: **quién es dueño de cada dato**. Parte de los [8 módulos](../arquitectura-aplicacion/estilo-y-limites.md) del Módulo 5 y del principio PA-05 («un solo dueño por cada dato»).

## La regla de fondo

Cada módulo tiene su propio esquema dentro de la misma base de datos. **Ningún módulo lee las tablas de otro**: si necesita un dato, lo pide por la puerta pública del dueño. Las referencias entre módulos se guardan solo como identificador (sin llave foránea entre esquemas), de modo que un módulo pueda mudarse a servicio sin romper tablas ajenas.

## Datos de cada módulo

| Módulo | Datos de los que es dueño |
|---|---|
| **Identidad y apertura** | Cliente (datos personales y estado de verificación), evidencias (referencia a la foto del documento y del rostro), autorización de tratamiento de datos (fecha y versión), solicitud de apertura y su estado |
| **Cuentas y depósitos** | Depósito, movimiento (nunca se modifica), reserva, parámetros (SMLMV y tope de 8 SMLMV), cálculo del GMF, asientos para contabilidad |
| **Pagos y transferencias** | Transferencia (entre cuentas y Bre-B, con su estado), orden Bre-B y su respuesta, partidas de conciliación con Bre-B |
| **Efectivo y corresponsales** | Corresponsal y terminal, operación de efectivo (autorizada, confirmada o vencida), conciliación con las redes |
| **Cumplimiento y riesgo** | Caso de revisión (retención y decisión del analista), resultado de consulta de listas, reglas antifraude, reportes a la UIAF y a la Superintendencia Financiera |
| **Atención al cliente** | Catálogo de tarifas, queja o reclamo (con radicado), extractos, avisos de cambios de contrato |
| **Notificaciones** | Notificación (canal, plantilla, estado de entrega) y preferencias de canal |
| **Auditoría** | Registro de cada operación (quién, qué, cuándo, resultado); solo se agrega |

## Tres decisiones adicionales

1. **Archivos de identidad fuera de la base de datos.** La base guarda solo la referencia a las fotos; los archivos viven en almacenamiento de objetos. Así la base no engorda con binarios y se pueden proteger y retener de forma distinta. El servicio concreto se elige en el Módulo 8.
2. **Datos personales separados del dinero.** Depósito, movimiento y auditoría guardan solo el identificador del cliente, nunca sus datos personales. Así el libro mayor y la auditoría se conservan todo el plazo legal sin chocar con las obligaciones de la Ley 1581 sobre datos personales.
3. **Consultas entre módulos por la puerta pública.** Por ejemplo, Atención le pide a Cuentas los movimientos. Las copias de lectura alimentadas por eventos se permiten solo si hay una razón medible (reportes pesados) y siempre con un solo dueño.

## Diagrama entidad-relación general

Las líneas punteadas son referencias por identificador entre módulos; las continuas, relaciones dentro del mismo módulo. Cada entidad lleva, entre paréntesis, el módulo dueño.

```mermaid
erDiagram
    CLIENTE ||--o{ EVIDENCIA : tiene
    CLIENTE ||--o{ AUTORIZACION_DATOS : otorga
    CLIENTE ||--o{ SOLICITUD_APERTURA : inicia

    DEPOSITO ||--o{ MOVIMIENTO : registra
    DEPOSITO ||--o{ RESERVA : aparta

    TRANSFERENCIA ||--o| ORDEN_BREB : "se envia como"

    CORRESPONSAL ||--o{ TERMINAL : opera
    TERMINAL ||--o{ OPERACION_EFECTIVO : "autoriza y confirma"

    CASO_REVISION ||--o{ REPORTE_AUTORIDAD : "puede generar"

    CLIENTE ||..o{ DEPOSITO : "es titular (por id)"
    DEPOSITO ||..o{ TRANSFERENCIA : "origen o destino (por id)"
    DEPOSITO ||..o{ OPERACION_EFECTIVO : "se acredita o debita (por id)"
    DEPOSITO ||..o{ QUEJA : "se reclama sobre (por id)"
    CLIENTE ||..o{ NOTIFICACION : recibe
    TRANSFERENCIA ||..o{ CASO_REVISION : "puede retener (por id)"
    OPERACION_EFECTIVO ||..o{ CASO_REVISION : "puede retener (por id)"
    MOVIMIENTO ||..o{ REGISTRO_AUDITORIA : "deja huella (por id)"

    CLIENTE {
        uuid id PK
        string estado_verificacion
        string modulo "Identidad y apertura"
    }
    EVIDENCIA {
        uuid id PK
        string referencia_archivo
    }
    AUTORIZACION_DATOS {
        uuid id PK
        date fecha
        string version_texto
    }
    SOLICITUD_APERTURA {
        uuid id PK
        string estado
    }
    DEPOSITO {
        uuid id PK
        uuid cliente_id
        string estado
        decimal saldo
        string modulo "Cuentas y depositos"
    }
    MOVIMIENTO {
        uuid id PK
        uuid operacion_id
        decimal valor
    }
    RESERVA {
        uuid id PK
        decimal valor
        string estado
    }
    TRANSFERENCIA {
        uuid id PK
        string tipo "interna o Bre-B"
        string estado
        string modulo "Pagos y transferencias"
    }
    ORDEN_BREB {
        uuid id PK
        string respuesta
    }
    CORRESPONSAL {
        uuid id PK
        string modulo "Efectivo y corresponsales"
    }
    TERMINAL {
        uuid id PK
    }
    OPERACION_EFECTIVO {
        uuid id PK
        string estado
    }
    CASO_REVISION {
        uuid id PK
        string decision
        string modulo "Cumplimiento y riesgo"
    }
    REPORTE_AUTORIDAD {
        uuid id PK
        string autoridad
    }
    QUEJA {
        uuid id PK
        string radicado
        string modulo "Atencion al cliente"
    }
    NOTIFICACION {
        uuid id PK
        string canal
        string estado_entrega
        string modulo "Notificaciones"
    }
    REGISTRO_AUDITORIA {
        uuid id PK
        string actor
        string accion
        string modulo "Auditoria"
    }
```

:::note Alcance
Es un modelo de **alto nivel**: muestra qué entidad es de quién y cómo se conectan, no cada columna. El diseño físico (tipos, índices, particiones) se hace al construir, dentro de cada esquema.
:::

Las copias editables están en `modelos/datos/` (ver [README](https://github.com/maomauro/fintech-kuenta/tree/main/modelos/datos)). El detalle del dinero está en el [libro mayor](./libro-mayor.md).
