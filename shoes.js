
    
  
  

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
      imageSrc: 'https://tinyurl.com/ycxvzjf5',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/pzfs5dsj',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/2fnmr4t5',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/3w2jthw8',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/5n9xd3fx',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/22s863j9',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/25dhy5nn',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/mruyzud8',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/bdeypx3a',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/9fhb3b25',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/45fjsy6e',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/yc5dmnwh',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/2tmfkbuk',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/3rmp78hj',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/ytwyj2tr',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/42andnm6',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/2fytcuws',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/48k2jtzw',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/shkcdayb',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
   
    {
      imageSrc: 'https://tinyurl.com/5cucavmh',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/3fus9ph6',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/c48m6sae',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/4nbw8mwd',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
    },
    {
      imageSrc: 'https://tinyurl.com/d2pwpjs3',
      text: 'Discover a wide selection of men\'s shoes, featuring styles for every occasion'
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
  