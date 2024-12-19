# Payment Manager

**Payment Manager** es un módulo para Odoo desarrollado por **Deyvids**. Está diseñado para gestionar y registrar proyectos, pagos y entregables de manera eficiente, proporcionando herramientas intuitivas para mejorar el control administrativo en las organizaciones.

## Características

- **Gestión de Proyectos:** 
  - Registro y administración de proyectos.
  - Integración con empleados mediante el módulo de Recursos Humanos (`hr`).

- **Gestión de Pagos:**
  - Seguimiento de pagos relacionados con proyectos y empleados.
  - Configuración y visualización de detalles de pagos.

- **Registro de Entregables:**
  - Control y seguimiento de entregables asociados a los proyectos.

- **Dashboard Interactivo:**
  - Tablero personalizable utilizando Gridstack.js.
  - Elementos visuales para el análisis y monitoreo de datos.

## Instalación

1. Descarga o clona el repositorio del módulo en la carpeta `addons` de tu instalación de Odoo.
2. Asegúrate de que los módulos `base` y `hr` estén instalados.
3. Activa el modo desarrollador en Odoo.
4. Ve a **Aplicaciones** y actualiza la lista de módulos.
5. Busca `Payment Manager` e instálalo.

## Dependencias

Este módulo requiere los siguientes módulos preinstalados en Odoo:
- `base`
- `hr`

## Configuración

1. Accede al menú **Configuración** para definir los proyectos, pagos y entregables.
2. Personaliza el dashboard según las necesidades de tu empresa.

## Archivos Incluidos

### Datos y Vistas
- `menus/menu.xml`: Configuración del menú principal.
- `views/dl_project_view.xml`: Vista de proyectos.
- `views/dl_payment_view.xml`: Vista de pagos.
- `views/dl_company_view.xml`: Vista de empresas.
- `views/dl_deliverable_view.xml`: Vista de entregables.
- `security/ir_model_access.xml`: Configuración de permisos de acceso.

### Recursos Frontend
- **JavaScript:**
  - `dl_payment_manager/static/src/js/gridstack-all.js`
  - `dl_payment_manager/static/src/js/dl-dashboard.js`
- **CSS:**
  - `dl_payment_manager/static/src/css/gridstack.css`
  - `dl_payment_manager/static/src/css/gridstack-extra.css`
- **Plantillas XML:**
  - `dl_payment_manager/static/src/xml/dl-dashboard.xml`

## Uso

Este módulo es ideal para empresas que buscan:
- Centralizar la gestión de proyectos y pagos.
- Controlar entregables relacionados con proyectos.
- Analizar datos mediante un dashboard visual e interactivo.

## Licencia

Este módulo está distribuido bajo la licencia **LGPL-3**.

## Contacto

**Digilab Soluciones S.A.C**  
Correo: [deyvidsalvino@gmail.com](mailto:deyvidsalvino@gmail.com)  
Teléfono: +51 923 609 010
