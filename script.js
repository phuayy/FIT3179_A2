var vg_evmap = "ev_map.json";
vegaEmbed("#vis", vg_evmap, {actions: false}).then(function(res){}).catch(console.error);

var vg_gdp_lollipop = "gdp_lollipop.json";
vegaEmbed("#gdp_chart", vg_gdp_lollipop, { actions: false })
  .then(function (result) {})
  .catch(console.error);