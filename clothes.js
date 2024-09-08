
    
  
  
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
      imageSrc: 'https://tinyurl.com/3x3d4x4c',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'short upudown.jpg',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/k6rss42t',
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
      imageSrc: 'https://tinyurl.com/4raybwc8',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/yn5c83du',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/3kk54j9k',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/bdhpb53b',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/3kk5j92u',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/y299bkth',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/bp8efd2d',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/3y82x7pp',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/4yjx38pu',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    }
  ];
  
  cardData.forEach(data => {
    const card = createCard(data.imageSrc, data.text);
    cardsContainer.appendChild(card);
  });


  
  let arrow = document.getElementById("arrow");
  arrow.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  