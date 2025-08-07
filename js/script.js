// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Mock data for news (could be expanded)
const newsData = [
  {
    title: "2023 Convocation Ceremony",
    excerpt: "Join us on December 15th for our annual convocation...",
    image: "assets/campus.jpg"
  },
  // Add more news items
];