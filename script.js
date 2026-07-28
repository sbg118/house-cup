// ===== STANDINGS =====

const standingsURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vT_2X7hLkzv-vT2VV7Fh8f15tyngUPblwmGwgGlfFae6MV3yxT3UykBW3UJvSgZJbNw02ihQBoF6YXq/pub?gid=392305567&single=true&output=csv";

fetch(standingsURL)
.then(response => response.text())
.then(data => {

    const rows = data.split("\n").slice(1);

    let html = "";

    rows.forEach(row => {

        const cols = row.split(",");

        if(cols.length >= 2){

            html += `
                <div class="house-card">
                    <h3>${cols[0]}</h3>
                    <p>${cols[1]} Points</p>
                </div>
            `;
        }

    });

    document.getElementById("leaderboard").innerHTML = html;

});


// ===== POINT CATEGORIES =====

const pointsURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vT_2X7hLkzv-vT2VV7Fh8f15tyngUPblwmGwgGlfFae6MV3yxT3UykBW3UJvSgZJbNw02ihQBoF6YXq/pub?gid=1642775811&single=true&output=csv";

fetch(pointsURL)
.then(response => response.text())
.then(data => {

    const rows = data.split("\n").slice(1);

    let positiveHTML = "";
    let negativeHTML = "";

    rows.forEach(row => {

        const cols = row.split(",");

        // Positive
        if(cols[0] && cols[1]){

            positiveHTML += `
                <div class="challenge-card">
                    <strong>${cols[0]}</strong>
                    <br>
                    ${cols[1]} Points
                </div>
            `;
        }

        // Negative
        if(cols[2] && cols[3]){

            negativeHTML += `
                <div class="challenge-card">
                    <strong>${cols[2]}</strong>
                    <br>
                    ${cols[3]} Points
                </div>
            `;
        }

    });

    document.getElementById("positive-categories").innerHTML =
    positiveHTML;

    document.getElementById("negative-categories").innerHTML =
    negativeHTML;

});
