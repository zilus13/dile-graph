# \<dile-graph>

Web Component to show a custom graph to the user usign Chart.js

## Installation

```bash
npm i dile-graph
```

## Usage

Add the following library in the index

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"></script>
```

then

```html
<script type="module">
  import "dile-graph/dile-graph.js";
</script>

<dile-graph></dile-graph>
```

It is also possible to set the values ​​of the graph with the following variables

| Custom variable           | Description          | Default                                                |
| ------------------------- | -------------------- | ------------------------------------------------------ |
| tituloDeGrafico           | graphic title        | titulo de grafico                                      |
| columnasDelgrafico        | columns of the graph | ["columna1", "columna2"]                               |
| valoresDeColumnas         | Column values        | [3, 7,]                                                |
| coloresDeColumnas         | Columns colors       | ["rgba(200, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"] |
| coloresDeBordesDeColumnas | Column Border Colors | ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)"]        |

## Local Demo with `web-dev-server`

```bash
npm run start
```

To run a local development server that serves the basic demo located in `demo/index.html`
