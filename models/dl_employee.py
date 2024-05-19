from odoo import fields, models, api

class DlEmployee(models.Model):
    _name = "dl.employee"
    
    name = fields.Char('Nombre')
    address = fields.Char('Dirección')
    birthdate = fields.Date('Fecha de nacimiendo')
    salary = fields.Float('Sueldo')
    email = fields.Char("Correo electrónico")