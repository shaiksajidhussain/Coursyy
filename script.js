  // Function to repeat the HTML structure
  function repeatCardStructure(cardData) {
    // Reference to the container where cards will be appended
    const container = document.querySelector('.premium');

    cardData.forEach(data => {
      // Create a new div with the "card" structure
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
      cardDiv.style.width = '18rem';

      // Create an image element
      const img = document.createElement('img');
      img.src = data.imageSrc;
      img.classList.add('card-img-top');
      img.alt = '...';

      // Create a div for the card body
      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.classList.add('card-body');

      // Create card title
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = data.title || 'Default Title';

      // Create card duration text
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = 'Duration: ' + data.durationText;

      // Create "Watch now" button
      const watchNowBtn = document.createElement('a');
      watchNowBtn.href = '#';
      watchNowBtn.classList.add('btn', 'btn-success');
      watchNowBtn.textContent = 'Watch now';

      // Append elements to the card body
      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(cardText);
      cardBodyDiv.appendChild(watchNowBtn);

      // Append elements to the card
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);

      // Append the card to the container
      container.appendChild(cardDiv);
    });
  }

  // Call the function with an array of card data
  const cardData = [
    { title: 'Java Full Course', imageSrc: 'https://s3-alpha-sig.figma.com/img/0d4d/c37c/d8b787d0731b1bca638a4f34b351b0ce?Expires=1704067200&Signature=o6UqmczAMjV5XkIE8xUrTD1P1Xo2mLbRMmYdEu5CgOehZSn7n9lFxFfEV8kCqVKDlBSHTjmVjhJ9djVfCVLep0nFwoj8wzhhQ0gR01xdyCIwS7Wq8lxHUqi4w8NYK9FWD27uHqZajzhtt75yqtEGgloJpw6-55SDQnsbLD-MnkLD-aTQwHePWJXhM~lBOun4OKQ6z-wmM1Cz0EJEz7-Rx2WXkB3qXqr6SzbZCk54kEkPvnm3lw90WU~AydK5e6TWkxcZC3yKlzWXYov3Y0weE5RCiKy3cN7GD1XnsWD3MP77lpE5EVACPDUS62oah8ckJZeI7jDTdnk4EmuuWvnSuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '113 Videos' },
    { title: 'Machine Learning', imageSrc: 'https://s3-alpha-sig.figma.com/img/4e47/ae4e/e188fc307b92bb73eee5d600625d785e?Expires=1704067200&Signature=jK0MHTQNXRW16XknwS1w53KMBo2LlxQhc1Mi9EFvyJstswaGh5zB8asPSHNevFvYEhesI-mcfHsYSADPNoI~1ygacunKYd-ztSVv3eHKkHcisdgt9L8CA-HUx2IhuDbGAAqkwCtDS72eJTnCK~7ewA3YYwqIcszf7OM72UM5q9HPapzgvjDm~swodlDmSrYzqdr0zQX1Dnf8Pp5mjBC0qT62m5hQ8alvVGcnew9xLDj3uZCBWEq9WRmlgfGFrSG5A~Y2-xpHTnOzMlbx9MqRgKKQHRptCtptl4TLiKwj26XD-IbGGAZzD7FNUVhnYhlikwjOOmSuq11lBm-XtouWPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '6 Hours' },
    { title: 'Figma in Hindi', imageSrc: 'https://s3-alpha-sig.figma.com/img/212c/30c0/1b73d92b29cb5a5c8b8512f7a2dd8a18?Expires=1704067200&Signature=fadJZ5cZhAvmGWrn9pcvVnqnQG6t73jN7FqmGhlbObXYauP0RrXeYHzvC6amvw8O~hpzbDqk5PjPDKfG7tU6rcA7x4o-J0I7ljVTYJaWJ66Bwouz2v8whGpGok8uqexFDhGPCBLOkSwr4n0wlTLIp0cLpkpjq3ZKsz5EfaZzP85xev86~jhnZxu3pfBfnDr8XXPLklGCZ2OvJR-vuO28Ifjku-yGYYwd0M0LAVfmnBLazoWvzuy9bkEQWcOIi3e719J~7ZcxyPDNhkjIM7TNrm3PQ8xeg8U9y5-0yDEfgqTEaL2ukTwoDPHK5hn0G25ZGxOVh1gU2cYKq4J-cKL2ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '13 videos' },
    { title: 'Title 5', imageSrc: 'https://example.com/image3.jpg', durationText: '50 Videos' },
  ];

  repeatCardStructure(cardData);