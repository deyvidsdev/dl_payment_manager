/** @odoo-module **/

import { loadBundle, loadJS } from "@web/core/assets";
import { Component, onWillUnmount, useEffect, useRef, useState, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { _t } from "@web/core/l10n/translation";
//import Chart from "chart.js/auto";

class Welcome extends Component {
    static template = "dl_payment_manager.welcome";

    setup() {
        this.http = useService("http");
        this.orm = useService("orm");
        this.dialog = useService("dialog");
        this.notificationService = useService("notification");
        this.state = useState({
            title: "",
            description: "",
            segments: [],
            selectedSegment: null,
            column: "",
            items: []
        });
        

        this.canvasAnnualIncome = useRef("AnnualIncome");
        this.canvasQuarterlyProgress = useRef("quarterlyProgress");
        this.canvasDoughnutData = useRef("doughnutData");
        
        // Inicializando los cards
        this.chartAnnualIncome = null
        this.chartQuarterlyProgress = null
        this.chartDoughnutData = null

        onWillStart(async () => {
            await loadBundle("web.chartjs_lib");
            await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js")
        });


        useEffect(() => {
            const grid = GridStack.init({
                cellHeight: 'auto',
                animate: false,
            }).on('change', (ev, gsItems) => {
                this.column = grid.getColumn();
                console.log(this.column)
            });;

            this.renderAnnualIncome();
            this.renderQuarterlyProgress();
            this.renderDoughnutData();

            grid.load(this.state.items);

        });
        onWillUnmount(() => {
            this.onWillUnmount()
            this.delBackground()
        });
    }



    addBackground() {
        const actionManagerEl = document.querySelector('.o_action_manager');
        if (actionManagerEl) {
            actionManagerEl.id = 'doodles';
            actionManagerEl.classList.add('list-contact');
        } else {
            console.warn('Elemento .o_action_manager no encontrado.');
        }
    }

    delBackground() {
        const actionManagerEl = document.querySelector('.o_action_manager');
        if (actionManagerEl.id = 'doodles') {
            actionManagerEl.id = null;
            actionManagerEl.classList.remove('list-contact');
        } else {
            console.warn('Elemento .o_action_manager no encontrado.');
        }
    }

    async openModal() {
    }

    selectSegment(ev) {
        this.state.selectedSegment = this.state.segments.find(segment => segment.id == ev.target.value);
        console.log(this.state);
    }

    // Graficos
    async renderAnnualIncome() {
        if (this.chartAnnualIncome) {
            this.chartAnnualIncome.destroy();
        }

        const anual = await this.get_payment_annual();

        this.chartAnnualIncome = new Chart(this.canvasAnnualIncome.el, {
            type: "line",
            data: {
                labels: [
                            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
                            'Junio', 'Julio', 'Agosto', 'Septiembre', 
                            'Diciembre'
                        ],
                datasets: [
                    {
                    label: 'Mensual',
                    data: anual,
                    backgroundColor: 'rgba(255, 100, 144)',
                    borderColor: 'rgba(255, 139, 164)',
                    borderWidth: 1,
                    pointStyle: 'rectRot',
                    pointRadius: 5,
                    pointBorderColor: 'rgb(0, 0, 0)',
                    tension: 0.1
                },              
            ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Ingresos Anuales', // Título principal
                        font: {
                            size: 24 // Tamaño del texto del título
                        }
                    },
                },
                maintainAspectRatio: false,
                scales: {
                    y: {
                        stacked: true,
                        grid: {
                            display: true,
                            color: "rgba(255,99,132,0.2)"
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    async renderQuarterlyProgress(){

        if (this.chartQuarterlyProgress) {
            this.chartQuarterlyProgress.destroy();
        }

        const quarterly = await this.get_project_quarterly();
        
        console.log("quarterly: ", quarterly);

        this.canvasQuarterlyProgress = new Chart(this.canvasQuarterlyProgress.el, {
            type: "bar",
            data:{
                labels: ['Enero - Marzo', 'Abril - Junio', 'Julio - Septiembre', 'Octubre - Diciembre'],
                datasets: [
                    {
                    label: 'Trimestrales',
                    data: [20, 30, 100, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                    ],
                    borderWidth: 1,
                    pointRadius: 5,
                    },]
            },
            
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Proyecto terminados',
                        font: {
                            size: 24
                        }
                    },
                },
                maintainAspectRatio: false,
                scales: {
                    y: {
                        stacked: true,
                        grid: {
                            display: true,
                            color: "rgba(255,99,132,0.2)"
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });

    }

    async renderDoughnutData(){

        if (this.chartDoughnutData) {
            this.chartDoughnutData.destroy();
        }

        this.canvasDoughnutData = new Chart(this.canvasDoughnutData.el, {
            type: "doughnut",
            data:{
                labels: ['Ingresos', 'Gastos'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [20000, 8000],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                    ],
                    hoverOffset: 4
                  }]
            },
        });

    }

    onWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
        if (this.chart2) {
            this.chart2.destroy();
        }
    }


    // Extracción de datos
    async get_payment_annual() {
        try {
            const result = await this.orm.call('dl.payment', 'get_payment_annual', []);
            if (result) {
               return result
            } else {
               return []
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    // Extracción de datos
    async get_project_quarterly() {
        try {
            const result = await this.orm.call('dl.project', 'get_project_quarterly', []);
            if (result) {
               return result
            } else {
               return []
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}

registry.category("actions").add("odoo-mercadolibre.welcome", Welcome);


