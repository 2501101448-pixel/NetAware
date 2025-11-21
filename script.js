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
  { name: "Tips", url: "tips.html" },
  { name: "Contact", url: "contact.html" },
  { name: "about", url: "about.html" },
  { name: "about", url: "aware.html" },
];

// Show suggestions as user types
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if (query === "") {
    suggestionsList.style.display = "none";
    return;
  }

  const filtered = topics.filter(topic => topic.name.toLowerCase().includes(query));

  if (filtered.length === 0) {
    suggestionsList.style.display = "none";
    return;
  }

  filtered.forEach(topic => {
    const li = document.createElement("li");
    li.textContent = topic.name;

    li.addEventListener("click", () => {
      window.location.href = topic.url;
    });

    suggestionsList.appendChild(li);
  });

  suggestionsList.style.display = "block";
});
