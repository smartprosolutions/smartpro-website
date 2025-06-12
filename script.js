
// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out-cubic'
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Enhanced navbar scroll effect with gradient background
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  // Simple validation
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  // Simulate form submission
  const submitBtn = this.querySelector('.btn-primary');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    alert('Message sent successfully! I\'ll get back to you soon.');
    this.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = this.querySelector('input[type="email"]').value;
  
  if (!email) {
    alert('Please enter a valid email address');
    return;
  }
  
  const submitBtn = this.querySelector('.btn');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Subscribing...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
});

// Service cards hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  const titleText = heroTitle.innerHTML;
  
  // Add a slight delay before starting the typing effect
  setTimeout(() => {
    typeWriter(heroTitle, titleText, 50);
  }, 500);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  const rate = scrolled * -0.5;
  
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${rate}px)`;
  }
});

// Add intersection observer for section animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Stats counter animation
function animateStats() {
  const stats = document.querySelectorAll('.stat h3');
  
  stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    const increment = target / 50;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
    }, 50);
  });
}

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('.about');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

if (aboutSection) {
  statsObserver.observe(aboutSection);
}

// Add dynamic gradient animation
let gradientAngle = 135;
setInterval(() => {
  gradientAngle += 1;
  if (gradientAngle >= 360) gradientAngle = 0;
  
  document.documentElement.style.setProperty(
    '--gradient-primary', 
    `linear-gradient(${gradientAngle}deg, #022179 0%, #A42593 100%)`
  );
}, 100);

// Enhance button interactions
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
  
  btn.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(0) scale(0.98)';
  });
  
  btn.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });
});
