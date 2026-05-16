const articles = [

{
  title: "Ayurvedic Remedies for Acne",
  category: "Acne",
  author: "Kerala Ayurveda",
  description: "Natural Ayurvedic methods to reduce acne and balance skin health.",
  image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  link: "https://www.healthline.com/health/beauty-skin-care/ayurvedic-treatment-for-pimples",
  engagement: 98
},

{
  title: "Managing Stress with Ayurveda",
  category: "Stress",
  author: "Banyan Botanicals",
  description: "Learn how Ayurvedic herbs and lifestyle changes reduce stress naturally.",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  link: "https://www.banyanbotanicals.com/blogs/wellness/ayurveda-and-stress",
  engagement: 95
},

{
  title: "Ayurvedic Digestion Guide",
  category: "Digestion",
  author: "Organic India",
  description: "Understand digestion according to Ayurveda and improve gut health.",
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  link: "https://www.artofliving.org/in-en/ayurveda/ayurvedic-diet-for-good-digestion",
  engagement: 93
},

{
  title: "Natural Sleep Improvement",
  category: "Sleep",
  author: "Healthline Ayurveda",
  description: "Ayurvedic practices and herbs for better sleep and mental calmness.",
  image: "https://images.unsplash.com/photo-1455642305367-68834a7cbde0",
  link: "https://www.healthline.com/health/ayurvedic-treatment-for-insomnia",
  engagement: 91
},

{
  title: "Ayurvedic Hair Fall Solutions",
  category: "Hair Fall",
  author: "Kama Ayurveda",
  description: "Traditional Ayurvedic oils and remedies to reduce hair fall naturally.",
  image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
  link: "https://www.kamaayurveda.com/blog/ayurvedic-remedies-for-hair-fall.html",
  engagement: 89
}

];

const container = document.getElementById("articlesContainer");

function displayArticles(filteredArticles){

  container.innerHTML = "";

  filteredArticles
  .sort((a,b)=>b.engagement-a.engagement)

  .forEach(article=>{

    const isBookmarked =
      localStorage.getItem(article.title);

    container.innerHTML += `

      <div class="article-card">

        <div class="bookmark ${isBookmarked ? "bookmarked" : ""}"
        onclick="toggleBookmark('${article.title}')">

        ★

        </div>

        <img src="${article.image}">

        <div class="article-content">

          <div class="article-title">
            ${article.title}
          </div>

          <div class="article-desc">
            ${article.description}
          </div>

          <div class="article-meta">

            👨‍⚕️ ${article.author}
            <br><br>

            📚 Category: ${article.category}
            <br><br>

            🔥 Popularity Score: ${article.engagement}

          </div>

          <button
          class="read-btn"
          onclick="window.open('${article.link}')">

          Read More

          </button>

        </div>

      </div>

    `;
  });

}

displayArticles(articles);

document.getElementById("searchBtn")
.addEventListener("click",()=>{

  const search =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const category =
    document.getElementById("categoryFilter")
    .value;

  const filtered = articles.filter(article=>{

    const matchesSearch =
      article.title.toLowerCase().includes(search)
      ||
      article.description.toLowerCase().includes(search)
      ||
      article.category.toLowerCase().includes(search);

    const matchesCategory =
      category === "all"
      ||
      article.category === category;

    return matchesSearch && matchesCategory;

  });

  displayArticles(filtered);

});

function toggleBookmark(title){

  if(localStorage.getItem(title)){

    localStorage.removeItem(title);

  }

  else{

    localStorage.setItem(title,true);

  }

  displayArticles(articles);

}