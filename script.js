// ===========================
// CURRENT STANDINGS
// ===========================

fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT_2X7hLkzv-vT2VV7Fh8f15tyngUPblwmGwgGlfFae6MV3yxT3UykBW3UJvSgZJbNw02ihQBoF6YXq/pub?gid=392305567&single=true&output=csv")
.then(response => response.text())
.then(data => {

    const rows = data.trim().split("\n").slice(1);

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


// ===========================
// POSITIVE POINTS
// ===========================

const positiveHTML = `

<div class="challenge-card">
<strong>Correct Time-cards</strong><br>
(per week) (per team)<br>
<b>30 Points</b>
</div>

<div class="challenge-card">
<strong>Student Feedback Survey</strong><br>
(1 pt. per survey completed)<br>
<b>1 Point</b>
</div>

<div class="challenge-card">
<strong>Appointment Reports / Summaries</strong><br>
(having all appointment summaries completed by end of each week)<br>
(per team) (per week)<br>
<b>40 Points</b>
</div>

<div class="challenge-card">
<strong>Clean Tutoring Space</strong><br>
(wiping desks, organizing materials, cleaning white boards, wiping windows down, checking markers)<br>
<b>5 Points</b>
</div>

<div class="challenge-card">
<strong>Digitize Notes</strong><br>
<b>15 Points</b>
</div>

<div class="challenge-card">
<strong>Help with Question of the Day</strong><br>
<b>5 Points</b>
</div>

<div class="challenge-card">
<strong>House Cup</strong><br>
(end of semester competition)<br>
<b>200 Points</b>
</div>

<div class="challenge-card">
<strong>Attend Tutoring Events</strong><br>
(pickleball, trivia, etc)<br>
<b>50 Points</b>
</div>

<div class="challenge-card">
<strong>Creating Supplemental Resources</strong><br>
(old notes, exams given back by professors, practice problems, etc)<br>
(per course)<br>
<b>15 Points</b>
</div>

<div class="challenge-card">
<strong>Representing the Tutoring Center at an Event/Fair</strong><br>
<b>35 Points</b>
</div>

<div class="challenge-card">
<strong>Submitting Schedule Requests Early</strong><br>
<b>5 Points</b>
</div>

<div class="challenge-card">
<strong>Helping with Bulletin Board / Window Display</strong><br>
<b>5 Points</b>
</div>

<div class="challenge-card">
<strong>Encouraging a Friend to Apply to be a Tutor</strong><br>
<b>35 Points</b>
</div>

<div class="challenge-card">
<strong>Responding to Events / Calendar Invites</strong><br>
<b>1 Point</b>
</div>

<div class="challenge-card">
<strong>Organizing Review Session</strong><br>
<b>50 Points</b>
</div>

`;

document.getElementById("positive-categories").innerHTML = positiveHTML;


// ===========================
// NEGATIVE POINTS
// ===========================

const negativeHTML = `

<div class="challenge-card">
<strong>Time Card Corrections</strong><br>
(-5 for each correction required)<br>
<b>-5 Points</b>
</div>

<div class="challenge-card">
<strong>Incomplete Appointment Reports</strong><br>
(-5 for each report not completed)<br>
<b>-5 Points</b>
</div>

<div class="challenge-card">
<strong>Submitting Schedule Requests Late</strong><br>
(within 6 days of shift)<br>
<b>-10 Points</b>
</div>

<div class="challenge-card">
<strong>Not Responding to Emails Within 48 Hours</strong><br>
<b>-10 Points</b>
</div>

<div class="challenge-card">
<strong>Additional Emails Needed for Response</strong><br>
<b>-10 Points</b>
</div>

<div class="challenge-card">
<strong>No-Show for Scheduled Shift</strong><br>
<b>-50 Points</b>
</div>

`;

document.getElementById("negative-categories").innerHTML = negativeHTML;
