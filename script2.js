// Back to Top Button
const topBtn = document.getElementById("backToTop");

// Show button when scrolling
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Scroll to top smoothly
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Search elements MUST be placed before they're used
const searchInput = document.getElementById("heroSearchInput");
const suggestionsList = document.getElementById("heroSearchSuggestions");

// Search toggle
const searchBtn = document.getElementById("heroSearchBtn");
const searchWrapper = document.querySelector(".search-wrapper");

searchBtn.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");
});

// 🔥 Always show button (for testing)
topBtn.style.display = "block";

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

const heroBgAnimation = document.getElementById('heroBgAnimation');
const numberOfColorBoxes = 500;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  heroBgAnimation.append(colorBox);
}

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target)) {
    suggestionsList.style.display = "none";
  }
});

const menuButton = document.querySelector('.mobile-menu-button');
const mainNav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// List of topics with page URLs
const topics = [
  { name: "Protect Your Data", url: "blogpage1.html" },
  { name: "Recognize Online Scams", url: "blogpage2.html" },
  { name: "Cyberbullying Awareness", url: "blogpage3.html" },
  { name: "Fake News & Misinformation", url: "blogpage_fakenews.html" },
  { name: "Recognize Malware Threats", url: "blogpage_malware.html" },
  { name: "Safe Use of Public Wifi", url: "blogpage_publicwifi.html" },
  { name: "Protect Yourself from Gambling Fraud Online", url: "blogpage_gamblingfraud.html" },
  { name: "Spot Fake Online Stores", url: "blogpage_fakeonlinestores.html" },
  { name: "About", url: "about.html" },
  { name: "Tips", url: "tips.html" },
  { name: "Awareness", url: "aware.html" },
  { name: "Contact", url: "contact.html" },
];

// Function to perform search
function performSearch(query) {
  const lowerQuery = query.toLowerCase();
  suggestionsList.innerHTML = "";

  if (lowerQuery === "") {
    suggestionsList.style.display = "none";
    return;
  }

  // Check for exact match first
  const exactMatch = topics.find(topic => topic.name.toLowerCase() === lowerQuery);
  if (exactMatch) {
    window.location.href = exactMatch.url;
    return;
  }

  // If no exact match, show "not found" and all topics
  const notFoundLi = document.createElement("li");
  notFoundLi.textContent = "Not found";
  notFoundLi.style.color = "#999";
  notFoundLi.style.cursor = "default";
  suggestionsList.appendChild(notFoundLi);

  // Add all topics below
  topics.forEach(topic => {
    const li = document.createElement("li");
    li.textContent = topic.name;
    li.addEventListener("click", () => {
      window.location.href = topic.url;
    });
    suggestionsList.appendChild(li);
  });

  suggestionsList.style.display = "block";
}

// Search on Enter key
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch(this.value);
  }
});

// Show suggestions on input
searchInput.addEventListener("input", function () {
  const query = this.value;
  suggestionsList.innerHTML = "";

  if (query === "") {
    suggestionsList.style.display = "none";
    return;
  }

  const filteredTopics = topics.filter(topic => topic.name.toLowerCase().includes(query.toLowerCase()));

  if (filteredTopics.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No Topic found";
    li.style.color = "#999";
    li.style.cursor = "default";
    suggestionsList.appendChild(li);
  } else {
    filteredTopics.forEach(topic => {
      const li = document.createElement("li");
      li.textContent = topic.name;
      li.addEventListener("click", () => {
        window.location.href = topic.url;
      });
      suggestionsList.appendChild(li);
    });
  }

  suggestionsList.style.display = "block";
});


