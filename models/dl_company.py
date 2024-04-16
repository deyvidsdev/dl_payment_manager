from odoo import fields, models, api

class DlCompany(models.Model):
    _name = "dl.company"

    name = fields.Char('Nombre')

    project_ids = fields.One2many('dl.project', 'company_id', string='Proyectos')