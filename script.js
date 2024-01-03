function repeatCardStructure(courseData) {
  const container = document.getElementById('premiumContainer');

  const shuffledCourseData = shuffleArray(courseData);

  function createCard(data) {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
      cardDiv.style.width = '18rem';

      const img = document.createElement('img');
      img.src = data.imageSrc;
      img.classList.add('card-img-top');
      img.alt = '...';

      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.classList.add('card-body');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = data.title || 'Default Title';

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = 'Duration: ' + data.durationText;

      const watchNowBtn = document.createElement('a');
      watchNowBtn.href = data.watchNowLink || '#';  
      watchNowBtn.classList.add('btn', 'btn-success');
      watchNowBtn.textContent = 'Watch now';
      watchNowBtn.target = '_blank';

      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(cardText);
      cardBodyDiv.appendChild(watchNowBtn);

      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);

      container.appendChild(cardDiv);
  }

  shuffledCourseData.forEach(createCard);
}

function shuffleArray(array) {
 
  return array; 
}

const courseData = [
  { title: 'Python Full Course Beginners', imageSrc: 'https://i.ytimg.com/vi/7wnove7K-ZQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBHP0XaWCWf6WLftS6hJhmoD3aMEw', durationText: '100 Videos', watchNowLink: 'https://youtu.be/7wnove7K-ZQ?si=rAqmjf0-JcrRvJBU' },
  { title: 'Python Full Course in English', imageSrc:'https://i.ytimg.com/vi/QXeEoD0pB3E/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDFfxTTv31qjpdalu6WVYgDswHgcg',  durationText: '110 Videos', watchNowLink: 'https://youtu.be/QXeEoD0pB3E?si=abqbDuKcGDhbEAyY' },
  { title: 'Python Full Course in Telugu', imageSrc:'https://i.ytimg.com/an_webp/h1WdbfoHeac/mqdefault_6s.webp?du=3000&sqp=CM6s1KwG&rs=AOn4CLBw-efzq1za4Rt7jBzUJnhDz4PZZg',  durationText: '10 Hours', watchNowLink: 'https://youtu.be/h1WdbfoHeac?si=0FM4Zpd8ys8inf9C' },
];

repeatCardStructure(courseData);