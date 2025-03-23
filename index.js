 
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

  // First, let's expand the mentorsData object to include 7 mentors for each specialty
const mentorsData = {
  cs: [
    { name: "سارة أحمد", speciality: "علوم الحاسب", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، متخصصة في تطوير الخوارزميات وهياكل البيانات", email: "sara@example.com" },
    { name: "محمد العمري", speciality: "علوم الحاسب", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، خبرة في لغات البرمجة المتعددة والحوسبة السحابية", email: "mohammed@example.com" },
    { name: "نورة السلمي", speciality: "علوم الحاسب", img: "images/placeholder-female.jpg", about: "خريجة متفوقة، عملت في مشاريع بحثية في مجال الشبكات", email: "noura@example.com" },
    { name: "عبدالله الغامدي", speciality: "علوم الحاسب", img: "images/placeholder-male.jpg", about: "طالب سنة رابعة، مهتم بتطوير الويب وتطبيقات الجوال", email: "abdullah@example.com" },
    { name: "لينا القحطاني", speciality: "علوم الحاسب", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، متخصصة في نظم التشغيل والبرمجة منخفضة المستوى", email: "lina@example.com" },
    { name: "فهد الشهري", speciality: "علوم الحاسب", img: "images/placeholder-male.jpg", about: "خريج، يعمل حالياً في شركة تقنية مرموقة كمطور برمجيات", email: "fahad@example.com" },
    { name: "عبير المالكي", speciality: "علوم الحاسب", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، مهتمة بتطوير الألعاب وتقنيات الرسوميات", email: "abeer@example.com" }
  ],
  se: [
    { name: "خالد الزهراني", speciality: "هندسة البرمجيات", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، متخصص في هندسة البرمجيات وإدارة المشاريع", email: "khalid@example.com" },
    { name: "رنا الحربي", speciality: "هندسة البرمجيات", img: "images/placeholder-female.jpg", about: "خريجة، تعمل كمهندسة برمجيات في شركة ناشئة", email: "rana@example.com" },
    { name: "سعد العتيبي", speciality: "هندسة البرمجيات", img: "images/placeholder-male.jpg", about: "طالب سنة رابعة، مهتم بتطوير البرمجيات وأطر العمل الحديثة", email: "saad@example.com" },
    { name: "منى الدوسري", speciality: "هندسة البرمجيات", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، متخصصة في اختبار البرمجيات وضمان الجودة", email: "mona@example.com" },
    { name: "أحمد الشمراني", speciality: "هندسة البرمجيات", img: "images/placeholder-male.jpg", about: "خريج، يعمل في تطوير الأنظمة المؤسسية والحلول التقنية", email: "ahmad@example.com" },
    { name: "جواهر المطيري", speciality: "هندسة البرمجيات", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، مهتمة بهندسة المتطلبات وتصميم النظم", email: "jawaher@example.com" },
    { name: "طارق الحازمي", speciality: "هندسة البرمجيات", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، متخصص في معمارية البرمجيات وأنماط التصميم", email: "tariq@example.com" }
  ],
  cyber: [
    { name: "هدى الجهني", speciality: "الأمن السيبراني", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، متخصصة في تحليل الثغرات الأمنية واختبار الاختراق", email: "huda@example.com" },
    { name: "ياسر البلوي", speciality: "الأمن السيبراني", img: "images/placeholder-male.jpg", about: "خريج، يعمل كمحلل أمن سيبراني في إحدى الشركات الرائدة", email: "yasser@example.com" },
    { name: "سمية الرشيدي", speciality: "الأمن السيبراني", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، مهتمة بأمن الشبكات والأنظمة المتقدمة", email: "sumayah@example.com" },
    { name: "معاذ القرني", speciality: "الأمن السيبراني", img: "images/placeholder-male.jpg", about: "طالب سنة رابعة، متخصص في الطب الشرعي الرقمي والتحقيق الجنائي", email: "muath@example.com" },
    { name: "نجود العنزي", speciality: "الأمن السيبراني", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، متخصصة في الدفاع السيبراني وتأمين البنية التحتية", email: "najoud@example.com" },
    { name: "فيصل العسيري", speciality: "الأمن السيبراني", img: "images/placeholder-male.jpg", about: "خريج، متخصص في أمن البرمجيات وتشفير البيانات", email: "faisal@example.com" },
    { name: "ريم الحميد", speciality: "الأمن السيبراني", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، مهتمة بالأمن السحابي وحماية الأنظمة", email: "reem@example.com" }
  ],
  ai: [
    { name: "عمر السلمان", speciality: "الذكاء الاصطناعي", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، متخصص في تعلم الآلة والشبكات العصبية", email: "omar@example.com" },
    { name: "أماني الصاعدي", speciality: "الذكاء الاصطناعي", img: "images/placeholder-female.jpg", about: "خريجة، تعمل في مجال معالجة اللغات الطبيعية والروبوتات", email: "amani@example.com" },
    { name: "راكان الدعجاني", speciality: "الذكاء الاصطناعي", img: "images/placeholder-male.jpg", about: "طالب سنة رابعة، مهتم بتطبيقات الذكاء الاصطناعي في الطب", email: "rakan@example.com" },
    { name: "دانية الثبيتي", speciality: "الذكاء الاصطناعي", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، متخصصة في الرؤية الحاسوبية والتعرف على الصور", email: "dania@example.com" },
    { name: "سلطان العمري", speciality: "الذكاء الاصطناعي", img: "images/placeholder-male.jpg", about: "خريج، يعمل في تطوير أنظمة التوصية والتنبؤ", email: "sultan@example.com" },
    { name: "لميس الغامدي", speciality: "الذكاء الاصطناعي", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، مهتمة بالتعلم العميق وتطبيقاته", email: "lamees@example.com" },
    { name: "وليد البقمي", speciality: "الذكاء الاصطناعي", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، متخصص في تعلم التعزيز والأنظمة الذكية", email: "waleed@example.com" }
  ],
  ds: [
    { name: "روان الشهري", speciality: "علوم البيانات", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، متخصصة في تحليل البيانات الضخمة وتصورها", email: "rawan@example.com" },
    { name: "حسام الزهراني", speciality: "علوم البيانات", img: "images/placeholder-male.jpg", about: "خريج، يعمل كمحلل بيانات في شركة استشارية", email: "hussam@example.com" },
    { name: "غادة العتيبي", speciality: "علوم البيانات", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، مهتمة بالتنقيب عن البيانات والتحليل الإحصائي", email: "ghada@example.com" },
    { name: "ماجد القحطاني", speciality: "علوم البيانات", img: "images/placeholder-male.jpg", about: "طالب سنة رابعة، متخصص في استخراج المعرفة من البيانات", email: "majed@example.com" },
    { name: "شهد الحربي", speciality: "علوم البيانات", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، متخصصة في تحليل الشبكات الاجتماعية والبيانات المهيكلة", email: "shahad@example.com" },
    { name: "نايف الجهني", speciality: "علوم البيانات", img: "images/placeholder-male.jpg", about: "خريج، يعمل في مجال تحليل البيانات السلوكية وتوقع الاتجاهات", email: "naif@example.com" },
    { name: "أثير الشمراني", speciality: "علوم البيانات", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، مهتمة بعلم البيانات التطبيقي والنمذجة", email: "atheer@example.com" }
  ],
  it: [
    { name: "تركي المالكي", speciality: "تقنية المعلومات", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، متخصص في إدارة البنية التحتية وتقنيات الشبكات", email: "turki@example.com" },
    { name: "مها السبيعي", speciality: "تقنية المعلومات", img: "images/placeholder-female.jpg", about: "خريجة، تعمل كمديرة نظم معلومات في القطاع الحكومي", email: "maha@example.com" },
    { name: "عبدالعزيز الشيخ", speciality: "تقنية المعلومات", img: "images/placeholder-male.jpg", about: "طالب سنة رابعة، مهتم بأنظمة التخزين وقواعد البيانات", email: "abdulaziz@example.com" },
    { name: "سلمى الحربي", speciality: "تقنية المعلومات", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، متخصصة في دعم الأنظمة وحل المشكلات التقنية", email: "salma@example.com" },
    { name: "زياد العمري", speciality: "تقنية المعلومات", img: "images/placeholder-male.jpg", about: "خريج، متخصص في إدارة المشاريع التقنية والحوكمة", email: "ziyad@example.com" },
    { name: "وجدان الغامدي", speciality: "تقنية المعلومات", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، مهتمة بخدمات تكنولوجيا المعلومات والدعم الفني", email: "wajdan@example.com" },
    { name: "بندر الشهري", speciality: "تقنية المعلومات", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، متخصص في أمن المعلومات وإدارة المخاطر", email: "bandar@example.com" }
  ],
  ce: [
    { name: "فراس الحازمي", speciality: "هندسة الحاسب", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، متخصص في تصميم الأنظمة المدمجة والمعالجات الدقيقة", email: "firas@example.com" },
    { name: "نجلاء القرني", speciality: "هندسة الحاسب", img: "images/placeholder-female.jpg", about: "خريجة، تعمل في مجال تطوير الأجهزة والبرمجيات المدمجة", email: "najla@example.com" },
    { name: "مشاري العتيبي", speciality: "هندسة الحاسب", img: "images/placeholder-male.jpg", about: "طالب سنة رابعة، مهتم بالأنظمة الرقمية والإلكترونيات", email: "mishari@example.com" },
    { name: "هند الدوسري", speciality: "هندسة الحاسب", img: "images/placeholder-female.jpg", about: "طالبة سنة خامسة، متخصصة في معمارية الحاسب والأداء", email: "hind@example.com" },
    { name: "ريان الشهراني", speciality: "هندسة الحاسب", img: "images/placeholder-male.jpg", about: "خريج، يعمل في تصميم وتنفيذ أنظمة التحكم الآلي", email: "rayan@example.com" },
    { name: "مرام السلمي", speciality: "هندسة الحاسب", img: "images/placeholder-female.jpg", about: "طالبة سنة رابعة، مهتمة بأنظمة الزمن الحقيقي وإنترنت الأشياء", email: "maram@example.com" },
    { name: "يزيد الزهراني", speciality: "هندسة الحاسب", img: "images/placeholder-male.jpg", about: "طالب سنة خامسة، متخصص في الأنظمة الموزعة والحوسبة المتوازية", email: "yazeed@example.com" }
  ]
};

document.addEventListener("DOMContentLoaded", function() {
  console.log("Dulani Website Loaded");

  // Leader section animation
  const leaders = document.querySelectorAll(".leader-box");
  let leaderIndex = 0;
  
  function showNextLeader() {
    leaders.forEach(leader => leader.classList.remove("active"));
    leaders[leaderIndex].classList.add("active");
    leaderIndex = (leaderIndex + 1) % leaders.length;
  }
  
  showNextLeader();
  setInterval(showNextLeader, 4000);

  // Add click event listeners to branch buttons
  document.querySelectorAll(".branch-btn").forEach(button => {
    button.addEventListener("click", function() {
      // Remove active class from all buttons
      document.querySelectorAll(".branch-btn").forEach(btn => {
        btn.classList.remove("active-branch");
      });
      
      // Add active class to clicked button
      this.classList.add("active-branch");
      
      // Get the branch value from data attribute
      const branch = this.dataset.branch;
      const mentorsList = document.getElementById("mentors-list");
      
      // Clear the mentors list
      mentorsList.innerHTML = "";
      
      // Check if mentors exist for this branch
      if (!mentorsData[branch]) {
        mentorsList.innerHTML = "<p>لا يوجد مرشدون متاحون لهذا التخصص حاليًا</p>";
        return;
      }
      
      // Create the mentor grid container
      const mentorGrid = document.createElement("div");
      mentorGrid.classList.add("mentor-grid");
      
      // Add mentors to the grid
      mentorsData[branch].forEach(mentor => {
        const mentorCard = document.createElement("div");
        mentorCard.classList.add("mentor-card");
        
        mentorCard.innerHTML = `
          <div class="mentor-image-container">
            <img src="${mentor.img}" alt="${mentor.name}" class="mentor-image">
          </div>
          <h3 class="mentor-name">${mentor.name}</h3>
          <p class="mentor-speciality">${mentor.speciality}</p>
          <p class="mentor-about">${mentor.about}</p>
          <div class="mentor-contact">
            <a href="mailto:${mentor.email}" class="contact-btn">تواصل</a>
          </div>
        `;
        
        mentorGrid.appendChild(mentorCard);
      });
      
      // Add the grid to the mentors list
      mentorsList.appendChild(mentorGrid);
    });
  });
  
  // Trigger click on the first button to show mentors by default
  if (document.querySelector(".branch-btn")) {
    document.querySelector(".branch-btn").click();
  }
});

  });

