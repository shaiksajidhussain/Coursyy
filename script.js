function repeatCardStructure(cardData) {
    const container = document.querySelector('.premium');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    // Shuffle the array randomly
    const shuffledCardData = shuffleArray(cardData);
  
    function filterCards(keyword) {
      const filteredData = shuffledCardData.filter(data => {
        // You can customize this condition based on your search requirements
        return data.title.toLowerCase().includes(keyword.toLowerCase());
      });
  
      // Clear existing cards in the container
      container.innerHTML = '';
  
      // Create and append filtered cards
      filteredData.forEach(data => {
        // Create a new div with the "card" structure
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.width = '18rem';
  
        // ... (rest of your card creation code)
  
        // Append the card to the container
        container.appendChild(cardDiv);
      });
    }
  
    // Event listener for the search button
    searchButton.addEventListener('click', function () {
      const keyword = searchInput.value.trim();
      filterCards(keyword);
    });
  
    // Initial rendering
    filterCards('');
  }
  
function repeatCardStructure(cardData) {
    const container = document.querySelector('.premium');
    // Shuffle the array randomly
    const shuffledCardData = shuffleArray(cardData);

    shuffledCardData.forEach(data => {
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

  function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  // Call the function with an array of card data
  const cardData = [
    { title: 'Java Full Course', imageSrc: 'https://s3-alpha-sig.figma.com/img/0d4d/c37c/d8b787d0731b1bca638a4f34b351b0ce?Expires=1704067200&Signature=o6UqmczAMjV5XkIE8xUrTD1P1Xo2mLbRMmYdEu5CgOehZSn7n9lFxFfEV8kCqVKDlBSHTjmVjhJ9djVfCVLep0nFwoj8wzhhQ0gR01xdyCIwS7Wq8lxHUqi4w8NYK9FWD27uHqZajzhtt75yqtEGgloJpw6-55SDQnsbLD-MnkLD-aTQwHePWJXhM~lBOun4OKQ6z-wmM1Cz0EJEz7-Rx2WXkB3qXqr6SzbZCk54kEkPvnm3lw90WU~AydK5e6TWkxcZC3yKlzWXYov3Y0weE5RCiKy3cN7GD1XnsWD3MP77lpE5EVACPDUS62oah8ckJZeI7jDTdnk4EmuuWvnSuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '113 Videos' },
    { title: 'Machine Learning', imageSrc: 'https://s3-alpha-sig.figma.com/img/4e47/ae4e/e188fc307b92bb73eee5d600625d785e?Expires=1704067200&Signature=jK0MHTQNXRW16XknwS1w53KMBo2LlxQhc1Mi9EFvyJstswaGh5zB8asPSHNevFvYEhesI-mcfHsYSADPNoI~1ygacunKYd-ztSVv3eHKkHcisdgt9L8CA-HUx2IhuDbGAAqkwCtDS72eJTnCK~7ewA3YYwqIcszf7OM72UM5q9HPapzgvjDm~swodlDmSrYzqdr0zQX1Dnf8Pp5mjBC0qT62m5hQ8alvVGcnew9xLDj3uZCBWEq9WRmlgfGFrSG5A~Y2-xpHTnOzMlbx9MqRgKKQHRptCtptl4TLiKwj26XD-IbGGAZzD7FNUVhnYhlikwjOOmSuq11lBm-XtouWPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '6 Hours' },
    { title: 'Figma in Hindi', imageSrc: 'https://s3-alpha-sig.figma.com/img/212c/30c0/1b73d92b29cb5a5c8b8512f7a2dd8a18?Expires=1704067200&Signature=fadJZ5cZhAvmGWrn9pcvVnqnQG6t73jN7FqmGhlbObXYauP0RrXeYHzvC6amvw8O~hpzbDqk5PjPDKfG7tU6rcA7x4o-J0I7ljVTYJaWJ66Bwouz2v8whGpGok8uqexFDhGPCBLOkSwr4n0wlTLIp0cLpkpjq3ZKsz5EfaZzP85xev86~jhnZxu3pfBfnDr8XXPLklGCZ2OvJR-vuO28Ifjku-yGYYwd0M0LAVfmnBLazoWvzuy9bkEQWcOIi3e719J~7ZcxyPDNhkjIM7TNrm3PQ8xeg8U9y5-0yDEfgqTEaL2ukTwoDPHK5hn0G25ZGxOVh1gU2cYKq4J-cKL2ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '13 videos' },
    { title: 'Java in one video', imageSrc: 'https://s3-alpha-sig.figma.com/img/8fde/2ebd/62018b8f6be1bffbae6fdcb8d0a6affd?Expires=1704067200&Signature=Ye1HV0LcwHan8-XOSUKCYgfsBU38p0Tl7eA-DMbDprr-l9ZlnXnqlhwAU~VdRqTGlXvooYoCe0N~ZmteEohDPH4evY5lyCmn~AJFE10vBMlx5KqrZgm5UJJwG1nahdlIj8wDkkvhBbzmEyjlTsLjwhDdkW4VZneQma8hjI28J8nKqnHurJpnAoVoqhS5z48egnEcgSiMMTu63BzAjENdaPLmvRgNLdlT83cY7bGrxQXZt-6lLEb9YrlJ8uhaI5y3sjbKPZbUDNVUaFoLhfK83iAKXbrOu3CHGkihz8c2OL8MWzJ5IhdzlrvWG4xi3LxaG2z~3EeMw1CVlnr1IVmNTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '12 Hours' },
    { title: 'Spring Boot + Postman', imageSrc: 'https://s3-alpha-sig.figma.com/img/62a0/8b58/7cc97a7f34a950f49d77a5fb555175ab?Expires=1704067200&Signature=Ezn9l76Epfu4iTmgjpQHF3Q-qn6vwnmdc2BNDM7cyZ4eZ7drH5-WtH2ZpnF-I8lqTrmSn1cP5q1CFj1UWetaQlyukjAQs~1~ShEvmiGGbrF~~xGRxErKptBbFO2tcDnWsMjyTaTbkHXQB5HYRkDxmWJBN1F0MFXQg2fmn6qeGBDz~i6zTzaAzIuq7NX5LDvajtEabHxmsyiN2hjJ0sad7yKlMpR9pEEaqNIw7bL~pT5kGjEBQv~c2y3ZYC51jyNMsOID~5-S2YGkMJU3qzBVEnCIwzsWM3mnnAPm5q7Q4Wbm5u1NVJ6O4q0IBFsces-i-hQfX9C2oo~7bVQMBtuMHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '5 Hours' },
    { title: 'Complete Sql', imageSrc: 'https://s3-alpha-sig.figma.com/img/9e9b/76f7/76388d66b17c241fff87f884c7111e47?Expires=1704067200&Signature=B8A9ZJPJw8mSai7wSQYp835IzAMNfRlFNwJhHFVzfEC1VGlpUnJm2iaR4aQMjNFiy7B52HKpKvj~SDCtN1gyEYuFZ1XNLMzfemGPSGPQoZBVP8bHH79LF43yTR0tvHSiQIUQL6QnDMKBT3YR2vq4L-L7iTw8h7W1Wv5fH83qrsmQOMXL6IOMEBfKAyA8SEKn4ksl1uDP5LSVcqBAnqVQbVd4~YsWo~2t1o6sLFqfemh8C3QMpE27Y95xua3ky8IfPehj7hC08qn2ojV0SNzXaksaCYF~u~Dt1aAlycrCg67RrTuZM5~ZDxJhnKVIVx8GRzIeuuUHt~Pg8vawx38hyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '3 Hours' },
    { title: 'PHP in One Video', imageSrc: 'https://s3-alpha-sig.figma.com/img/b4d0/9e1e/063d5d2d5867493b2b8bb9bf7851cc50?Expires=1704067200&Signature=eYACx2unTO5ySzsbQLG3XH-D2GxzkEWViJ106nbj-b0H~GzdpfocPpBqoowRSALHlO3tq3jMES3Mttk3VbcRlhEIWIoJ9p9I-mtWX1~PFGERCjUW~xhLW7B09exTQiIlFU1qGDyd-MkTvNYAPnuTkg2UmmOxbEEJsManvuZLOnqy4cxLO7b7mv3ZwvkcJ6qusmcUZ0tcNI~6~f96SqlRwVtL57R5wGoZsB4DW-Xw43JG3NBrELrAnVtpzxRQp9udQTLEmnOFqpianZ3iNnxtj3INV50bEzgVcTmq7Lp9c6BOS4c-GV~E501P3DXpVxFc9e5Yjt3Y2Tk6glfEQs6mnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '3 Hours' },
    { title: 'Web Development', imageSrc: 'https://s3-alpha-sig.figma.com/img/1219/1417/257cce8d0441340635ae2301152cf0a9?Expires=1704067200&Signature=k300JRsgeIFM-i2EiuafQaW0IB8EhEmE6O2guAHXJQbvqdeSbliMUe5r0Nv0VYQuCUmd4r1afQz8SnFxmsc4IPL5TO59y1plChdMhEMXzX2ggXch2aZorgH-bvNVSHUNrUDVTa8MX~uVnanP2xLWYPDxuDkeD826wm-0wA2rV1VIUVMY6Sn5ZGqjcu0Ct5yvnH~770UiahUq-BQcadsCdIU5okrbHEzrHZREgguHOm~gZpbHs7yPWzza65E5TeiO6dmPciEZnZtOjKJ1AUHV4mcykBvZsexYAJlMGz4UmnPRxPqShlvR8qBx3zBGV8Jvymty7y-OukrVwHDVzNgCCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '58 Videos' },
    { title: 'Git and Github', imageSrc: 'https://s3-alpha-sig.figma.com/img/68a1/f0d8/918dbe732bf53ade44a885253ab4c57a?Expires=1704067200&Signature=ZQ0f363edlGHhhXu5M6koqo8UuNG4sJdJnGXLNvYJLjto3jl8dKZZOsQtY9VJCv3VNkIsSFu2Rl7tnhmn1St-usvCg33jVOrwMNRB0HexrbHiz4~ZCyHLhSDaVrGJilNXFuUzZrKlcbHgE93pDkhvVgb~4G0flB12dYJ8ZA7B9OSFaUwDHg3rnOo5boNFKuXwLL8D66wdHEtXaOpA6VX6C6xlAM2U~k49KpSXajsZIwd4RheKpgeUHwE3cjHhpdvvdnZz~h6fBiGXnaFdG-A4dnZGKQoIl9BMjeDqxsBql4vMEeQMgNyZcuid2r9aXQ5eI-Cq22NTAKsQt8NxoIp2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '1 Hours 15 mins' },
    { title: 'AWS', imageSrc: 'https://s3-alpha-sig.figma.com/img/1d12/2761/0fac50a3f7fc3b878030ea9fdbb350ec?Expires=1704067200&Signature=AjEk6cTBohsk9gxFWVGSwGw46JBKzIGvjMCLaZ-8Jv9PiLPfz60XwiUoqbukHvVBmAzgsuOJeFX8Cfmf57UlMTs-58XUAAseWyFwFDcGJgRDDJI3Vapt-CFgu4PVxgk3iLjbsBQVeH0~5HV7PsulN9kLmMMvEh6ZDsQZsASD~KyN9xtPSYg6VJ2Sw0n-Beng60~KiXgI-SSClShU~U-O9QRFmWghZHXCv1P87TSBfOrEFPnXO9F5yflpoiFeCAZ9AaA4sGvtAeVfVa-0dpyElhdAwxi4QJR8HDm6nDOW~OWRzKJVyZ-TzjcoCGosasAkTQz62DS~IerCEQRTVY-44A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '10 Hours' },
    { title: 'AWS In Telugu', imageSrc: 'https://s3-alpha-sig.figma.com/img/374c/b129/5cd3949cba04b35e8041adc0b5f6a7fb?Expires=1704067200&Signature=Qut9pCJwLsIKOO0-rVZHwbdAH4OryPNICUftfs7JyrRgwCTv3rtv1FmAAsWlaVIR7E3MiT6ygL9szDd~19oL-7OmQFT2fdrUnexF4JnHBA9JVss4QUFs2XgNdwV3CaiKTNDcAkS2fvwfZKXQhL0s4QIHMXCubey-UvBriXmKHa94MLRiTu~VuyCiGHfeRF2~X9-WAlVEARRebSsfAF8TAfkEcmqfPOTtmKaAFruqeD1Qpq00n54j2KSIZX98pbl4tqz9INsd-c~~bf-JNGzmcC9V-514pan5nEAFebH9Jp4AjosywEG0KAWyCQIePDM-7IzUXQI3LzhlotITFbpMyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '10 Hours' },
    { title: 'Spring Security', imageSrc: 'https://s3-alpha-sig.figma.com/img/671b/9ae5/c2a304849779d08538b3fcdf6a63bb80?Expires=1704067200&Signature=ht7nHKS8IC-POwxRhM2toY6mEtg6A7rqwRFvvz4rIZPqxQt6UwRUKY8ndbIxM4lfmZKRpIX24U1jiMJ7rVslTTWpVj4mH8ctAfxgTKhkdyMECshwibt1KB-Do4eu8GyDqKgI62pnciPG8Yh7JQXaOqtQvMqpCg8ptkYJ0uSMSh4~xUHL3NBOanEGbECCZ0NuLPnOF-wo4L4m0J1fsYwbMdhR-UM1tiqyVDddIs9gU2-W5of0TMGFd51T07qJUo2wZYwtq3NvdA13A5f8ZJzA9YlEI-PBH6fRsYJewbf0sme0TTEZ~JVSQkoCe6S8VUTMtVP-WUK9tWJrcxS3gz4Nxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '4 Hours' },
    { title: 'Servlets', imageSrc: 'https://s3-alpha-sig.figma.com/img/cdab/b027/e6637949e00af4178a06c931be6504d9?Expires=1704067200&Signature=CsbOEyJYvTJdd3AXr7FjBz~ybHvt8KDVCSn3jAYNPC6m6DhdGDehftyBFzAjARyWpW7M6IHlBCtXGI9AD6KnGkNyhDLRY6PFwcvyzHrw0QrwEC6nn91UKXcIkJJ7ZS6tjo7xEJvCH6WyDg76gIkSzMu3zFBNWgL5CA7zSb3u3SyYnIaRVprTzPrhLxsUalMGnc8asi6kB-yg3ZMQ-khsjpvVxViB1i2aNJJta2YvSnduP9UtfNewl27M-dJd9NP6stvQ-rnS2o9EApzcJ4S6xXOPl9yZxBDRh6YWhKSD5kHnozxvpDJ4Mi--IxHCsQbzicJJ~fUPHWRlTywkIXBOww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '77 Videos' },
    { title: 'HTML', imageSrc: 'https://s3-alpha-sig.figma.com/img/6647/298e/95e560cfd37017caeaa4561d1371cb18?Expires=1704067200&Signature=dse4ZIgw6kAezijVufs7C4JOHmQlJmDidPXkyE~QISifnOEs1MhB-Lf8cTj~o7b8JlnA3c-0xZ~XV~MRwZ4rJxhRAN4zKwvbCDMtqVBsvLwsx7kUUW9VHd32skUk~LjYdGUESm7q0EMdHSF5RmB-b8sx~qgSQlSkWcHi80hA1oKquV7jShro8t9842ElFBJyouv4~dkaZda6Cgxb5Lv7yvGrsLKDkZ3uAk9WDdRaP7y6CISmnuALXLmQk7d70KRrKBX8UtLQiLlMxj43QWHTxE1pgmaZhpVIk0jyjXScUsMVMOq3p784Z4ez-dNOhzi~bh5fn--~j4O19vzArEU4TQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '5 Hours' },
    { title: 'React JS', imageSrc: 'https://s3-alpha-sig.figma.com/img/9de1/1b9b/e578d5f0afa069fe27545e6ac6aca7b9?Expires=1704067200&Signature=eNDrdltWsGW72hhtphiQf5z6QW5tcYkqFS5geN7z3nWbhW9EaS4BbYgYrr7-CSENc0VANztE8nDP49ZYk3ccfUTXT0AMhtL5dIIF8akyC6ac0iPce3qhmscqA68s40vrov7om2DHTv0rpN0uOe8cT3pvSiau3X56TYledslAOgXllP2CBFIROSONfpcHFMXAwDfS1TAdNwuNCknbws7l~shHGc0SGD-UQDWvJ6joVVl2dUwjvtQomBwbnSgJb7DZFt7e~0kbRrwKkAUGGemreiMIr-Lm4u~TztcDfm4GdLL6ZaSLO-SlNa0AuqypFC6yPsMw1z9K~K3XPDJTny9JJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', durationText: '78 Videos' },
  ];

  repeatCardStructure(cardData);



  //This is till repeating the card structure ends