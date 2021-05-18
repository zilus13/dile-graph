import { html, css, LitElement } from "lit-element";

export class DileGraph extends LitElement {
  static get styles() {
    return css`
        :host {
            display: block;
        }

        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            width: 400px;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .container {
            padding: 20px 16px;
            text-align:center
        }
        .graf-div{
            width:300px; 
            height:300px 
            display: block;
            margin: 0 auto;
        }
        
    `;
  }
  static get properties() {
    return {
      Test: { type: String },
      myChart: { type: Object },
      tituloDeGrafico: { type: String },
      columnasDelgrafico: { type: String },
      valoresDeColumnas: { type: Array },
      coloresDeColumnas: { type: Array },
      coloresDeBordesDeColumnas: { type: Array },
    };
  }

  constructor() {
    super();
    this.tituloDeGrafico = "titulo de grafico";
    this.columnasDelgrafico = ["columna1", "columna2"];
    this.valoresDeColumnas = [3, 7];
    this.coloresDeColumnas = [
      "rgba(200, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
    ];
    this.coloresDeBordesDeColumnas = [
      "rgba(255,99,132,1)",
      "rgba(54, 162, 235, 1)",
    ];
  }

  render() {
    return html`
      <div class="card">
        <div class="graf-div">
          <canvas id="myChart2" width="400" height="400"></canvas>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    const ctx = this.renderRoot.querySelector("#myChart2").getContext("2d");
    this.myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.columnasDelgrafico,
        datasets: [
          {
            label: this.tituloDeGrafico,
            data: this.valoresDeColumnas,
            backgroundColor: this.coloresDeColumnas,
            borderColor: this.coloresDeBordesDeColumnas,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
