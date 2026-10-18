---
sidebar_position: 2
title: Épicas e historias
---

# Épicas e historias

El backlog inicial de Kuenta. Cada **épica** agrupa historias de un mismo objetivo; cada **historia** cubre uno o más requisitos del [catálogo](../requisitos/requisitos-funcionales.md) y se escribe como "Como... quiero... para...". Los criterios de aceptación se escriben en formato Dado/Cuando/Entonces para poder convertirlos en pruebas automatizadas.

La columna **Release** indica en cuál entrega sale cada historia (ver el [plan de releases](./plan-de-releases.md)).

## Épicas

| Id | Épica | Requisitos | Release |
|---|---|---|---|
| E1 | Apertura y verificación de identidad | RF-01, RF-02, RF-03, RF-05, RF-06 | 1 |
| E2 | Control y cumplimiento | RF-04, RF-07, RF-08, RF-15 a RF-19 | 1 |
| E3 | Efectivo en corresponsales | RF-09, RF-10, RF-11 | 1 |
| E4 | Transferencias entre cuentas Kuenta | RF-12 | 1 |
| E5 | Transferencias por Bre-B | RF-13 | 2 |
| E6 | Atención y transparencia | RF-20 a RF-24 | 1 y 2 |
| E7 | Ciclo de vida del depósito | RF-14 | 2 |

## Historias

| Id | Épica | Historia | Req. | Release |
|---|---|---|---|---|
| HU-01 | E1 | Como cliente quiero registrarme desde la app con mis datos y la foto de mi documento y de mi rostro, para abrir mi depósito sin ir a una oficina | RF-01 | 1 |
| HU-02 | E1 | Como cliente quiero autorizar de forma clara el tratamiento de mis datos, incluidos los biométricos, para saber qué se hace con ellos | RF-02 | 1 |
| HU-03 | E1 | Como Kuenta quiero validar la identidad del cliente con la Registraduría, para abrir cuentas solo a personas reales | RF-03 | 1 |
| HU-04 | E1 | Como analista de cumplimiento quiero recibir los casos que no pasen la validación, para decidirlos manualmente | RF-05 | 1 |
| HU-05 | E1 | Como cliente quiero tener mi depósito sin monto mínimo, uno por persona, para empezar a usarlo sin barreras | RF-06 | 1 |
| HU-06 | E2 | Como Kuenta quiero consultar las listas restrictivas antes de abrir y de forma continua, para cumplir el SARLAFT | RF-04 | 1 |
| HU-07 | E2 | Como cliente quiero completar mi información restante después de abrir, para mantener mi depósito en regla | RF-07 | 1 |
| HU-08 | E2 | Como Kuenta quiero controlar que el saldo y los débitos mensuales no superen 8 SMLMV, para cumplir el límite del producto | RF-08 | 1 |
| HU-09 | E2 | Como Kuenta quiero revisar cada movimiento con reglas antifraude y retener los sospechosos, para proteger el dinero de los clientes | RF-15 | 1 |
| HU-10 | E2 | Como analista de cumplimiento quiero revisar lo retenido y decidir si se libera o se rechaza | RF-16 | 1 |
| HU-11 | E2 | Como regulador quiero recibir los reportes de operaciones sospechosas, para ejercer la supervisión | RF-17 | 1 |
| HU-12 | E2 | Como regulador quiero consultar un registro de auditoría de cada operación, para verificar lo ocurrido | RF-18 | 1 |
| HU-13 | E2 | Como cliente quiero que se calcule el GMF y se aplique la exención de retiros hasta 65 UVT, para pagar solo lo debido | RF-19 | 1 |
| HU-14 | E3 | Como cliente quiero depositar efectivo en un corresponsal y ver el valor acreditado, para tener mi dinero en la cuenta | RF-09, RF-10 | 1 |
| HU-15 | E3 | Como cliente quiero retirar efectivo en un corresponsal, para disponer de mi dinero | RF-11 | 1 |
| HU-16 | E4 | Como cliente quiero transferir dinero a otra cuenta Kuenta, para pagar a otra persona al instante | RF-12 | 1 |
| HU-17 | E5 | Como cliente quiero transferir a otra entidad por Bre-B, viendo antes el nombre enmascarado del beneficiario y el costo, para pagar a cualquier persona | RF-13 | 2 |
| HU-18 | E6 | Como cliente quiero recibir una notificación con el resultado de cada solicitud y operación, para saber qué pasó | RF-20 | 1 |
| HU-19 | E6 | Como cliente quiero ver el costo antes de cada operación y consultar las tarifas, para decidir con información | RF-21 | 1 |
| HU-20 | E6 | Como cliente quiero consultar mi saldo y mis movimientos y recibir el extracto mensual sin costo | RF-22 | 1 |
| HU-21 | E6 | Como cliente quiero presentar una queja o un reclamo y recibir un número de radicado, para hacer seguimiento y acudir al defensor del consumidor financiero | RF-23 | 1 |
| HU-22 | E6 | Como cliente quiero recibir aviso previo de los cambios del contrato, para no enterarme tarde | RF-24 | 2 |
| HU-23 | E7 | Como Kuenta quiero terminar el depósito sin fondos por 3 meses o más, avisando antes al cliente, para cumplir el decreto | RF-14 | 2 |

Los 24 requisitos funcionales quedan cubiertos por al menos una historia.

## Criterios de aceptación de ejemplo

Cuatro historias con sus criterios completos. Las demás se escriben en el mismo formato cuando entran a un sprint, no antes.

### HU-03 Validar la identidad con la Registraduría

```gherkin
Escenario: Identidad válida
  Dado un cliente con sus datos y la foto de su documento
  Cuando Kuenta consulta a la Registraduría (simulada)
  Entonces la identidad queda validada
  Y la solicitud continúa con la consulta de listas restrictivas

Escenario: Identidad que no coincide
  Dado un cliente cuyos datos no coinciden con la Registraduría
  Cuando Kuenta recibe la respuesta
  Entonces la solicitud pasa a revisión manual
  Y el cliente recibe una notificación de que su solicitud está en revisión
```

### HU-08 Controlar el tope de 8 SMLMV

```gherkin
Escenario: Depósito que supera el tope
  Dado un cliente con un saldo de 13.950.000 pesos y un tope de 14.007.240 pesos
  Cuando intenta depositar 100.000 pesos
  Entonces la operación se rechaza
  Y el cliente recibe una notificación con el motivo

Escenario: Operación dentro del tope
  Dado un cliente con un saldo de 1.000.000 de pesos
  Cuando deposita 100.000 pesos
  Entonces la operación se autoriza
```

El tope es un parámetro (8 SMLMV); los valores de los ejemplos son de 2026 y cambian cada año.

### HU-14 Depositar efectivo en un corresponsal

```gherkin
Escenario: Depósito autorizado
  Dado una cuenta activa y un depósito dentro del tope
  Cuando el corresponsal registra el depósito en el terminal
  Entonces Kuenta autoriza la operación antes de que el corresponsal reciba el dinero
  Y tras recibir el efectivo, el valor se acredita
  Y el cliente recibe el comprobante y una notificación

Escenario: Cuenta inexistente o inactiva
  Dado un número de cuenta que no existe o está inactiva
  Cuando el corresponsal registra el depósito
  Entonces la operación se rechaza y no se recibe efectivo
```

### HU-16 Transferir a otra cuenta Kuenta

```gherkin
Escenario: Transferencia exitosa
  Dado un cliente con saldo suficiente y una cuenta destino activa dentro del tope
  Cuando confirma la transferencia
  Entonces el valor sale de su cuenta y entra en la de destino
  Y ambos reciben una notificación
  Y queda un registro de auditoría

Escenario: Saldo insuficiente
  Dado un cliente cuyo saldo es menor al valor a transferir
  Cuando confirma la transferencia
  Entonces la operación se rechaza y no se mueve dinero
```

## Orden del backlog

La prioridad sale de tres criterios, en este orden: lo que la ley exige antes de operar, el orden de los [atributos de calidad](../requisitos/atributos-de-calidad.md) (seguridad e integridad del dinero primero) y el valor para el cliente. El detalle de qué entra en cada entrega está en el [plan de releases](./plan-de-releases.md).
