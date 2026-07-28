// ===========================
// CURRENT STANDINGS
// ===========================

fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT_2X7hLkzv-vT2VV7Fh8f15tyngUPblwmGwgGlfFae6MV3yxT3UykBW3UJvSgZJbNw02ihQBoF6YXq/pub?gid=392305567&single=true&output=csv")
.then(response => response.text())
.then(data => {

    let rows = data.trim().split("\n").slice(1);

    let html = "";

    rows.forEach(row => {

        let cols = row.split(",");

        if(cols[0]) {

            html += `
                <div class="house-card">
                    <h3>${cols[0]}</h3>
                    <p>${cols[1] || 0} Points</p>
                </div>
            `;
        }

    });

    document.getElementById("leaderboard").innerHTML = html;

});


// ===========================
// POSITIVE CATEGORIES
// ===========================

const positiveCategories = [

["Correct Time Cards (per week/per team)",30],
["Student Feedback Survey",1],
["Appointment Reports / Summaries",40],
["Clean Tutoring Space",5],
["Digitize Notes",15],
["Help with Question of the Day",5],
["House Cup",200],
["Attend Tutoring Events",50],
["Creating Supplemental Resources",15],
["Representing the Tutoring Center",35],
["Submitting Schedule Requests Early",5],
["Helping with Bulletin Board / Window Display",5],
["Encouraging a Friend to Apply",35],
["Responding to Events / Invites",1],
["Organizing Review Session",50]

];

let positiveHTML = "";

positiveCategories.forEach(item => {

    positiveHTML += `
        <div class="challenge-card">
            <strong>${item[0]}</strong>
            <br>
            ${item[1]} Points
        </div>
    `;

});

document.getElementById("positive-categories").innerHTML =
positiveHTML;


// ===========================
// NEGATIVE CATEGORIES
// ===========================

const negativeCategories = [

["Time Card Corrections",-5],
["Incomplete Appointment Reports",-5],
["Submitting Schedule Requests Late",-10],
["Not Responding to Emails Within 48 Hours",-10],
["Additional Email Needed for Response",-10],
["No-Show for Scheduled Shift",-50]

];

let negativeHTML = "";

negativeCategories.forEach(item => {

    negativeHTML += `
        <div class="challenge-card">
            <strong>${item[0]}</strong>
            <br>
            ${item[1]} Points
        </div>
    `;

});

document.getElementById("negative-categories").innerHTML =
negativeHTML;
