
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

charts.forEach(([container, specUrl]) => {
  vegaEmbed(container, specUrl, {
    actions: false,
    renderer: "canvas"
  }).catch(error => {
    console.error("Error loading " + specUrl, error);

    const element = document.querySelector(container);
    element.textContent =
      "Chart not available yet. Check the JSON file and data paths.";
  });
});
