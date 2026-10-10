const studentname = document.querySelector('#studentName');
const coursetrack = document.querySelector('#courseTrack');
const statusBadge = document.querySelector('#statusBadge');
const statusMessage = document.querySelector('#statusMessage');
const scoreDisplay = document.querySelector('#scoreDisplay');
const studentCard = document.querySelector('#studentCard');

console.log("Find Student name Element: ", studentname);

studentname.textContent = "Speedway";
coursetrack.textContent = "Web Development";
scoreDisplay.textContent = "95%";

statusMessage.innerHTML ="Status updated: <strong>All modules completed</strong> and verified by the instructor.";
statusBadge.textContent ="Enrolled and Active";
statusBadge.classList.remove("bg-secondary");
statusBadge.classList.add("badge-active");

scoreDisplay.style.color = "#5456e3";

const announcementBox = document.querySelector("#announcementBox");

announcementBox.innerHTML = `<h3>📢 Upcoming Lessons</h3>
    <p>Our next lessons will take place on Monday 12th October and Wednesday 14th October.</p>`;
announcementBox.style.backgroundColor = "lightblue";
announcementBox.style.padding = "20px";
