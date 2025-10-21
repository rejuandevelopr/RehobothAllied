// Nav Responsive
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const pagesDropdown = document.getElementById('pagesDropdown');
const dropdownMenu = document.getElementById('dropdownMenu');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const isActive = navMenu.classList.contains('active');
  menuIcon.style.display = isActive ? 'none' : 'block';
  closeIcon.style.display = isActive ? 'block' : 'none';
});



window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});


// Navigation
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .btn");

  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 110; // adjust if your header is taller
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(section.getAttribute("id"))) {
          link.classList.add("active");
        }
      });
    }
  });
});


// FAQ
const questions = document.querySelectorAll('.faq-question');

questions.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    button.classList.toggle('active');
    answer.classList.toggle('open');
  });
});