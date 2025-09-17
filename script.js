    
                // Navbar
    // nav bar
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    });


    //when scrolled
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });



 const toggleSwitch = document.getElementById("toggleSwitch");
  const body = document.body;
  const icon = document.querySelector(".icon");

  // প্রথমবারেই ডার্ক মোড চালু
  body.classList.add("dark-mode");
  icon.textContent = "☀";
  localStorage.setItem("mode", "dark");

  // toggle বাটন কাজ
  toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.add("light-mode");

    if (body.classList.contains("dark-mode")) {
      icon.textContent = "☀";
      localStorage.setItem("mode", "dark");
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      icon.textContent = "🌙";
      localStorage.setItem("mode", "light");
    }
  });