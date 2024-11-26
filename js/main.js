/* ------------ NAVIGATION BAR FUNCTION ----------------*/
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.classList.add("responsive");
  } else {
    menuBtn.className = "nav-menu";
  }
}
/*------------------ RESUME DOWNLOAD --------------------------*/
const downloadResume = document.querySelectorAll(".resume");

downloadResume.forEach((button) => {
  const a = document.createElement("a");
  a.href = "/assets/DHIVAHAR_ATS_RES.pdf";
  a.download = "DHIVAHAR_RESUME.pdf";
  a.style.display = "none";
  button.addEventListener("click", function () {
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

/*------------------ OPEN RESUME --------------------------*/

const openResume = document.getElementById("openResume");
openResume.addEventListener("click", function () {
  fileUrl = "/assets/DHIVAHAR_ATS_RES.pdf";
  window.open(fileUrl, "_blank");
});

/*------------------ ADD SHOW NAVIGATION BAR WHILE SCROLLING--------------------------*/
window.onscroll = function () {
  headerShadow();
  scrollTopButton();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "2px 5px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/*------------------ SCROLL TO TOP BUTTON --------------------------*/
function scrollTopButton() {
  const top = document.querySelector(".scroll-to-top");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
}
/*-------------- TYPING EFFECT ------------------*/
let typingEffect = new Typed(".typedText", {
  strings: ["MERN Stack Developer", "Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
/*-------------- SCROLL REVEAL ANIMATION ------------------*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
/*-------------- HOME ------------------*/
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 200 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/*-------------- PROJECT BOX ------------------*/
sr.reveal(".project-box", { interval: 200 });

/*-------------- HEADINGS ------------------*/
sr.reveal(".top-header", { interval: 200 });

/*-------------- SKILLS ------------------*/
sr.reveal(".skills-frontEnd", { delay: 100 });

const srBottom = ScrollReveal({
  origin: "bottom",
  distance: "120px",
  duration: 2000,
  reset: true,
});
/*-------------- ABOUT ------------------*/
srBottom.reveal(".about-info", { delay: 250 });
/*-------------- SCROLL REVEAL LEFT_RIGHT ANIMATION ------------------*/
/*-------------- ABOUT INFO & CONTACT INFO ------------------*/
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".contact-info", { delay: 100 });
/*-------------- SKILLS ------------------*/
srLeft.reveal(".skills-backEnd", { delay: 100 });
/*-------------- ABOUT & FORM BOX ------------------*/
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".form-control", { delay: 100 });
/*-------------- SKILLS ------------------*/
srRight.reveal(".skills-dataBase", { delay: 100 });
/*-------------- CHANGE ACTIVE LINK ------------------*/

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll(".nav-menu a");

// function scrollActive() {
//   const scrollY = window.scrollY;
//   const viewportHeight = window.innerHeight;

//   sections.forEach((current, index) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute("id");
//     const link = navLinks[index];

//     if (link && link.href.includes(sectionId)) {
//       const sectionBottom = sectionTop + sectionHeight;
//       const viewportBottom = scrollY + viewportHeight;

//       // Check if the section is within the viewport
//       if (sectionTop < viewportBottom && sectionBottom > scrollY) {
//         // Calculate the percentage of the section that is visible
//         const visibleHeight =
//           Math.min(sectionBottom, viewportBottom) -
//           Math.max(sectionTop, scrollY);
//         const visiblePercentage = (visibleHeight / sectionHeight) * 100;

//         // Add or remove the active link class based on the visible percentage
//         if (visiblePercentage >= 80) {
//           link.classList.add("active-link");
//         } else {
//           link.classList.remove("active-link");
//         }
//       } else {
//         link.classList.remove("active-link");
//       }
//     }
//   });
// }

// // Consider using a debounced version of the scroll event listener to improve performance.
// function debounce(func, wait = 10) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(this, args);
//     }, wait);
//   };
// }

// window.addEventListener("scroll", debounce(scrollActive));

/* --------------- ALWAYS SHOWS HOME WHEN PAGE IS REFRESHED----------*/
// window.addEventListener("load", function () {
//   window.scrollTo(0, 0);
// });

/* --------------- SENDING EMAIL THORUGH CONTACT FORM  ----------*/

const form = document.getElementById("contactForm");
form.addEventListener("submit", sendMail);
function sendMail(event) {
  event.preventDefault();
  const payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const service_id = "service_xrhrsrp";
  const template_id = "template_7g0j5xh";
  emailjs.send(service_id, template_id, payload).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("EMAIL SENT SUCCESSFULLY!");
      form.reset();
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
}
