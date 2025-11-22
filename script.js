document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const nav = document.querySelector('.navbar');

    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            document.documentElement.style.setProperty('--background-color', '#05111e');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            nav.style.backgroundColor = '#05111e';
        } else {
            document.documentElement.style.setProperty('--background-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#000000');
            nav.style.backgroundColor = '#f8f9fa';
        }
    });

    const skillsDropdowns = document.querySelectorAll('.skills-dropdown .collapse');
    skillsDropdowns.forEach(dropdown => {
        dropdown.addEventListener('show.bs.collapse', function() {
            skillsDropdowns.forEach(item => {
                if (item !== dropdown) {
                    bootstrap.Collapse.getInstance(item).hide();
                }
            });
        });
    });
     // Smooth scrolling for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
});
