// Back to Top Button
const topBtn = document.getElementById("backToTop");

// 🔥 Always show button (for testing)
topBtn.style.display = "block";

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const searchInput = document.getElementById("heroSearchInput");
const suggestionsList = document.getElementById("heroSearchSuggestions");

// List of topics with page URLs
const topics = [
  { name: "Protect Your Data", url: "page1.html" },
  { name: "Recognize Online Scams", url: "page2.html" },
  { name: "Cyberbullying Awareness", url: "page3.html" },
];

// Show suggestions as user types
searchInput.addEventListener("input", function() {
  const query = this.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if(query === "") {
    suggestionsList.style.display = "none";
    return;
  }

  const filtered = topics.filter(topic => topic.name.toLowerCase().includes(query));

  if(filtered.length === 0) {
    suggestionsList.style.display = "none";
    return;
  }

  filtered.forEach(topic => {
    const li = document.createElement("li");
    li.textContent = topic.name;

    li.addEventListener("click", () => {
      window.location.href = topic.url; // redirect to page
    });

    suggestionsList.appendChild(li);
  });

  suggestionsList.style.display = "block";
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if(!searchInput.contains(e.target)) {
    suggestionsList.style.display = "none";
  }
});
