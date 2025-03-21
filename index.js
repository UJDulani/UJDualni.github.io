 
/* --------------------------------------- */
/* ----- index.js ----- */
/* --------------------------------------- */

document.addEventListener("DOMContentLoaded", function() {
  console.log("Dulani Website Loaded");

  const leaders = document.querySelectorAll(".leader-box");
  let leaderIndex = 0;
  
  function showNextLeader() {
    leaders.forEach(leader => leader.classList.remove("active"));
    leaders[leaderIndex].classList.add("active");
    leaderIndex = (leaderIndex + 1) % leaders.length;
  }
  
  showNextLeader();
  setInterval(showNextLeader, 4000);

  const mentorsData = {
    cs: [
      { name: "Mentor 1", img: "images/mentor1.jpg", link: "#" },
      { name: "Mentor 2", img: "images/mentor2.jpg", link: "#" }
    ],
    se: [
      { name: "Mentor 3", img: "images/mentor3.jpg", link: "#" },
      { name: "Mentor 4", img: "images/mentor4.jpg", link: "#" }
    ]
  };

  document.querySelectorAll(".branch-btn").forEach(button => {
    button.addEventListener("click", function() {
      const branch = this.dataset.branch;
      const mentorsList = document.getElementById("mentors-list");
      mentorsList.innerHTML = "";
      
      mentorsData[branch].forEach(mentor => {
        const mentorDiv = document.createElement("div");
        mentorDiv.classList.add("mentor-box");
        mentorDiv.innerHTML = `
          <img src="${mentor.img}" alt="${mentor.name}" class="mentor-image">
          <p>${mentor.name}</p>
          <a href="${mentor.link}" target="_blank">Profile</a>
        `;
        mentorsList.appendChild(mentorDiv);
      });
    });
  });
});
