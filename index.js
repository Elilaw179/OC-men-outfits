document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navigations nav ul li").forEach((item) => {
    item.addEventListener("click", function () {
      const activeItem = document.querySelector(
        ".navigations nav ul li.active"
      );
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      this.classList.add("active");
      let targetPage = "";

      switch (this.textContent.trim().toLowerCase()) {
        case "home":
          targetPage = "index.html";
          break;
        case "clothes":
          targetPage = "clothes.html";
          break;
        case "shoes":
          targetPage = "shoes.html";
          break;
        case "accessories":
          targetPage = "accessories.html";
          break;
        case "about":
          targetPage = "details.html";
          break;
        default:
          targetPage = "index.html";
      }

      if (navigator.onLine) {
        if (targetPage) {
          showLoadingIndicator();
          setTimeout(() => {
            window.location.href = targetPage;
          }, 2000);
        }
      } else {
        showErrorMessage();
      }
    });
  });

  const year = new Date().getFullYear();
  const foot = document.getElementById("foot");
  const txt = "© SirLaw Limited. All Rights Reserved.";
  foot.innerHTML = `${year} ${txt}`;

  const images = [
    "vintage2.jpg",
    "shoe.jpg",
    "white suit.jpg",
    "Men-clothing-set-with-different.png",
    "vintage.png",
    "ita4.jpg",
    "sneak1.jpg",
    "shirts colors.jpeg",
    "p3.jpg"
  ];

  let currentIndex = 0;
  setInterval(() => {
    document.getElementById("img").src = `${
      images[++currentIndex % images.length]
    }`;
  }, 2000);




function createCard(imageSrc, text) {
 
  const card = document.createElement('div');
  card.className = 'card';

  const imgCard = document.createElement('div');
  imgCard.className = 'img-card';

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = 'clothes';

  const h5 = document.createElement('h5');
  h5.textContent = text;


  imgCard.appendChild(img);
  imgCard.appendChild(h5);
  card.appendChild(imgCard);

  return card;
}


const cardsContainer = document.getElementById('cards-container');


const cardData = [
  {
    imageSrc: 'sneak2.jpg',
    text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
  },
  {
    imageSrc: 'short upudown.jpg',
    text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
  },
  {
    imageSrc: 'belt1.jpg',
    text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
  },
  {
    imageSrc: 'suit4.jpg',
    text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
  },
  {
    imageSrc: 'twoshirts.jpg',
    text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
  },
  {
    imageSrc: 'flexsing tro.jpg',
    text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
  },
  {
    imageSrc: 'men clothes.jpg',
    text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
  },
  {
    imageSrc: 'https://tinyurl.com/3xmvpwf2',
    text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
  }
];


cardData.forEach(data => {
  const card = createCard(data.imageSrc, data.text);
  cardsContainer.appendChild(card);
});








  function showLoadingIndicator() {
    const loadingIndicator = document.querySelector(".loading-indicator");
    loadingIndicator.style.display = "block";
    document.body.classList.add("loading");
  }

  function showErrorMessage() {
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  }
});

let arrow = document.getElementById("arrow");
arrow.addEventListener("click", () => {
  window.location.href = "index.html";
});
