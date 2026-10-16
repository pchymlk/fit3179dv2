// Shared look for every chart (palette: Ocean, Sky, Blush, Rust, Leather, Linen)
const theme = {
  background: "#FBF5EA",
  font: "Nunito",
  view: { stroke: null },
  axis: {
    labelFont: "Nunito", titleFont: "Nunito",
    labelColor: "#3F1816", titleColor: "#3F1816",
    gridColor: "#E6D8C0", domainColor: "#A9835C", tickColor: "#A9835C"
  },
  legend: {
    labelFont: "Nunito", titleFont: "Nunito",
    labelColor: "#3F1816", titleColor: "#3F1816"
  },
  header: { labelFont: "Nunito", labelColor: "#003F50" }
};

const charts = [
  ["#chart1", "specs/01_participation_trend.vg.json"],
  ["#chart2", "specs/02_state_choropleth.vg.json"],
  ["#chart3", "specs/03_student_distribution.vg.json"],
  ["#chart4", "specs/04_state_comparison.vg.json"],
  ["#chart5", "specs/05_student_pathways.vg.json"],
  ["#chart6", "specs/06_state_rankings.vg.json"],
  ["#chart7", "specs/07_fields_of_study.vg.json"],
  ["#chart8", "specs/08_student_outcomes.vg.json"],
  ["#chart9", "specs/09_student_profiles.vg.json"],
  ["#chart10", "specs/10_participation_gaps.vg.json"],
  ["#chart11", "specs/11_state_profiles.vg.json"]
];

// Wait for the web fonts so canvas text uses Nunito, not a fallback
const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

fontsReady.then(() => {
  charts.forEach(([container, specUrl]) => {
    vegaEmbed(container, specUrl, {
      actions: false,
      renderer: "canvas",
      config: theme
    }).catch(error => {
      console.error("Error loading " + specUrl, error);
      const element = document.querySelector(container);
      element.classList.add("chart-missing");
      element.textContent = "This chart isn't available yet.";
    });
  });
});