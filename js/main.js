// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");

  // Animate links
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Hamburger animation
  hamburger.classList.toggle("toggle");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#fff";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Add animation to elements when they come into view
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".timeline-item, .education-item, .skill-item, .contact-item"
  )
  .forEach((element) => {
    observer.observe(element);
  });

// Add typing effect to hero section
const heroTitle = document.querySelector(".hero-content h1");
const text = heroTitle.textContent;
heroTitle.textContent = "";

let i = 0;
const typeWriter = () => {
  if (i < text.length) {
    heroTitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

// Start typing effect when page loads
window.addEventListener("load", typeWriter);

// Add CSS for mobile menu and animations
const style = document.createElement("style");
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media screen and (max-width: 768px) {
        .nav-links {
            position: fixed;
            right: 0;
            height: 100vh;
            top: 0;
            background-color: var(--white);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 60%;
            transform: translateX(100%);
            transition: transform 0.5s ease-in;
            padding: 2rem;
        }

        .nav-active {
            transform: translateX(0%);
        }

        .toggle span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .toggle span:nth-child(2) {
            opacity: 0;
        }

        .toggle span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }

    .animate {
        animation: fadeInUp 0.6s ease forwards;
    }
`;

document.head.appendChild(style);
