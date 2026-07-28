const csvURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vT_2X7hLkzv-vT2VV7Fh8f15tyngUPblwmGwgGlfFae6MV3yxT3UykBW3UJvSgZJbNw02ihQBoF6YXq/pub?gid=392305567&single=true&output=csv";

fetch(csvURL)
  .then(response => response.text())
  .then(data => {

    const rows = data.split("\n").slice(1);

    let houses = [];

    rows.forEach(row => {

      const cols = row.split(",");

      if(cols.length >= 2){

        houses.push({
          name: cols[0],
          points: parseInt(cols[1]) || 0
        });

      }

    });

    houses.sort((a,b) => b.points - a.points);

    let html = "";

    houses.forEach((house,index) => {

      html += `
        <div class="house-card">
          <h3>#${index + 1}</h3>
          <h2>${house.name}</h2>
          <p>${house.points} Points</p>
        </div>
      `;

    });

    document.getElementById("leaderboard").innerHTML = html;

  })
  .catch(error => {

    document.getElementById("leaderboard").innerHTML =
      "<p>Unable to load standings.</p>";

    console.error(error);

  });
