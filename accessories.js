
    
  
  
 
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
      imageSrc: 'https://tinyurl.com/bddbensv',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/37eurcxw',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/yvjvandb',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/2a9xjtta',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/2jrv9chh',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/yc8nfuhw',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/2zt6cz5x',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/4ceue7r8',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/mxh26w3u',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/36tb287w',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/2cye5e2d',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/3y2btey7',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/2svfm4m2',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/2cfbttuv',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/4anebdpt',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/4vxa575u',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/bdeevtux',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/ydrat4d8',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/5axpcvcj',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/cn6f6cj2',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/4be8s44v',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/y84r5kzr',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/3atb92tc',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/6zypnftr',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/37eurcxw',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/46kvp6zk',
      text: 'Discover a wide selection of men\'s clothing, featuring styles for every occasion'
    },
    
  ];
  
  cardData.forEach(data => {
    const card = createCard(data.imageSrc, data.text);
    cardsContainer.appendChild(card);
  });


  
  let arrow = document.getElementById("arrow");
  arrow.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  