const articles = [

{
  title: "Ayurvedic Management of Acne Vulgaris",
  category: "Acne",
  author: "Upadhyay, Abhishek; Khanal, Hari; Joshi, Ram Kishor",
  description: "This case study demonstrates the potential and usefulness of Ayurveda in the management of acne vulgaris.(facial acne)",
  image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  link: "https://journals.lww.com/joay/fulltext/2021/15040/ayurvedic_management_of_acne_vulgaris.14.aspx2",
},

{
  title: "Ayurveda for Acne - 8 Ayurvedic Remedies",
  category: "Acne",
  author: "Sen Wellness Sanctuary - Sri Lanka",
  description: "This article describes 8 ayurvedic remedies for acne as well as ayurvedic herbs and diet recommendation to prevent acne",
  image: "https://www.senwellnesssanctuary.com/wp-content/uploads/2023/10/EFV-20210822-SEN-Welness-Sanctuary-2350.jpg.webp",
  link: "https://www.senwellnesssanctuary.com/ayurveda-for-acne",
},

{
  title: "5 Ayurvedic Solutions for Acne & Related Skin Concerns",
  category: "Acne",
  author: "Apollo Pharmacy",
  description: "Explore seven evidence-backed Ayurvedic solutions for acne, pigmentation, and clearer skin.",
  image: "https://images.apollo247.in/momandbaby/Adobe_Stock_1514072775_7cb476fc9a/Adobe_Stock_1514072775_7cb476fc9a.jpeg?tr=q-80,f-webp,w-800,dpr-2,c-at_max",
  link: "https://www.apollopharmacy.in/blogs/article/ayurvedic-solutions-for-acne?srsltid=AfmBOooat6n3K8ldB9q9WMRqVzhofxrrog7u4vErszduQdxxpeqTTE5M",
},

{
  title: "Ayurvedic Home Remedies For Acne",
  category: "Acne",
  author: "Birla Ayurveda",
  description: "Here are some Ayurvedic home remedies for acne that may help you to treat acne better.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ogpUVo5dN8eAYp8kXFTp-njSzwQfivU80g&s",
  link: "https://birlaayurveda.co.in/ayurvedic-home-remedies-for-acne/?srsltid=AfmBOor8istPsfxgTYNkY4JqRBQYs4ytXaWmoDhOs96euaazZxD2JFMt",
},

{
  title: "Top 10 Ayurvedic Remedies for Stress Relief",
  category: "Stress",
  author: "Sir Ganga Ram Hospitals",
  description: "Ashwagandha and Ayurvedic herbs help reduce stress and anxiety naturally.",
  image: "https://sgrh.com/assets/img/uploads/17430614042.jpeg",
  link: "https://sgrh.com/blog/top-10-ayurvedic-remedies-for-stress-relief-",
},

{
  title: "STRESS – MANAGEMENT : LEADS FROM AYURVEDA",
  category: "Stress",
  author: "D Arora",
  description: "The role of stress in several diseases is recognized in Ayurveda and modern medicine.",
  image: "https://cdn.ncbi.nlm.nih.gov/pmc/banners/logo-ancscilife.gif",
  link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3330949/",
},

{
  title: "5 Homemade Ayurvedic Tonics That Help Calm Your Stomach ASAP",
  category: "Digestion",
  author: "Healthline",
  description: "Ayurvedic kitchen remedies for indigestion, bloating and acidity.",
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  link: "https://www.healthline.com/health/food-nutrition/ayurvedic-tonics-stomach-disorder",
},

{
  title: "Home Remedies for Sleep: Ayurvedic Ways to Beat Sleeplessness Naturally",
  category: "Sleep",
  author: "Nisarga Herbs",
  description: "Discover Ayurvedic home remedies for sleep and sleeplessness.",
  image: "https://www.nisargaherbs.com/cdn/shop/articles/Sleeplessness_0f27c68b-d8cd-4857-8f84-c980b4d4d438.jpg?v=1771916818&width=1600",
  link: "https://www.nisargaherbs.com/blogs/all/home-remedies-for-sleep-ayurvedic-ways-to-beat-sleeplessness-naturally?srsltid=AfmBOop4WR98I30NhyD1o9OsRDElgPDo_1xCHFVgPnE9rHkrn0s7VAJK",
},

{
  title: "Ayurvedic Treatment for Hair Fall",
  category: "Hair Fall",
  author: "Niramaya Ayurvedic Hospital",
  description: "Warm herbal oils like Bhringraj and Brahmi help reduce hair fall.",
  image: "https://niramayayurveda.com/wp-content/uploads/2025/11/best-Ayurvedic-Doctor-in-Surat.jpg",
  link: "https://niramayayurveda.com/ayurvedic-treatment-for-hair-fall-causes-tips-home-remedies-for-hairfall-prevention/",
}

];

const container = document.getElementById("articlesContainer");

let bookmarkedArticles =
JSON.parse(localStorage.getItem("bookmarks")) || [];

function displayArticles(filteredArticles){

  container.innerHTML = "";

  filteredArticles.forEach(article=>{

    const isBookmarked =
    bookmarkedArticles.includes(article.title);

    container.innerHTML += `

    <div class="article-card">

      <div class="bookmark ${isBookmarked ? 'bookmarked' : ''}"
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

        </div>

        <button
        class="read-btn"
        onclick="window.open('${article.link}','_blank')">

        Read More

        </button>

      </div>

    </div>

    `;
  });
}

function filterArticles(){

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
}

document.getElementById("searchBtn")
.addEventListener("click",filterArticles);

document.getElementById("categoryFilter")
.addEventListener("change",filterArticles);

function toggleBookmark(title){

  if(bookmarkedArticles.includes(title)){

    bookmarkedArticles =
    bookmarkedArticles.filter(item => item !== title);

  }else{

    bookmarkedArticles.push(title);
  }

  localStorage.setItem(
  "bookmarks",
  JSON.stringify(bookmarkedArticles)
  );

  updateBookmarks();

  filterArticles();
}

function updateBookmarks(){

  const dropdown =
  document.getElementById("bookmarkDropdown");

  dropdown.innerHTML = "";

  if(bookmarkedArticles.length === 0){

    dropdown.innerHTML =
    "<p>No bookmarked articles</p>";

    return;
  }

  bookmarkedArticles.forEach(title=>{

    const item =
    document.createElement("div");

    item.className = "bookmark-item";

    item.innerText = title;

    item.onclick = ()=>{

      const article =
      articles.find(a => a.title === title);

      window.open(article.link,"_blank");
    };

    dropdown.appendChild(item);
  });
}

document.getElementById("bookmarkBtn")
.addEventListener("click",()=>{

  document.getElementById("bookmarkDropdown")
  .classList.toggle("hidden");
});

displayArticles(articles);

updateBookmarks();