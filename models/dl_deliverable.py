from odoo import fields, models, api

class DlDeliverable(models.Model):
    _name = "dl.deliverable"
    _rec_name= "name"
    
    name = fields.Char('Nombre')
    description = fields.Text('Descripción')
    date = fields.Date('Fecha de entrega')
    project_id = fields.Many2one('dl.project', string='Proyecto')
    state = fields.Selection([
        ('in_progress', 'En progreso'),
        ('completed', 'Completado')
    ], string='Estado')