from odoo import fields, models, api
from datetime import datetime, timedelta

class DlPayment(models.Model):
    _name = 'dl.payment'
    
    amount = fields.Float(string = 'Monto')
    state = fields.Selection([
        ('pending', 'Pendiente'),
        ('paid', 'Pagado')
    ], string = 'Estado')
    
    payment_date = fields.Date('Date')
    project_id = fields.Many2one('dl.project', string='Proyecto')

    @api.model
    def get_payment_annual(self):
        
        # Año actual
        year = datetime.now().year
        payment_annual = []

        for month in range(1, 13):
            
            # Crear la fecha de inicio y fin del mes
            start_date = datetime(year, month, 1)
            
            if month == 12:
                end_date = datetime(year + 1, 1, 1) - timedelta(days=1)
            else:
                end_date = datetime(year, month + 1, 1) - timedelta(days=1)

            # Buscar los pagos en el rango de fechas
            payments = self.env['dl.payment'].search([
                ('payment_date', '>=', start_date),
                ('payment_date', '<=', end_date)
            ])

            # Calcular el total de pagos del mes
            monthly_total = sum(payment.amount for payment in payments)
            
            payment_annual.append(monthly_total)

        return payment_annual
