from odoo import fields, models, api

class DlEmployee(models.Model):
    _name = "dl.employee"
    
    name = fields.Char('Nombre')
    last_name = fields.Char('Apellido')
    address = fields.Char('Dirección')
    birthdate = fields.Date('Fecha de nacimiendo')
    salary = fields.Float('Sueldo')