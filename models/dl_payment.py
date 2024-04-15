from odoo import fields, models, api

class DlPayment(models.Model):
    _name = 'dl.payment'
    
    amount = fields.Float(string = 'Monto')
    state = fields.Selection([
        ('pending', 'Pendiente'),
        ('paid', 'Pagado')
    ], string = 'Estado')

    project_id = fields.Many2one('dl.project', string='Proyecto')
    
