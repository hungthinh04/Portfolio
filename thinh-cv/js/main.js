// Handle mobile hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  // Activate home section when page loads
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.classList.add("active");
  }

  // Function to get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "🌅 Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "☀️ Good Afternoon";
    } else if (hour >= 18 && hour < 22) {
      return "🌆 Good Evening";
    } else {
      return "🌙 Good Night";
    }
  };

  // Function to get hero description based on time
  const getHeroDescription = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return `<span class="highlight-text">Software Engineer</span> with a passion for creating amazing software solutions. 
                    Morning energy is the perfect time to <span class="highlight-text">create and learn</span>. 
                    With the enthusiasm of the morning, I always aim to create high-quality products.`;
    } else if (hour >= 12 && hour < 18) {
      return `<span class="highlight-text">Software Engineer</span> with a passion for creating amazing software solutions. 
                    Afternoon sunlight is the inspiration to create <span class="highlight-text">beautiful and friendly interfaces</span>. 
                    With the high focus of the afternoon, I always aim to create the most perfect products.`;
    } else if (hour >= 18 && hour < 22) {
      return `<span class="highlight-text">Software Engineer</span> with a passion for creating amazing software solutions. 
                    The quiet space of the evening is the time to <span class="highlight-text">create and experiment</span>. 
                    With the peace of the evening, I focus on optimizing and perfecting every detail.`;
    } else {
      return `<span class="highlight-text">Software Engineer</span> with a passion for creating amazing software solutions. 
                    The quiet night is the time to <span class="highlight-text">reflect and come up with new ideas</span>. 
                    With inspiration from the night sky, I always explore new technologies and trends.`;
    }
  };

  // Update greeting and description
  const greetingElement = document.querySelector(".greeting");
  const heroDescriptionElement = document.querySelector(".hero-description");

  if (greetingElement) {
    const greeting = getGreeting();
    greetingElement.innerHTML = `<span class="wave">👋</span> ${greeting}, I'm`;
  }

  if (heroDescriptionElement) {
    heroDescriptionElement.innerHTML = getHeroDescription();
  }

  // Mobile menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  body.appendChild(overlay);

  // Toggle menu
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
      overlay.classList.toggle("active");
      body.style.overflow = navLinks.classList.contains("active")
        ? "hidden"
        : "auto";
    });
  }

  // Close menu when clicking overlay
  overlay.addEventListener("click", () => {
    if (hamburger && navLinks) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      body.style.overflow = "auto";
    }
  });

  // Close menu when clicking links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (hamburger && navLinks) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        body.style.overflow = "auto";
      }
    });
  });

  // Typing effect
  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    const words = [
      "Software Engineer 💻",
      "Fullstack Developer ⚡",
      "Web Developer 🌐",
      "Problem Solver 🔍",
      "Backend Developer 🚀",
      "Frontend Developer 💻",
      "Tech Enthusiast 💡",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      typingElement.setAttribute("data-text", typingElement.textContent);

      let typeSpeed = isDeleting ? 100 : 200;

      if (!isDeleting && charIndex === currentWord.length) {
        isWaiting = true;
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      if (charIndex === 0 && !isDeleting) {
        const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96C93D", "#E056FD"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        typingElement.style.color = randomColor;
      }

      setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
  }

  // Easter Eggs
  const addEasterEggs = () => {
    // Konami Code
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    // Matrix Mode
    const activateMatrixMode = () => {
      document.body.style.transition = "all 1s";
      document.body.style.backgroundColor = "#000";
      const matrixCanvas = document.createElement("canvas");
      matrixCanvas.id = "matrix-canvas";
      matrixCanvas.style.position = "fixed";
      matrixCanvas.style.top = "0";
      matrixCanvas.style.left = "0";
      matrixCanvas.style.zIndex = "-1";
      document.body.appendChild(matrixCanvas);

      const matrix = matrixCanvas.getContext("2d");
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;

      const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
      const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const nums = "0123456789";
      const alphabet = katakana + latin + nums;

      const fontSize = 16;
      const columns = matrixCanvas.width / fontSize;

      const rainDrops = [];
      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }

      const draw = () => {
        matrix.fillStyle = "rgba(0, 0, 0, 0.05)";
        matrix.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        matrix.fillStyle = "#0F0";
        matrix.font = fontSize + "px monospace";

        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(
            Math.floor(Math.random() * alphabet.length)
          );
          matrix.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (
            rainDrops[i] * fontSize > matrixCanvas.height &&
            Math.random() > 0.975
          ) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      };

      return setInterval(draw, 30);
    };

    // Disco Mode
    const activateDiscoMode = () => {
      // Carefully selected colors for beautiful effects
      const colors = [
        "#FF6B6B", // Coral red
        "#4ECDC4", // Turquoise
        "#45B7D1", // Sky blue
        "#96C93D", // Green
        "#E056FD", // Pink purple
        "#F7D794", // Light yellow
        "#786FA6", // Purple gray
        "#F8C291", // Peach
        "#63CDDA", // Light sky blue
        "#CF6A87", // Pink red
      ];

      const elements = document.querySelectorAll("*");
      let colorIndex = 0;

      return setInterval(() => {
        elements.forEach((el) => {
          if (Math.random() > 0.7) {
            // Reduce color change frequency
            el.style.transition = "color 0.8s ease-in-out";
            el.style.color = colors[Math.floor(Math.random() * colors.length)];

            // Add glow effect for text
            el.style.textShadow = `0 0 5px ${
              colors[Math.floor(Math.random() * colors.length)]
            }`;
          }
        });
        colorIndex = (colorIndex + 1) % colors.length;
      }, 800); // Increase time between changes
    };

    // Gravity Mode
    const activateGravityMode = () => {
      const elements = document.querySelectorAll("*");
      elements.forEach((el) => {
        // Only apply to elements with content
        if (el.textContent.trim() || el.tagName.toLowerCase() === "img") {
          // Add smoother transition
          el.style.transition =
            "transform 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";

          // Random gentle tilt angle (-5 to 5 degrees)
          const randomRotation = Math.random() * 10 - 5;

          // Add slight up/down movement effect
          const randomY = Math.random() * 10 - 5;

          // Apply transform
          el.style.transform = `rotate(${randomRotation}deg) translateY(${randomY}px)`;
        }
      });
    };

    // Neon Mode
    const activateNeonMode = () => {
      const elements = document.querySelectorAll("*");
      elements.forEach((el) => {
        if (el.textContent.trim()) {
          el.style.transition = "all 0.5s ease";
          el.style.textShadow =
            "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6";
          el.style.color = "#fff";
        }
      });

      document.body.style.backgroundColor = "#000";
      document.body.style.transition = "background-color 1s ease";

      return () => {
        elements.forEach((el) => {
          el.style.textShadow = "";
          el.style.color = "";
        });
        document.body.style.backgroundColor = "";
      };
    };

    // Secret Codes
    let currentMode = null;
    let cleanupFunction = null;
    const secretCodes = {
      matrix: () => {
        if (cleanupFunction) cleanupFunction();
        if (currentMode) clearInterval(currentMode);
        currentMode = activateMatrixMode();
      },
      disco: () => {
        if (cleanupFunction) cleanupFunction();
        if (currentMode) clearInterval(currentMode);
        currentMode = activateDiscoMode();
      },
      gravity: () => {
        if (cleanupFunction) cleanupFunction();
        if (currentMode) clearInterval(currentMode);
        activateGravityMode();
      },
      neon: () => {
        if (cleanupFunction) cleanupFunction();
        if (currentMode) clearInterval(currentMode);
        cleanupFunction = activateNeonMode();
      },
      reset: () => {
        if (cleanupFunction) {
          cleanupFunction();
          cleanupFunction = null;
        }
        if (currentMode) {
          clearInterval(currentMode);
          currentMode = null;
        }
        location.reload();
      },
    };

    let secretInput = "";
    document.addEventListener("keydown", (e) => {
      // Konami Code Check
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          secretCodes.matrix();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }

      // Secret Words Check
      secretInput += e.key.toLowerCase();
      Object.keys(secretCodes).forEach((code) => {
        if (secretInput.includes(code)) {
          secretCodes[code]();
          secretInput = "";
        }
      });

      // Reset secret input after 2 seconds of no typing
      setTimeout(() => {
        secretInput = "";
      }, 2000);
    });

    // Click Pattern Easter Egg
    let clickPattern = [];
    const targetPattern = [1, 1, 2, 2, 3, 3];
    document.addEventListener("click", (e) => {
      const third = window.innerWidth / 3;
      const clickRegion = Math.ceil(e.clientX / third);
      clickPattern.push(clickRegion);

      if (clickPattern.length > targetPattern.length) {
        clickPattern.shift();
      }

      if (clickPattern.join("") === targetPattern.join("")) {
        secretCodes.disco();
        clickPattern = [];
      }
    });
  };

  // Activate Easter Eggs
  addEasterEggs();

  // Particles.js
  const particlesContainer = document.getElementById("particles-js");
  if (particlesContainer && window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#64ffda",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#64ffda",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      retina_detect: true,
    });
  }

  // 3D Tilt Effect
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.addEventListener("mousemove", (e) => {
      const rect = heroContent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xc = rect.width / 2;
      const yc = rect.height / 2;

      const dx = x - xc;
      const dy = y - yc;

      const tiltX = dy / yc;
      const tiltY = -(dx / xc);

      heroContent.style.transform = `perspective(1000px) rotateX(${
        tiltX * 10
      }deg) rotateY(${tiltY * 10}deg) translateZ(20px)`;
    });

    heroContent.addEventListener("mouseleave", () => {
      heroContent.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    });
  }

  // Tab Switching
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab");

        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(tabId).classList.add("active");
      });
    });
  }

  // Skill Animation - Removed duplicate observer, handled by addScrollReveal
  // Skills will be animated by the scroll reveal function

  // Easter Eggs Modal
  const easterEggBtn = document.getElementById("easter-egg-btn");
  const easterEggsModal = document.getElementById("easter-eggs-modal");
  const closeEasterEggs = document.getElementById("close-easter-eggs");

  if (easterEggBtn && easterEggsModal && closeEasterEggs) {
    easterEggBtn.addEventListener("click", () => {
      easterEggsModal.style.display = "block";
      document.body.style.overflow = "hidden";
    });

    closeEasterEggs.addEventListener("click", () => {
      easterEggsModal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    window.addEventListener("click", (e) => {
      if (e.target === easterEggsModal) {
        easterEggsModal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  // Highlight click areas on hover
  const clickAreas = document.querySelectorAll(".click-area");
  clickAreas.forEach((area) => {
    area.addEventListener("mouseenter", () => {
      area.style.background = "rgba(100, 255, 218, 0.2)";
    });
    area.addEventListener("mouseleave", () => {
      area.style.background = "rgba(100, 255, 218, 0.1)";
    });
  });

  // Initialize Game Tips
  initGameTips();

  // Update scroll progress bar
  updateScrollProgress();

  // Add magnetic hover effect to buttons
  addMagneticEffect();

  // Add ripple effect to buttons
  addRippleEffect();

  // Background parallax on hover - removed cursor follow
  addBackgroundParallax();

  // Add scroll reveal animations
  addScrollReveal();

  // Add smooth entrance animations
  addEntranceAnimations();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    // Check if href is just "#" then skip
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Form validation and submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  // Real-time validation
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    input.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        validateField(this);
      }
    });
  });

  // Validate individual field
  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = "";

    // Remove previous error
    field.classList.remove("error");
    const existingError = field.parentElement.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    // Validation rules
    if (field.hasAttribute("required") && !value) {
      isValid = false;
      errorMessage = "This field is required";
    } else if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
    } else if (field.id === "name" && value && value.length < 2) {
      isValid = false;
      errorMessage = "Name must be at least 2 characters";
    } else if (field.id === "subject" && value && value.length < 3) {
      isValid = false;
      errorMessage = "Subject must be at least 3 characters";
    } else if (field.id === "message" && value && value.length < 10) {
      isValid = false;
      errorMessage = "Message must be at least 10 characters";
    }

    // Show error if invalid
    if (!isValid) {
      field.classList.add("error");
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = errorMessage;
      field.parentElement.appendChild(errorDiv);
    }

    return isValid;
  }

  // Form submission
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Validate all fields
    let isFormValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      showToast(
        "error",
        "Please fix the errors in the form",
        "Validation Error"
      );
      return;
    }

    // Get submit button and add loading state
    const submitBtn = this.querySelector(".submit-btn");
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
      const formData = {
        name: this.name.value.trim(),
        email: this.email.value.trim(),
        subject: this.subject.value.trim(),
        message: this.message.value.trim(),
      };

      // API endpoint - có thể thay đổi giữa local và production
      const API_URL =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
          ? "http://localhost:5000/api/email/send"
          : "https://portfolio-cvk9.onrender.com/api/email/send";

      console.log("Sending email to:", API_URL);
      console.log("Form data:", formData);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      let data;
      try {
        const text = await response.text();
        console.log("Response text:", text);
        data = text ? JSON.parse(text) : {};
      } catch (parseError) {
        console.error("Parse error:", parseError);
        throw new Error(
          "Invalid response from server. Please check if the backend is running."
        );
      }

      // Check response status
      if (!response.ok) {
        const errorMsg =
          data.message || data.error || `Server error: ${response.status}`;
        console.error("Server error:", errorMsg);
        throw new Error(errorMsg);
      }

      if (data.success) {
        // Create and show toast
        const toast = document.createElement("div");
        toast.className = "toast-notification";

        // Add CSS directly to head if not exists
        if (!document.querySelector("#toast-styles")) {
          const style = document.createElement("style");
          style.id = "toast-styles";
          style.textContent = `
                        @keyframes border-glow {
                            0%, 100% {
                                box-shadow: 0 0 5px #64ffda,
                                            0 0 10px #64ffda,
                                            0 0 20px #64ffda;
                                border-image: conic-gradient(
                                    #64ffda 0deg,
                                    transparent 120deg,
                                    transparent 180deg,
                                    #00b8d4 240deg,
                                    #64ffda 360deg
                                ) 1;
                            }
                            50% {
                                box-shadow: 0 0 10px #64ffda,
                                            0 0 20px #64ffda,
                                            0 0 30px #64ffda;
                                border-image: conic-gradient(
                                    #00b8d4 0deg,
                                    #64ffda 120deg,
                                    transparent 180deg,
                                    transparent 240deg,
                                    #00b8d4 360deg
                                ) 1;
                            }
                        }

                        @keyframes border-glow-error {
                            0%, 100% {
                                box-shadow: 0 0 5px #ff4b4b,
                                            0 0 10px #ff4b4b,
                                            0 0 20px #ff4b4b;
                                border-image: conic-gradient(
                                    #ff4b4b 0deg,
                                    transparent 120deg,
                                    transparent 180deg,
                                    #ff416c 240deg,
                                    #ff4b4b 360deg
                                ) 1;
                            }
                            50% {
                                box-shadow: 0 0 10px #ff4b4b,
                                            0 0 20px #ff4b4b,
                                            0 0 30px #ff4b4b;
                                border-image: conic-gradient(
                                    #ff416c 0deg,
                                    #ff4b4b 120deg,
                                    transparent 180deg,
                                    transparent 240deg,
                                    #ff416c 360deg
                                ) 1;
                            }
                        }

                        .toast-notification {
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            min-width: 300px;
                            max-width: 400px;
                            background: rgba(10, 25, 47, 0.95);
                            backdrop-filter: blur(10px);
                            color: #fff;
                            padding: 15px 25px;
                            border-radius: 10px;
                            z-index: 9999;
                            opacity: 0;
                            transform: translateX(100%);
                            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                            border: 2px solid transparent;
                        }
                        
                        .toast-notification.show {
                            opacity: 1;
                            transform: translateX(0);
                        }
                        
                        .toast-notification.success {
                            animation: border-glow 3s ease-in-out infinite;
                        }
                        
                        .toast-notification.error {
                            animation: border-glow-error 3s ease-in-out infinite;
                        }
                        
                        .toast-notification .toast-content {
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            position: relative;
                            z-index: 1;
                        }
                        
                        .toast-notification .toast-icon {
                            font-size: 24px;
                            flex-shrink: 0;
                            filter: drop-shadow(0 0 8px currentColor);
                        }
                        
                        .toast-notification .toast-message {
                            flex-grow: 1;
                        }
                        
                        .toast-notification h4 {
                            margin: 0 0 5px 0;
                            font-size: 16px;
                            font-weight: 600;
                            color: #64ffda;
                            text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
                        }
                        
                        .toast-notification p {
                            margin: 0;
                            font-size: 14px;
                            line-height: 1.5;
                            color: #8892b0;
                        }

                        .toast-notification.error h4 {
                            color: #ff4b4b;
                            text-shadow: 0 0 10px rgba(255, 75, 75, 0.5);
                        }

                        .toast-notification::before {
                            content: '';
                            position: absolute;
                            inset: 0;
                            border-radius: 10px;
                            padding: 2px;
                            background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.1), transparent);
                            -webkit-mask: 
                                linear-gradient(#fff 0 0) content-box, 
                                linear-gradient(#fff 0 0);
                            -webkit-mask-composite: xor;
                            mask-composite: exclude;
                            pointer-events: none;
                        }

                        .toast-notification.error::before {
                            background: linear-gradient(45deg, transparent, rgba(255, 75, 75, 0.1), transparent);
                        }
                    `;
          document.head.appendChild(style);
        }

        toast.innerHTML = `
                    <div class="toast-content">
                        <div class="toast-icon">🎉</div>
                        <div class="toast-message">
                            <h4>${data.title || "Success!"}</h4>
                            <p>${data.message}</p>
                        </div>
                    </div>
                `;

        document.body.appendChild(toast);
        toast.classList.add("success");

        // Show animation
        requestAnimationFrame(() => {
          toast.classList.add("show");
        });

        // Auto hide toast
        setTimeout(() => {
          toast.classList.remove("show");
          setTimeout(() => toast.remove(), 500);
        }, data.duration || 5000);

        contactForm.reset();
        // Remove any error classes
        inputs.forEach((input) => {
          input.classList.remove("error");
          const errorMsg = input.parentElement.querySelector(".error-message");
          if (errorMsg) errorMsg.remove();
        });
      } else {
        // Error toast notification
        const toast = document.createElement("div");
        toast.className = "toast-notification";

        toast.innerHTML = `
                    <div class="toast-content">
                        <div class="toast-icon">❌</div>
                        <div class="toast-message">
                            <h4>${data.title || "Error occurred!"}</h4>
                            <p>${data.message}</p>
                        </div>
                    </div>
                `;

        document.body.appendChild(toast);
        toast.classList.add("error");

        // Show animation
        requestAnimationFrame(() => {
          toast.classList.add("show");
        });

        // Auto hide toast
        setTimeout(() => {
          toast.classList.remove("show");
          setTimeout(() => toast.remove(), 300);
        }, data.duration || 5000);
      }
    } catch (error) {
      console.error("Error:", error);

      // Provide more helpful error messages
      let errorMessage =
        error.message || "Unable to connect to server. Please try again later.";
      let errorTitle = "Connection Error";

      if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError")
      ) {
        errorMessage =
          "Cannot connect to server. Please check:\n1. Backend server is running\n2. CORS is configured correctly\n3. Network connection is stable";
        errorTitle = "Network Error";
      } else if (error.message.includes("Invalid response")) {
        errorMessage =
          "Server returned invalid response. Please check backend configuration.";
        errorTitle = "Server Error";
      }

      showToast("error", errorMessage, errorTitle);
    } finally {
      // Restore submit button
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// Enhanced Scroll Animations
let lastScrollTop = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Update scroll progress bar
      updateScrollProgress();

      // Handle animation for current sections with parallax
      const sections = document.querySelectorAll("section");
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionMiddle = sectionTop + sectionHeight / 2;
        const windowMiddle = scrollTop + window.innerHeight / 2;

        // Add active class when in view
        if (scrollTop >= sectionTop - sectionHeight / 2) {
          section.classList.add("active");

          // Parallax effect
          const parallaxElements =
            section.querySelectorAll(".parallax-element");
          parallaxElements.forEach((el, i) => {
            const speed = 0.5 + i * 0.1;
            const yPos = -(scrollTop - sectionTop) * speed;
            el.style.transform = `translateY(${yPos}px)`;
          });
        }

        // Add floating animation to elements in view
        if (
          windowMiddle > sectionTop &&
          windowMiddle < sectionTop + sectionHeight
        ) {
          const floatingElements = section.querySelectorAll(
            ".skill-item, .timeline-item, .education-card"
          );
          floatingElements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("floating");
            }, i * 100);
          });
        }
      });

      // Navbar scroll effect
      const navbar = document.querySelector(".navbar");
      if (scrollTop > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      lastScrollTop = scrollTop;
      ticking = false;
    });
    ticking = true;
  }
});

// Function to update scroll progress bar
const updateScrollProgress = () => {
  const scrollProgress = document.getElementById("scrollProgressBar");
  if (scrollProgress) {
    // Calculate scroll percentage
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;

    // Update progress bar width
    scrollProgress.style.width = `${scrolled}%`;

    // Add fade effect when not scrolling
    if (scrolled === 0) {
      scrollProgress.style.opacity = "0";
    } else {
      scrollProgress.style.opacity = "1";
    }
  }
};

// Modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".close-modal");
  const viewDetailsBtns = document.querySelectorAll(".view-details");

  // Open modal and show corresponding project details
  viewDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = btn.dataset.project;
      showProjectDetails(projectId);
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Show project details
  function showProjectDetails(projectId) {
    const allDetails = document.querySelectorAll(".project-details");
    allDetails.forEach((detail) => (detail.style.display = "none"));

    const currentDetail = document.getElementById(`${projectId}-details`);
    if (currentDetail) {
      currentDetail.style.display = "block";
    }
  }
});

// Initialize Game Tips
const initGameTips = () => {
  const tips = [
    {
      text: "Did you know? Switch to English keyboard (Ctrl + Shift) and press <span class='highlight'>↑↑↓↓←→←→BA</span> to activate Matrix mode!",
      duration: 10000,
    },
    {
      text: "Switch to English keyboard and type <span class='highlight'>disco</span> to turn the website into a dance floor!",
      duration: 8000,
    },
    {
      text: "Switch to English keyboard and type <span class='highlight'>gravity</span> to explore gravity effects",
      duration: 8000,
    },
    {
      text: "Switch to English keyboard and type <span class='highlight'>neon</span> to create a glowing neon effect",
      duration: 8000,
    },
    {
      text: "Click in pattern: <span class='highlight'>Left side - Left - Center - Center - Right - Right</span> to activate Disco Mode",
      duration: 10000,
    },
    {
      text: "Switch to English keyboard and type <span class='highlight'>reset</span> to return to normal state",
      duration: 8000,
    },
  ];

  const gameTips = document.getElementById("game-tips");
  if (!gameTips) return;

  const tipContent = gameTips.querySelector(".tip-content");
  const nextTipBtn = document.getElementById("next-tip");

  if (!tipContent || !nextTipBtn) return;

  let currentTipIndex = 0;
  let tipTimeout;
  let isVisible = false;

  // Show new tip
  const showNewTip = () => {
    const tip = tips[currentTipIndex];

    // Hide old tip
    tipContent.classList.remove("show");

    // Update content after animation
    setTimeout(() => {
      tipContent.innerHTML = tip.text;
      tipContent.classList.add("show");
      gameTips.classList.add("show", "new-tip");

      // Auto hide tip after duration
      clearTimeout(tipTimeout);
      tipTimeout = setTimeout(() => {
        if (isVisible) {
          hideGameTips();
        }
      }, tip.duration);
    }, 300);

    currentTipIndex = (currentTipIndex + 1) % tips.length;
    isVisible = true;
  };

  // Hide game tips
  const hideGameTips = () => {
    gameTips.classList.remove("show", "new-tip");
    setTimeout(() => {
      tipContent.classList.remove("show");
    }, 300);
    isVisible = false;
  };

  // Handle next button click event
  nextTipBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showNewTip();
  });

  // Show first tip after 5 seconds
  setTimeout(showNewTip, 5000);

  // Show new tip every 30 seconds if no interaction
  setInterval(() => {
    if (!isVisible) {
      showNewTip();
    }
  }, 30000);
};

// Magnetic Hover Effect
const addMagneticEffect = () => {
  const magneticElements = document.querySelectorAll(
    ".cta-button, .social-link, .skill-item"
  );

  magneticElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const moveX = x * 0.15;
      const moveY = y * 0.15;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate(0, 0)";
    });
  });
};

// Ripple Effect for Buttons
const addRippleEffect = () => {
  const buttons = document.querySelectorAll(
    ".cta-button, .submit-btn, .tab-btn"
  );

  buttons.forEach((button) => {
    button.classList.add("ripple-button");

    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
};

// Background Parallax on Hover Effect
const addBackgroundParallax = () => {
  const parallaxElements = document.querySelectorAll(
    ".cta-button, .social-link, .skill-item, .contact-item, .timeline-item, .education-card, .contact-info, .contact-form"
  );

  parallaxElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Move background elements (particles, background animation) based on mouse position
      const particles = document.getElementById("particles-js");
      const bgAnimation = document.querySelector(".background-animation");

      if (particles) {
        const parallaxX = (x / rect.width) * 30;
        const parallaxY = (y / rect.height) * 30;
        particles.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
        particles.style.transition = "transform 0.1s ease-out";
      }

      if (bgAnimation) {
        const parallaxX = (x / rect.width) * 40;
        const parallaxY = (y / rect.height) * 40;
        bgAnimation.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
        bgAnimation.style.transition = "transform 0.1s ease-out";
      }
    });

    element.addEventListener("mouseleave", () => {
      // Reset background elements smoothly
      const particles = document.getElementById("particles-js");
      const bgAnimation = document.querySelector(".background-animation");

      if (particles) {
        particles.style.transform = "translate(0, 0)";
        particles.style.transition = "transform 0.5s ease-out";
      }

      if (bgAnimation) {
        bgAnimation.style.transform = "translate(0, 0)";
        bgAnimation.style.transition = "transform 0.5s ease-out";
      }
    });
  });
};

// Scroll Reveal Animation
const addScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("active");
          entry.target.style.opacity = "1"; // Ensure visibility
          entry.target.style.visibility = "visible"; // Ensure visibility

          // Add specific animations based on element type
          if (entry.target.classList.contains("skill-item")) {
            entry.target.style.animation = `fadeInUp 0.6s ease-out ${
              index * 0.1
            }s forwards`;
          } else if (entry.target.classList.contains("timeline-item")) {
            entry.target.style.animation = `slideInRight 0.8s ease-out ${
              index * 0.2
            }s forwards`;
          } else if (entry.target.classList.contains("education-card")) {
            entry.target.style.animation = `bounceIn 0.8s ease-out ${
              index * 0.15
            }s forwards`;
          } else if (entry.target.classList.contains("contact-item")) {
            entry.target.style.animation = `fadeInUp 0.6s ease-out ${
              index * 0.1
            }s forwards`;
          }
        }, index * 50);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Don't hide contact-info and contact-form, only animate contact-item
  const elementsToReveal = document.querySelectorAll(
    ".skill-item, .timeline-item, .education-card"
  );

  // Contact items can be animated but contact-info and contact-form should always be visible
  const contactItems = document.querySelectorAll(".contact-item");
  elementsToReveal.forEach((el) => {
    // Check if element is already in viewport
    const rect = el.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (!isInViewport) {
      // Only hide if not in viewport
      el.style.opacity = "0";
      el.style.visibility = "hidden";
      observer.observe(el);
    } else {
      // If already in viewport, show immediately without animation delay
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.classList.add("active");
      // Still observe to handle scroll up/down
      observer.observe(el);
    }
  });

  // Handle contact items separately - always visible but with animation
  contactItems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (!isInViewport) {
      el.style.opacity = "0";
      el.style.visibility = "hidden";
      observer.observe(el);
    } else {
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.classList.add("active");
      observer.observe(el);
    }
  });

  // Also check on initial load after a short delay to catch any missed elements
  setTimeout(() => {
    elementsToReveal.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport && el.style.opacity === "0") {
        el.style.opacity = "1";
        el.style.visibility = "visible";
        el.classList.add("active");
      }
    });

    // Ensure contact items are visible
    contactItems.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport && el.style.opacity === "0") {
        el.style.opacity = "1";
        el.style.visibility = "visible";
        el.classList.add("active");
      }
    });
  }, 500);
};

// Entrance Animations
const addEntranceAnimations = () => {
  // Add floating class to profile
  const profileCircle = document.querySelector(".profile-circle");
  if (profileCircle) {
    profileCircle.classList.add("floating");
  }

  // Add scale-on-hover to cards
  const cards = document.querySelectorAll(
    ".skill-item, .education-card, .timeline-content"
  );
  cards.forEach((card) => {
    card.classList.add("scale-on-hover");
  });

  // Add glass-card effect
  const glassElements = document.querySelectorAll(
    ".contact-info, .contact-form, .education-card, .timeline-content"
  );
  glassElements.forEach((el) => {
    el.classList.add("glass-card");
  });

  // Add gradient border to important elements
  const gradientElements = document.querySelectorAll(".section-title");
  gradientElements.forEach((el) => {
    const titleBar = el.querySelector(".title-bar");
    if (titleBar) {
      titleBar.classList.add("gradient-border");
    }
  });

  // Add pulse glow to profile
  if (profileCircle) {
    profileCircle.classList.add("pulse-glow");
  }

  // Add 3D effect to cards
  const cards3D = document.querySelectorAll(".education-card, .skill-item");
  cards3D.forEach((card) => {
    card.classList.add("card-3d");
  });
};
