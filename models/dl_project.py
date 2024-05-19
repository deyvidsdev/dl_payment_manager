from odoo import fields, models, api

class DlProject(models.Model):
    _name = "dl.project"

    name = fields.Char(string = 'Nombre')
    star_date = fields.Date(string = 'Fecha de inicio')
    end_date = fields.Date(string = 'Fecha de fin')
    state = fields.Selection([
        ('draft', 'Borrador'), 
        ('in_progress', 'En progreso'),
        ('completed', 'Completado'),
        ('cancelled', 'Cancelado') 
    ], string='Estado', default='draft')
    
    total_amount = fields.Float('Monto total')

    payment_ids = fields.One2many('dl.payment', 'project_id', string='Pagos')
    company_id = fields.Many2one('dl.company', string='Company')
    deliverable_ids = fields.One2many('dl.deliverable', 'project_id', string='Entregables')
    employee_ids = fields.Many2many('dl.employee', string='Empleados')