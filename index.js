document.addEventListener("DOMContentLoaded", function() {
  console.log("Dulani Website Loaded");

  // Mentors Data with Detailed Styling
  const mentorsData = {
    cs: [
      { name: "سارة أحمد", speciality: "علوم الحاسب", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، متخصصة في تطوير الخوارزميات وهياكل البيانات", email: "sara@example.com" },
      { name: "محمد العمري", speciality: "علوم الحاسب", img: "/api/placeholder/120/120", about: "طالب سنة خامسة، خبرة في لغات البرمجة المتعددة والحوسبة السحابية", email: "mohammed@example.com" },
      { name: "نورة السلمي", speciality: "علوم الحاسب", img: "/api/placeholder/120/120", about: "خريجة متفوقة، عملت في مشاريع بحثية في مجال الشبكات", email: "noura@example.com" },
      { name: "عبدالله الغامدي", speciality: "علوم الحاسب", img: "/api/placeholder/120/120", about: "طالب سنة رابعة، مهتم بتطوير الويب وتطبيقات الجوال", email: "abdullah@example.com" },
      { name: "لينا القحطاني", speciality: "علوم الحاسب", img: "/api/placeholder/120/120", about: "طالبة سنة خامسة، متخصصة في نظم التشغيل والبرمجة منخفضة المستوى", email: "lina@example.com" },
      { name: "فهد الشهري", speciality: "علوم الحاسب", img: "/api/placeholder/120/120", about: "خريج، يعمل حالياً في شركة تقنية مرموقة كمطور برمجيات", email: "fahad@example.com" },
      { name: "عبير المالكي", speciality: "علوم الحاسب", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، مهتمة بتطوير الألعاب وتقنيات الرسوميات", email: "abeer@example.com" }
    ],
    se: [
      { name: "خالد الزهراني", speciality: "هندسة البرمجيات", img: "/api/placeholder/120/120", about: "طالب سنة خامسة، متخصص في هندسة البرمجيات وإدارة المشاريع", email: "khalid@example.com" },
      { name: "رنا الحربي", speciality: "هندسة البرمجيات", img: "/api/placeholder/120/120", about: "خريجة، تعمل كمهندسة برمجيات في شركة ناشئة", email: "rana@example.com" },
      { name: "سعد العتيبي", speciality: "هندسة البرمجيات", img: "/api/placeholder/120/120", about: "طالب سنة رابعة، مهتم بتطوير البرمجيات وأطر العمل الحديثة", email: "saad@example.com" },
      { name: "منى الدوسري", speciality: "هندسة البرمجيات", img: "/api/placeholder/120/120", about: "طالبة سنة خامسة، متخصصة في اختبار البرمجيات وضمان الجودة", email: "mona@example.com" },
      { name: "أحمد الشمراني", speciality: "هندسة البرمجيات", img: "/api/placeholder/120/120", about: "خريج، يعمل في تطوير الأنظمة المؤسسية والحلول التقنية", email: "ahmad@example.com" },
      { name: "جواهر المطيري", speciality: "هندسة البرمجيات", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، مهتمة بهندسة المتطلبات وتصميم النظم", email: "jawaher@example.com" },
      { name: "طارق الحازمي", speciality: "هندسة البرمجيات", img: "/api/placeholder/120/120", about: "طالب سنة خامسة، متخصص في معمارية البرمجيات وأنماط التصميم", email: "tariq@example.com" }
    ],
    cyber: [
      { name: "هدى الجهني", speciality: "الأمن السيبراني", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، متخصصة في تحليل الثغرات الأمنية واختبار الاختراق", email: "huda@example.com" },
      { name: "ياسر البلوي", speciality: "الأمن السيبراني", img: "/api/placeholder/120/120", about: "خريج، يعمل كمحلل أمن سيبراني في إحدى الشركات الرائدة", email: "yasser@example.com" },
      { name: "سمية الرشيدي", speciality: "الأمن السيبراني", img: "/api/placeholder/120/120", about: "طالبة سنة خامسة، مهتمة بأمن الشبكات والأنظمة المتقدمة", email: "sumayah@example.com" },
      { name: "معاذ القرني", speciality: "الأمن السيبراني", img: "/api/placeholder/120/120", about: "طالب سنة رابعة، متخصص في الطب الشرعي الرقمي والتحقيق الجنائي", email: "muath@example.com" },
      { name: "نجود العنزي", speciality: "الأمن السيبراني", img: "/api/placeholder/120/120", about: "طالبة سنة خامسة، متخصصة في الدفاع السيبراني وتأمين البنية التحتية", email: "najoud@example.com" },
      { name: "فيصل العسيري", speciality: "الأمن السيبراني", img: "/api/placeholder/120/120", about: "خريج، متخصص في أمن البرمجيات وتشفير البيانات", email: "faisal@example.com" },
      { name: "ريم الحميد", speciality: "الأمن السيبراني", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، مهتمة بالأمن السحابي وحماية الأنظمة", email: "reem@example.com" }
    ],
    ai: [
      { name: "عمر السلمان", speciality: "الذكاء الاصطناعي", img: "/api/placeholder/120/120", about: "طالب سنة خامسة، متخصص في تعلم الآلة والشبكات العصبية", email: "omar@example.com" },
      { name: "أماني الصاعدي", speciality: "الذكاء الاصطناعي", img: "/api/placeholder/120/120", about: "خريجة، تعمل في مجال معالجة اللغات الطبيعية والروبوتات", email: "amani@example.com" },
      { name: "راكان الدعجاني", speciality: "الذكاء الاصطناعي", img: "/api/placeholder/120/120", about: "طالب سنة رابعة، مهتم بتطبيقات الذكاء الاصطناعي في الطب", email: "rakan@example.com" },
      { name: "دانية الثبيتي", speciality: "الذكاء الاصطناعي", img: "/api/placeholder/120/120", about: "طالبة سنة خامسة، متخصصة في الرؤية الحاسوبية والتعرف على الصور", email: "dania@example.com" },
      { name: "سلطان العمري", speciality: "الذكاء الاصطناعي", img: "/api/placeholder/120/120", about: "خريج، يعمل في تطوير أنظمة التوصية والتنبؤ", email: "sultan@example.com" },
      { name: "لميس الغامدي", speciality: "الذكاء الاصطناعي", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، مهتمة بالتعلم العميق وتطبيقاته", email: "lamees@example.com" },
      { name: "وليد البقمي", speciality: "الذكاء الاصطناعي", img: "/api/placeholder/120/120", about: "طالب سنة خامسة، متخصص في تعلم التعزيز والأنظمة الذكية", email: "waleed@example.com" }
    ],
    ds: [
      { name: "روان الشهري", speciality: "علوم البيانات", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، متخصصة في تحليل البيانات الضخمة وتصورها", email: "rawan@example.com" },
      { name: "حسام الزهراني", speciality: "علوم البيانات", img: "/api/placeholder/120/120", about: "خريج، يعمل كمحلل بيانات في شركة استشارية", email: "hussam@example.com" },
      { name: "غادة العتيبي", speciality: "علوم البيانات", img: "/api/placeholder/120/120", about: "طالبة سنة خامسة، مهتمة بالتنقيب عن البيانات والتحليل الإحصائي", email: "ghada@example.com" },
      { name: "ماجد القحطاني", speciality: "علوم البيانات", img: "/api/placeholder/120/120", about: "طالب سنة رابعة، متخصص في استخراج المعرفة من البيانات", email: "majed@example.com" },
      { name: "شهد الحربي", speciality: "علوم البيانات", img: "/api/placeholder/120/120", about: "طالبة سنة خامسة، متخصصة في تحليل الشبكات الاجتماعية والبيانات المهيكلة", email: "shahad@example.com" },
      { name: "نايف الجهني", speciality: "علوم البيانات", img: "/api/placeholder/120/120", about: "خريج، يعمل في مجال تحليل البيانات السلوكية وتوقع الاتجاهات", email: "naif@example.com" },
      { name: "أثير الشمراني", speciality: "علوم البيانات", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، مهتمة بعلم البيانات التطبيقي والنمذجة", email: "atheer@example.com" }
    ],
    ce: [
      { name: "فراس الحازمي", speciality: "هندسة الحاسب والشبكات", img: "/api/placeholder/120/120", about: "طالب سنة خامسة، متخصص في تصميم الأنظمة المدمجة والمعالجات الدقيقة", email: "firas@example.com" },
      { name: "نجلاء القرني", speciality: "هندسة الحاسب والشبكات", img: "/api/placeholder/120/120", about: "خريجة، تعمل في مجال تطوير الأجهزة والبرمجيات المدمجة", email: "najla@example.com" },
      { name: "مشاري العتيبي", speciality: "هندسة الحاسب والشبكات", img: "/api/placeholder/120/120", about: "طالب سنة رابعة، مهتم بالأنظمة الرقمية والإلكترونيات", email: "mishari@example.com" },
      { name: "هند الدوسري", speciality: "هندسة الحاسب والشبكات", img: "/api/placeholder/120/120", about: "طالبة سنة خامسة، متخصصة في معمارية الحاسب والأداء", email: "hind@example.com" },
      { name: "ريان الشهراني", speciality: "هندسة الحاسب والشبكات", img: "/api/placeholder/120/120", about: "خريج، يعمل في تصميم وتنفيذ أنظمة التحكم الآلي", email: "rayan@example.com" },
      { name: "مرام السلمي", speciality: "هندسة الحاسب والشبكات", img: "/api/placeholder/120/120", about: "طالبة سنة رابعة، مهتمة بأنظمة الزمن الحقيقي وإنترنت الأشياء", email: "maram@example.com" },
      { name: "يزيد الزهراني", speciality: "هندسة الحاسب والشبكات", img: "/api/placeholder/120/120", about: "طالب سنة خامسة، متخصص في الأنظمة الموزعة والحوسبة المتوازية", email: "yazeed@example.com" }
    ]
  };

  // Function to render mentors
  function renderMentors(branch) {
    const mentorsList = document.getElementById("mentors-list");
    mentorsList.innerHTML = ''; // Clear previous mentors

    // Check if mentors exist for this branch
    if (!mentorsData[branch]) {
      mentorsList.innerHTML = "<p>لا يوجد مرشدون متاحون لهذا التخصص حاليًا</p>";
      return;
    }

    // Create mentor grid
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
        <div class="mentor-details">
          <h3 class="mentor-name">${mentor.name}</h3>
          <p class="mentor-speciality">${mentor.speciality}</p>
          <p class="mentor-about">${mentor.about}</p>
          <div class="mentor-contact">
            <a href="mailto:${mentor.email}" class="contact-btn">
              تواصل
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      `;
      
      mentorGrid.appendChild(mentorCard);
    });

    // Add the grid to the mentors list
    mentorsList.appendChild(mentorGrid);
  }

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
      
      // Render mentors for the selected branch
      renderMentors(branch);
    });
  });

  // Trigger click on the first button to show mentors by default
  if (document.querySelector(".branch-btn")) {
    document.querySelector(".branch-btn").click();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Interactive card hover effects
  function setupInteractiveCards() {
    const cardSections = [
      { selector: '.goal-card', hoverClass: 'goal-card-hover' },
      { selector: '.audience-card', hoverClass: 'audience-card-hover' }
    ];

    cardSections.forEach(section => {
      const cards = document.querySelectorAll(section.selector);
      
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.classList.add(section.hoverClass);
        });
        
        card.addEventListener('mouseleave', () => {
          card.classList.remove(section.hoverClass);
        });
      });
    });
  }

  // Scroll-triggered animations
  function setupScrollAnimations() {
    const sections = document.querySelectorAll('#about, #vision, #goals, #target-audience');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-animate');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  setupInteractiveCards();
  setupScrollAnimations();
});


const reviewCards = document.querySelectorAll('.review-card');
let currentReview = 0;

function showReview() {
  reviewCards.forEach((card, idx) => {
    card.classList.remove('active');
    if (idx === currentReview) card.classList.add('active');
  });

  currentReview = (currentReview + 1) % reviewCards.length;
}

showReview();
setInterval(showReview, 10000); // ⏱ 10 seconds per review
