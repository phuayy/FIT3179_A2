var vg_evmap = "ev_map.json";
vegaEmbed("#vis", vg_evmap, {actions: false}).then(function(res){}).catch(console.error);

var vg_gdp_lollipop = "gdp_scatter.json";
vegaEmbed("#gdp_chart", vg_gdp_lollipop, { actions: false })
  .then(function (result) {})
  .catch(console.error);

var vg_population_chart = "bubble_chart.json";
vegaEmbed("#population_chart", vg_population_chart, { actions: false }).catch(console.error);