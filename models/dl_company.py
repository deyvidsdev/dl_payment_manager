from odoo import fields, models, api

class DlCompany(models.Model):
    _name = "dl.company"

    name = fields.Char('Nombre')
    
    # Campos de Compañia
    
    street = fields.Char('Calle')
    street2 = fields.Char('Calle 2')
    city = fields.Char('Ciudad')
    state_id = fields.Many2one('res.country.state', string='Estado')
    country_id = fields.Many2one('res.country', string='País')
    zip = fields.Char('Código Postal')
    phone = fields.Char('Teléfono')
    email = fields.Char('Correo Electrónico')
    website = fields.Char('Sitio Web')
    vat = fields.Char('Número de IVA')
    company_registry = fields.Char('Registro de la Compañía')
    logo = fields.Binary('Logo')
    currency_id = fields.Many2one('res.currency', string='Moneda')
    active = fields.Boolean('Activo', default=True)

    project_ids = fields.One2many('dl.project', 'company_id', string='Proyectos')
    
    _sql_constraints = [
        ('name_uniq', 'unique (name)', 'El nombre de la compañía debe ser único!')
    ]