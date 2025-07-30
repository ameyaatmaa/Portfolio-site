// Enhanced Portfolio JavaScript

// Smooth scrolling for navigation links
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

// Reveal animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// Typing effect for hero subtitle
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

// Initialize typing effect
const typingElements = document.querySelectorAll('.typing-text');
let currentTypingIndex = 0;

function cycleTypingTexts() {
  const texts = [
    'Spring Boot Developer',
    'Blockchain Enthusiast', 
    'Full-Stack Engineer'
  ];
  
  const currentElement = typingElements[currentTypingIndex];
  const currentText = texts[currentTypingIndex];
  
  typeWriter(currentElement, currentText, 80);
  
  currentTypingIndex = (currentTypingIndex + 1) % texts.length;
  
  setTimeout(cycleTypingTexts, 3000);
}

// Start typing effect after page load
window.addEventListener('load', () => {
  setTimeout(cycleTypingTexts, 1000);
});

// Skill card hover effects
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Social links hover effect
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.transform = 'translateX(-8px) scale(1.15)';
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0) scale(1)';
  });
});

// Progress bar animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
}

// Trigger progress bar animation when skills section is visible
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Enhanced tsParticles configuration
(async () => {
  const { loadFull, tsParticles } = await import('https://cdn.jsdelivr.net/npm/tsparticles@3.8.1/dist/tsparticles.bundle.min.js');
  await loadFull(tsParticles);
  
  await tsParticles.load('tsparticles', {
    fullScreen: { 
      enable: true, 
      zIndex: -1 
    },
    particles: { 
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ['#00ffff', '#00ff88', '#0088ff']
      },
      shape: {
        type: ['circle', 'star'],
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 2, max: 8 },
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: '#00ffff',
        opacity: 0.4,
        width: 1,
        shadow: {
          enable: true,
          blur: 5,
          color: '#00ffff'
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: ['grab', 'repulse']
        },
        onClick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true,
    fps_limit: 60,
    background: {
      color: 'transparent'
    }
  });
})();

// Add cursor trail effect
class CursorTrail {
  constructor() {
    this.points = [];
    this.maxPoints = 20;
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.addPoint(e.clientX, e.clientY);
    });
  }

  addPoint(x, y) {
    this.points.push({ x, y, timestamp: Date.now() });
    
    if (this.points.length > this.maxPoints) {
      this.points.shift();
    }
    
    this.render();
  }

  render() {
    // Remove existing trail elements
    document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
    
    // Create new trail elements
    this.points.forEach((point, index) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.cssText = `
        position: fixed;
        left: ${point.x}px;
        top: ${point.y}px;
        width: ${4 - (index * 0.2)}px;
        height: ${4 - (index * 0.2)}px;
        background: linear-gradient(45deg, #00ffff, #00ff88);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - (index * 0.05)};
        transition: all 0.1s ease;
      `;
      document.body.appendChild(trail);
    });
  }
}

// Initialize cursor trail (optional - can be disabled for performance)
// new CursorTrail();

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(45deg, #00ffff, #00ff88);
  z-index: 1001;
  transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowDown':
      e.preventDefault();
      window.scrollBy(0, 100);
      break;
    case 'ArrowUp':
      e.preventDefault();
      window.scrollBy(0, -100);
      break;
    case 'Home':
      e.preventDefault();
      window.scrollTo(0, 0);
      break;
    case 'End':
      e.preventDefault();
      window.scrollTo(0, document.body.scrollHeight);
      break;
  }
});

// Add section highlighting in navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add active class to nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
