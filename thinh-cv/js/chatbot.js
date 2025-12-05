// Chatbot Data - Information about Le Tai Hung Thinh
const chatbotData = {
  name: "Le Tai Hung Thinh",
  title: "Software Engineer",
  email: "hungthinh.tm2@gmail.com",
  phone: "0349332023",
  location: "HCMC, Vietnam",
  github: "https://github.com/hungthinh04",
  education: {
    school: "Cao Thang Technical College",
    major: "Software Engineering",
    period: "Sep 2022 - Jul 2025",
  },
  experience: [
    {
      company: "TechVanguard",
      position: "FullStack Developer",
      period: "May 2025 - Dec 2025",
      description:
        "Worked on University Management System, CMS, Hospital Management System, and various web applications using Laravel, Node.js, Next.js, and MongoDB.",
    },
    {
      company: "3i Co., Ltd",
      position: "Software Engineer Intern - Remote",
      period: "May 2024 - Aug 2024",
      description:
        "Developed news portal for Vietnam Coast Guard using TypeScript, maintained company website with React.js, and deployed applications to AWS.",
    },
  ],
  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "PHP"],
    frontend: ["Next.js", "HTML5/CSS3", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js (Express.js)", "Laravel"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git (GitLab, Gitea, GitHub)", "Jira", "Postman"],
  },
  projects: [
    {
      name: "Weather App",
      period: "Nov 2024 - Dec 2024",
      tech: "HTML, CSS, JavaScript, WeatherAPI, OpenAI API",
      description:
        "Weather forecast application with 7-day predictions, interactive map, location detection, and audio alerts.",
    },
    {
      name: "Real-time Chat Application",
      period: "Dec 2024 - Apr 2025",
      tech: "MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS",
      description:
        "Full-stack messaging platform with real-time communication, JWT authentication, and persistent chat history.",
    },
  ],
};

// Chatbot responses based on keywords
function getChatbotResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();

  // Greetings - improved matching
  if (
    message.match(
      /^(hi|hello|hey|chào|xin chào|good morning|good afternoon|good evening)/i
    )
  ) {
    return "Hello! I'm here to help you learn about Le Tai Hung Thinh. What would you like to know?";
  }

  // Name - improved matching with more patterns
  if (
    message.match(
      /(what.*name|who.*you|tên.*gì|bạn.*tên|name.*gì|tên.*là|your name|his name)/i
    )
  ) {
    return `His name is ${chatbotData.name}, a ${chatbotData.title} with a goal to become a professional Fullstack Developer.`;
  }

  // Contact information - improved matching
  if (
    message.match(
      /(contact|email|phone|số điện thoại|liên hệ|how.*contact|get.*touch|reach|github|linkedin)/i
    )
  ) {
    return `Contact Information:\n📧 Email: ${chatbotData.email}\n📱 Phone: ${chatbotData.phone}\n📍 Location: ${chatbotData.location}\n🔗 GitHub: ${chatbotData.github}`;
  }

  // Experience - improved matching with more keywords
  if (
    message.match(
      /(experience|kinh nghiệm|work.*experience|work.*history|employment|job|career|company|công ty|làm việc|where.*work|worked|working)/i
    )
  ) {
    let response = "Work Experience:\n\n";
    chatbotData.experience.forEach((exp) => {
      response += `🏢 ${exp.company}\n${exp.position}\n${exp.period}\n${exp.description}\n\n`;
    });
    return response;
  }

  // Skills - improved matching
  if (
    message.match(
      /(skill|kỹ năng|technology|tech|technologies|what.*can|what.*know|proficient|expertise|languages|frameworks|tools|stack)/i
    )
  ) {
    return `Skills:\n\nLanguages: ${chatbotData.skills.languages.join(
      ", "
    )}\nFrontend: ${chatbotData.skills.frontend.join(
      ", "
    )}\nBackend: ${chatbotData.skills.backend.join(
      ", "
    )}\nDatabase: ${chatbotData.skills.database.join(
      ", "
    )}\nTools: ${chatbotData.skills.tools.join(", ")}`;
  }

  // Education - improved matching
  if (
    message.match(
      /(education|học vấn|school|trường|college|đại học|university|degree|studied|study|where.*study|graduated)/i
    )
  ) {
    return `Education:\n${chatbotData.education.school}\nMajor: ${chatbotData.education.major}\nPeriod: ${chatbotData.education.period}`;
  }

  // Projects - improved matching
  if (
    message.match(
      /(project|dự án|portfolio|github|what.*built|what.*create|applications|apps|tell.*about.*project)/i
    )
  ) {
    let response = "Personal Projects:\n\n";
    chatbotData.projects.forEach((project) => {
      response += `📁 ${project.name} (${project.period})\nTech: ${project.tech}\n${project.description}\n\n`;
    });
    return response;
  }

  // TechVanguard specific - improved matching
  if (
    message.match(
      /(techvanguard|ums|hms|cms|ggcamp|lam|university.*management|hospital.*management|content.*management)/i
    )
  ) {
    return "At TechVanguard, he worked on:\n• University Management System (UMS) - Finance, Partnerships, Academic Routines modules\n• Content Management System (CMS) - Node.js/MongoDB\n• Candidate Application Portal (CAP)\n• Hospital Management System (HMS) - RBAC, Payment Gateway, EMR\n• LAMS project - Next.js frontend architecture\n• GGCamp Portal - Summer camp registration system";
  }

  // Weather App - improved matching
  if (message.match(/(weather|thời tiết|weather.*app)/i)) {
    const project = chatbotData.projects.find((p) => p.name === "Weather App");
    return `Weather App (${project.period}):\n${project.description}\nTechnologies: ${project.tech}`;
  }

  // Chat Application - improved matching
  if (message.match(/(chat|messaging|real-time|chat.*app|messaging.*app)/i)) {
    const project = chatbotData.projects.find(
      (p) => p.name === "Real-time Chat Application"
    );
    return `Real-time Chat Application (${project.period}):\n${project.description}\nTechnologies: ${project.tech}`;
  }

  // About/Introduction - new pattern
  if (
    message.match(
      /(about|tell.*about|introduce|giới thiệu|who.*is|what.*about)/i
    )
  ) {
    return `About Le Tai Hung Thinh:\n\nHe is a ${chatbotData.title} aspiring to become a professional Fullstack Developer. He has experience in building and maintaining complex management systems using JavaScript (React/Next.js/Node.js) and PHP (Laravel).\n\nYou can ask me about his experience, skills, education, projects, or contact information.`;
  }

  // Location - new pattern
  if (message.match(/(where|location|địa chỉ|address|live|from)/i)) {
    return `Location: ${chatbotData.location}`;
  }

  // Default response - only if nothing matches
  const defaultResponses = [
    "I can help you learn about Le Tai Hung Thinh's experience, skills, education, projects, and contact information. What would you like to know?",
    "You can ask me about his work experience, skills, education, personal projects, or contact details. What interests you?",
    "Feel free to ask about his background, technical skills, work history, or projects. How can I help?",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Chatbot functionality
document.addEventListener("DOMContentLoaded", function () {
  const chatbotToggle = document.getElementById("chatbotToggle");
  const chatbotWindow = document.getElementById("chatbotWindow");
  const chatbotClose = document.getElementById("chatbotClose");
  const chatbotInput = document.getElementById("chatbotInput");
  const chatbotSend = document.getElementById("chatbotSend");
  const chatbotMessages = document.getElementById("chatbotMessages");
  const chatbotTyping = document.getElementById("chatbotTyping");
  const chatbotClear = document.getElementById("chatbotClear");
  const chatbotSearch = document.getElementById("chatbotSearch");
  const chatbotSearchContainer = document.getElementById(
    "chatbotSearchContainer"
  );
  const chatbotSearchInput = document.getElementById("chatbotSearchInput");
  const chatbotSearchClose = document.getElementById("chatbotSearchClose");
  const chatbotExport = document.getElementById("chatbotExport");
  const chatbotVoice = document.getElementById("chatbotVoice");
  const chatbotVoiceBtn = document.getElementById("chatbotVoiceBtn");
  const chatbotSuggestedContainer = document.getElementById(
    "chatbotSuggestedContainer"
  );

  // Load chat history from localStorage
  function loadChatHistory() {
    const savedChat = localStorage.getItem("chatbotHistory");
    if (savedChat) {
      const messages = JSON.parse(savedChat);
      // Clear initial welcome message
      chatbotMessages.innerHTML = "";
      messages.forEach((msg) => {
        addMessageToDOM(msg.text, msg.type, false);
      });
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  }

  // Save chat history to localStorage
  function saveChatHistory() {
    const messages = [];
    document.querySelectorAll(".chatbot-message").forEach((msgEl) => {
      const type = msgEl.classList.contains("user-message") ? "user" : "bot";
      const text = msgEl.querySelector(".message-content").textContent.trim();
      messages.push({ type, text });
    });
    localStorage.setItem("chatbotHistory", JSON.stringify(messages));
  }

  // Load history on page load
  loadChatHistory();

  // Toggle chatbot window
  chatbotToggle.addEventListener("click", function () {
    chatbotWindow.classList.toggle("active");
    if (chatbotWindow.classList.contains("active")) {
      chatbotInput.focus();
    }
  });

  // Close chatbot
  chatbotClose.addEventListener("click", function () {
    chatbotWindow.classList.remove("active");
  });

  // Send message function
  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (!userMessage) return;

    // Hide quick questions
    const quickQuestions = document.getElementById("chatbotQuickQuestions");
    if (quickQuestions) {
      quickQuestions.style.display = "none";
    }

    // Add user message
    addMessage(userMessage, "user");
    chatbotInput.value = "";

    // Show typing indicator
    chatbotTyping.style.display = "flex";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Simulate typing delay
    setTimeout(() => {
      chatbotTyping.style.display = "none";
      const botResponse = getChatbotResponse(userMessage);
      const suggestedQuestions = getSuggestedQuestions(userMessage);
      addMessage(botResponse, "bot", true, suggestedQuestions);
      // Scroll to show suggested questions
      setTimeout(() => {
        chatbotMessages.scrollTo({
          top: chatbotMessages.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }, 800 + Math.random() * 500);
  }

  // Get suggested follow-up questions
  function getSuggestedQuestions(userMessage) {
    const message = userMessage.toLowerCase();
    const suggestions = [];

    if (message.match(/(name|tên)/i)) {
      suggestions.push(
        "Tell me about your experience",
        "What skills do you have?",
        "Where are you from?"
      );
    } else if (message.match(/(experience|work)/i)) {
      suggestions.push(
        "What skills do you have?",
        "Tell me about TechVanguard",
        "What projects have you done?"
      );
    } else if (message.match(/(skill|tech)/i)) {
      suggestions.push(
        "What projects have you done?",
        "Tell me about your experience",
        "Where did you study?"
      );
    } else if (message.match(/(project|app)/i)) {
      suggestions.push(
        "Tell me about Weather App",
        "What is Real-time Chat Application?",
        "What skills do you have?"
      );
    } else if (message.match(/(education|study|school)/i)) {
      suggestions.push(
        "What skills do you have?",
        "Tell me about your experience",
        "What projects have you done?"
      );
    } else {
      suggestions.push(
        "What is your name?",
        "Tell me about your experience",
        "What skills do you have?"
      );
    }

    return suggestions.slice(0, 3);
  }

  // Add message to chat
  function addMessage(
    text,
    type,
    showSuggestions = false,
    suggestedQuestions = []
  ) {
    addMessageToDOM(text, type, showSuggestions, suggestedQuestions);
    saveChatHistory();
  }

  // Add message to DOM
  function addMessageToDOM(
    text,
    type,
    showSuggestions = false,
    suggestedQuestions = []
  ) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chatbot-message ${type}-message`;

    const avatarDiv = document.createElement("div");
    avatarDiv.className = "message-avatar";
    avatarDiv.innerHTML =
      type === "bot"
        ? '<i class="fas fa-robot"></i>'
        : '<i class="fas fa-user"></i>';

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";

    // Message actions (copy button)
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "message-actions";
    const copyBtn = document.createElement("button");
    copyBtn.className = "message-action-btn";
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.title = "Copy message";
    copyBtn.onclick = () => copyToClipboard(text);
    actionsDiv.appendChild(copyBtn);
    contentDiv.appendChild(actionsDiv);

    // Handle multi-line responses
    const lines = text.split("\n");
    lines.forEach((line, index) => {
      const p = document.createElement("p");
      p.textContent = line;
      if (index > 0) {
        p.style.marginTop = "8px";
      }
      contentDiv.appendChild(p);
    });

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);

    // Add suggested questions to bottom container if bot message
    if (
      type === "bot" &&
      showSuggestions &&
      suggestedQuestions &&
      suggestedQuestions.length > 0
    ) {
      // Show suggested questions immediately after message is added
      setTimeout(() => {
        if (chatbotSuggestedContainer) {
          showSuggestedQuestions(suggestedQuestions);
        }
      }, 100);
    }

    // Scroll to bottom with smooth animation
    setTimeout(() => {
      chatbotMessages.scrollTo({
        top: chatbotMessages.scrollHeight,
        behavior: "smooth",
      });
    }, 200);
  }

  // Toggle suggested questions visibility
  let suggestedQuestionsVisible = true;

  function toggleSuggestedQuestions() {
    const questionsList = chatbotSuggestedContainer.querySelector(
      ".suggested-questions-list"
    );
    const toggleBtn = chatbotSuggestedContainer.querySelector(
      ".suggested-toggle-btn"
    );
    if (questionsList && toggleBtn) {
      suggestedQuestionsVisible = !suggestedQuestionsVisible;
      if (suggestedQuestionsVisible) {
        questionsList.style.display = "flex";
        toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        toggleBtn.title = "Hide suggestions";
      } else {
        questionsList.style.display = "none";
        toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
        toggleBtn.title = "Show suggestions";
      }
    }
  }

  // Show suggested questions
  function showSuggestedQuestions(questions) {
    if (!chatbotSuggestedContainer || !questions || questions.length === 0) {
      return;
    }

    chatbotSuggestedContainer.innerHTML = `
      <div class="suggested-questions">
        <div class="suggested-questions-header">
          <p class="suggested-questions-title">Suggested questions:</p>
          <button class="suggested-toggle-btn" id="suggestedToggleBtn" title="Hide suggestions">
            <i class="fas fa-chevron-up"></i>
          </button>
        </div>
        <div class="suggested-questions-list">
          ${questions
            .map(
              (question) => `
            <button class="suggested-question-btn" data-question="${question}">
              ${question}
            </button>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    chatbotSuggestedContainer.style.display = "block";

    // Attach toggle button event
    const toggleBtn = document.getElementById("suggestedToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleSuggestedQuestions);
    }

    // Attach event listeners
    chatbotSuggestedContainer
      .querySelectorAll(".suggested-question-btn")
      .forEach((btn) => {
        btn.addEventListener("click", function () {
          const question = this.getAttribute("data-question");
          chatbotInput.value = question;
          sendMessage();
        });
      });
  }

  // Hide suggested questions
  function hideSuggestedQuestions() {
    chatbotSuggestedContainer.style.display = "none";
    chatbotSuggestedContainer.innerHTML = "";
  }

  // Copy to clipboard
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      // Show feedback
      const notification = document.createElement("div");
      notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: var(--card-bg);
        color: var(--primary-color);
        padding: 12px 20px;
        border-radius: 8px;
        border: 1px solid var(--primary-color);
        z-index: 10000;
        animation: fadeIn 0.3s ease;
      `;
      notification.textContent = "Copied to clipboard!";
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.style.animation = "fadeOut 0.3s ease";
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    });
  }

  // Send on button click
  chatbotSend.addEventListener("click", sendMessage);

  // Send on Enter key
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Quick questions functionality
  const quickQuestionButtons = document.querySelectorAll(".quick-question-btn");
  quickQuestionButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const question = this.getAttribute("data-question");
      chatbotInput.value = question;
      sendMessage();
    });
  });

  // Clear chat
  chatbotClear.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear the chat history?")) {
      // Get original quick questions HTML
      const originalQuickQuestions = document.getElementById(
        "chatbotQuickQuestions"
      );
      const quickQuestionsHTML = originalQuickQuestions
        ? originalQuickQuestions.outerHTML
        : "";

      chatbotMessages.innerHTML = `
        <div class="chatbot-message bot-message">
          <div class="message-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="message-content">
            <p>
              Hello! I'm here to help you learn about Le Tai Hung Thinh. What
              would you like to know?
            </p>
          </div>
        </div>
        ${quickQuestionsHTML}
      `;
      localStorage.removeItem("chatbotHistory");
      hideSuggestedQuestions();
      // Re-attach quick question listeners
      document.querySelectorAll(".quick-question-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const question = this.getAttribute("data-question");
          chatbotInput.value = question;
          sendMessage();
        });
      });
    }
  });

  // Search functionality
  chatbotSearch.addEventListener("click", function () {
    chatbotSearchContainer.style.display =
      chatbotSearchContainer.style.display === "none" ? "flex" : "none";
    if (chatbotSearchContainer.style.display === "flex") {
      chatbotSearchInput.focus();
    }
  });

  chatbotSearchClose.addEventListener("click", function () {
    chatbotSearchContainer.style.display = "none";
    chatbotSearchInput.value = "";
    // Remove highlights
    document.querySelectorAll(".message-highlight").forEach((el) => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    });
  });

  chatbotSearchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim();
    if (!searchTerm) {
      // Remove highlights
      document.querySelectorAll(".message-highlight").forEach((el) => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
      });
      return;
    }

    // Highlight search term in messages
    document.querySelectorAll(".message-content p").forEach((p) => {
      const text = p.textContent;
      const regex = new RegExp(`(${searchTerm})`, "gi");
      if (regex.test(text)) {
        p.innerHTML = text.replace(
          regex,
          '<span class="message-highlight">$1</span>'
        );
      }
    });

    // Scroll to first match
    const firstMatch = document.querySelector(".message-highlight");
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  // Export chat
  chatbotExport.addEventListener("click", function () {
    const messages = [];
    document.querySelectorAll(".chatbot-message").forEach((msgEl) => {
      const type = msgEl.classList.contains("user-message") ? "User" : "Bot";
      const text = msgEl.querySelector(".message-content").textContent.trim();
      messages.push(`[${type}]: ${text}`);
    });

    const chatText = `Chat History - Le Tai Hung Thinh\n${"=".repeat(
      50
    )}\n\n${messages.join("\n\n")}`;
    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-history-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Voice input
  let recognition = null;
  let isRecording = false;

  if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      chatbotInput.value = transcript;
      sendMessage();
    };

    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = function () {
      isRecording = false;
      chatbotVoiceBtn.classList.remove("recording");
      chatbotVoice.classList.remove("recording");
    };
  }

  function toggleVoiceInput() {
    if (!recognition) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (isRecording) {
      recognition.stop();
      isRecording = false;
      chatbotVoiceBtn.classList.remove("recording");
      chatbotVoice.classList.remove("recording");
    } else {
      recognition.start();
      isRecording = true;
      chatbotVoiceBtn.classList.add("recording");
      chatbotVoice.classList.add("recording");
    }
  }

  if (chatbotVoiceBtn) {
    chatbotVoiceBtn.addEventListener("click", toggleVoiceInput);
  }
  if (chatbotVoice) {
    chatbotVoice.addEventListener("click", toggleVoiceInput);
  }

  // Close on outside click (optional)
  document.addEventListener("click", function (e) {
    if (
      chatbotWindow.classList.contains("active") &&
      !chatbotWindow.contains(e.target) &&
      !chatbotToggle.contains(e.target)
    ) {
      // Uncomment to close on outside click
      // chatbotWindow.classList.remove("active");
    }
  });
});
