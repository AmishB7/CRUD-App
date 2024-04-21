document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5500/getAll")
    .then((res) => res.json())
    .then((data) => loadHtmlTable(data["data"]));
});

function loadHtmlTable(data) {
  const table = document.querySelector("table tbody");
  console.log(data);
  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
  }
}
