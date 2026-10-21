workspace "Kuenta" "Arquitectura de aplicación de Kuenta: una SEDPE colombiana (depósito de bajo monto). Modelo C4 del Módulo 5." {

    !identifiers flat
    !impliedRelationships true

    model {
        # Personas
        cliente = person "Cliente" "Persona natural con un depósito de bajo monto" "Persona"
        corresponsal = person "Corresponsal" "Atiende depósitos y retiros de efectivo en su establecimiento" "Persona"
        analista = person "Analista de cumplimiento" "Revisa lo retenido y decide si se libera o se rechaza" "Persona"
        regulador = person "Regulador" "Recibe reportes y consulta la auditoría" "Persona"
        personal = person "Personal de Kuenta" "Empleados que usan los sistemas de apoyo" "Persona"

        # Sistemas externos: del ecosistema regulado
        registraduria = softwareSystem "Registraduría Nacional (simulada)" "Valida la identidad del cliente" "Externo"
        listas = softwareSystem "Proveedor de listas restrictivas" "Consulta de listas para SARLAFT" "Externo"
        breb = softwareSystem "Bre-B" "Sistema de pagos inmediatos del Banco de la República" "Externo"
        autoridades = softwareSystem "UIAF y Superintendencia Financiera" "Reciben los reportes de operaciones sospechosas y los reportes mínimos" "Externo"
        redes = softwareSystem "Redes de corresponsales" "Operan los terminales y concilian con Kuenta" "Externo"
        mensajeria = softwareSystem "Proveedor de notificaciones" "Envía mensajes al cliente (SMS, correo, notificación en la app)" "Externo"

        # Sistemas de apoyo: se compran o se contratan, no se diseñan por dentro
        contable = softwareSystem "Sistema contable y de tesorería" "Contabilidad general y tesorería (CAP-24)" "Apoyo"
        nomina = softwareSystem "Sistema de personas y nómina" "Gestión de personas (CAP-26)" "Apoyo"
        compras = softwareSystem "Sistema de compras y proveedores" "Gestión de proveedores y terceros (CAP-27)" "Apoyo"

        # El sistema que se diseña
        kuenta = softwareSystem "Kuenta" "Core transaccional: apertura de depósitos, cuentas, pagos, efectivo, cumplimiento y atención" "Kuenta" {

            app = container "Aplicación del cliente" "Abrir el depósito, transferir, consultar y reclamar" "Aplicación móvil" "Cliente"
            terminal = container "Terminal del corresponsal" "Registrar depósitos y retiros de efectivo" "Aplicación de terminal" "Cliente"
            consola = container "Consola de back office" "Revisión manual, reportes y consulta de auditoría" "Aplicación web con MFA" "Cliente"

            monolito = container "Aplicación Kuenta" "Un solo despliegue, varias réplicas. Módulos con datos propios y puertas públicas" "Monolito modular" "Nucleo" {
                identidad = component "Identidad y apertura" "CAP-01 a 03: registrar, verificar identidad, mantener datos del cliente" "Módulo"
                cuentas = component "Cuentas y depósitos" "CAP-04 a 08: depósitos, topes, libro mayor, GMF, inactivos" "Módulo"
                pagos = component "Pagos y transferencias" "CAP-09 a 11: entre cuentas, Bre-B, conciliación" "Módulo"
                efectivo = component "Efectivo y corresponsales" "CAP-12 a 14: depositar, retirar, red de corresponsales" "Módulo"
                cumplimiento = component "Cumplimiento y riesgo" "CAP-15 a 17: listas, antifraude, reportes" "Módulo"
                atencion = component "Atención al cliente" "CAP-20 a 23: tarifas, consultas, extractos, quejas, avisos" "Módulo"
                notificaciones = component "Notificaciones" "CAP-19: avisar al cliente" "Módulo"
                auditoria = component "Auditoría" "CAP-18: registro de cada operación, solo se agrega" "Módulo"
            }

            bd = container "Base de datos" "Un esquema por módulo; ningún módulo lee el esquema de otro" "Base de datos relacional" "BaseDatos"
        }

        # Quién usa qué (contexto y contenedores)
        cliente -> kuenta "Abre su depósito, transfiere y consulta"
        corresponsal -> kuenta "Registra depósitos y retiros"
        analista -> kuenta "Revisa operaciones retenidas"
        regulador -> kuenta "Consulta reportes y auditoría"
        app -> monolito "Llama a la API" "HTTPS"
        terminal -> monolito "Llama a la API" "HTTPS"
        consola -> monolito "Llama a la API" "HTTPS"
        cliente -> app "Usa"
        corresponsal -> terminal "Usa"
        analista -> consola "Usa"
        regulador -> consola "Consulta"
        personal -> nomina "Usa"
        personal -> compras "Usa"
        nomina -> contable "Entrega asientos"
        compras -> contable "Entrega asientos"
        monolito -> bd "Lee y escribe" "SQL"

        # Accesos a los módulos: de ellos se derivan las flechas hacia el monolito y hacia Kuenta
        app -> identidad "Registra al cliente" "HTTPS"
        app -> cuentas "Consulta saldo" "HTTPS"
        app -> pagos "Solicita transferencias" "HTTPS"
        app -> atencion "Consulta, reclama" "HTTPS"
        terminal -> efectivo "Autoriza y confirma depósitos y retiros" "HTTPS"
        consola -> cumplimiento "Revisión manual y reportes" "HTTPS"
        consola -> auditoria "Consulta la auditoría" "HTTPS"

        # Cada módulo habla con los sistemas externos que necesita
        identidad -> registraduria "Valida la identidad"
        cumplimiento -> listas "Consulta listas restrictivas"
        cumplimiento -> autoridades "Reporta operaciones sospechosas"
        pagos -> breb "Envía y recibe transferencias"
        pagos -> redes "Concilia con corresponsales"
        notificaciones -> mensajeria "Pide enviar notificaciones"
        cuentas -> contable "Entrega los asientos contables"

        # Entre módulos: cada flecha es una puerta pública
        identidad -> cuentas "Pide crear el depósito"
        identidad -> cumplimiento "Pide consultar listas"
        pagos -> cuentas "Reserva, debita y acredita"
        pagos -> cumplimiento "Pide revisión antifraude"
        efectivo -> cuentas "Autoriza, debita y acredita"
        efectivo -> cumplimiento "Pide revisión antifraude"
        atencion -> cuentas "Consulta saldo y movimientos"
        identidad -> notificaciones "Publica evento"
        cuentas -> notificaciones "Publica evento"
        pagos -> notificaciones "Publica evento"
        efectivo -> notificaciones "Publica evento"
        cumplimiento -> notificaciones "Publica evento"
        atencion -> notificaciones "Publica evento"
        identidad -> auditoria "Registra"
        cuentas -> auditoria "Registra"
        pagos -> auditoria "Registra"
        efectivo -> auditoria "Registra"
        cumplimiento -> auditoria "Registra"
        atencion -> auditoria "Registra"
    }

    views {
        systemContext kuenta "Contexto" "Kuenta y su entorno: quién la usa y con qué sistemas se conecta" {
            title "Nivel 1 · Contexto de Kuenta"
            include *
            include personal nomina compras
            autoLayout lr 300 100
        }

        container kuenta "Contenedores" "Qué se despliega: las aplicaciones de acceso, el monolito modular y su base de datos" {
            title "Nivel 2 · Contenedores de Kuenta"
            include *
            autoLayout lr 300 100
        }

        component monolito "Modulos" "Los 8 módulos del monolito y sus puertas públicas" {
            title "Nivel 3 · Componentes (módulos) de Kuenta"
            include *
            autoLayout lr 300 100
        }

        dynamic monolito "Apertura" "Secuencia: abrir un depósito de bajo monto (CU-01)" {
            cliente -> app "Envía sus datos, las fotos y la autorización"
            app -> identidad "Registra al cliente"
            identidad -> registraduria "Valida la identidad"
            identidad -> cumplimiento "Pide consultar listas"
            cumplimiento -> listas "Consulta listas restrictivas"
            identidad -> cuentas "Pide crear el depósito"
            identidad -> notificaciones "Publica el evento del resultado"
            notificaciones -> mensajeria "Pide enviar la notificación"
            identidad -> auditoria "Registra"
        }

        dynamic monolito "Transferencia" "Secuencia: transferir entre cuentas Kuenta (CU-05)" {
            cliente -> app "Pide transferir"
            app -> pagos "Solicita la transferencia"
            pagos -> cumplimiento "Pide revisión antifraude"
            pagos -> cuentas "Verifica destino, saldo y tope, y debita y acredita en una sola transacción"
            pagos -> notificaciones "Publica el evento del resultado"
            notificaciones -> mensajeria "Pide enviar la notificación"
            pagos -> auditoria "Registra"
        }

        dynamic monolito "Deposito" "Secuencia: depositar efectivo en un corresponsal (CU-03)" {
            corresponsal -> terminal "Ingresa el depósito del cliente"
            terminal -> efectivo "Pide autorizar el depósito"
            efectivo -> cuentas "Verifica cuenta activa y tope"
            efectivo -> cumplimiento "Pide revisión antifraude"
            efectivo -> terminal "Autoriza recibir el efectivo"
            terminal -> efectivo "Confirma que recibió el efectivo"
            efectivo -> cuentas "Acredita el valor"
            efectivo -> notificaciones "Publica el evento del resultado"
            efectivo -> auditoria "Registra"
        }

        properties {
            "mermaid.sequenceDiagram" "true"
        }

        styles {
            element "Persona" {
                shape person
                background #1F5FA8
                color #ffffff
            }
            element "Kuenta" {
                background #0B3D6B
                color #ffffff
            }
            element "Externo" {
                background #8A8F98
                color #ffffff
            }
            element "Apoyo" {
                background #B9A66B
                color #1a1a1a
            }
            element "Cliente" {
                background #3A7BD0
                color #ffffff
            }
            element "Nucleo" {
                background #0B3D6B
                color #ffffff
            }
            element "BaseDatos" {
                shape cylinder
                background #2E7D5B
                color #ffffff
            }
            element "Módulo" {
                background #3A7BD0
                color #ffffff
            }
        }
    }
}
