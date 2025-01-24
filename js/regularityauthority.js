    const cardSlider = document.querySelector('.card-slider');
    const leftNav = document.querySelector('.left-nav');
    const rightNav = document.querySelector('.right-nav');
    let currentIndex = 0;
    let autoPlayInterval;
    let cardWidth = 0;

    // Fetch data and populate the slider with infinite scrolling
    fetch('./json/Regulatory-Authorities.json')
        .then((response) => response.json())
        .then((data) => {
        // Add original cards
        data.forEach((item) => {
            const card = createCard(item);
            cardSlider.appendChild(card);
        });

    // Get all the cards
    const cards = document.querySelectorAll('.schemes-card');
    cardWidth = cards[0].offsetWidth + 10; // Calculate card width including the gap

    // Clone first few and last few cards for infinite scrolling
    const clonesBefore = Array.from(cards)
    .slice(-2)
            .map((card) => card.cloneNode(true)); // Clone last 2 cards
    const clonesAfter = Array.from(cards)
    .slice(0, 2)
            .map((card) => card.cloneNode(true)); // Clone first 2 cards

          // Append the cloned cards to make the loop
          clonesBefore.forEach((clone) => cardSlider.prepend(clone));
          clonesAfter.forEach((clone) => cardSlider.appendChild(clone));

    // Set initial position to the first cloned card
    currentIndex = clonesBefore.length; // Start from the first original card

    // Position the slider to the correct start
    updateSlider(false);

    // Start autoplay
    startAutoPlay();
        })
        .catch((error) => console.error('Error fetching data:', error));

    function createCard(item) {
        const card = document.createElement('div');
    card.className = 'schemes-card';
    card.innerHTML = `
    <div class="scheme-logo"><img src="${item.img_url}" alt="${item.name}"></div>
    <p>${item.name}</p>
    <p class="caption">${item.title}</p>
    <button class="schemes-card-btn">Read More</button>
    `;
    return card;
      }

    function updateSlider(smooth = true) {
        if (!smooth) {
        cardSlider.style.transition = 'none';
        } else {
        cardSlider.style.transition = 'transform 0.5s ease';
        }
    cardSlider.style.transform = `translateX(-${
        currentIndex * cardWidth
    }px)`;

    // If the slider reaches the last clone, jump to the first original card
    const totalCards = document.querySelectorAll('.schemes-card').length;
    if (currentIndex === totalCards - 2) {
        currentIndex = 2;
          setTimeout(() => updateSlider(false), 500); // Reset instantly after animation
        } else if (currentIndex === 0) {
        currentIndex = totalCards - 4;
          setTimeout(() => updateSlider(false), 500); // Reset instantly after animation
        }
      }

      // Handle navigation
      leftNav.addEventListener('click', () => {
        currentIndex--;
    updateSlider();
      });

      rightNav.addEventListener('click', () => {
        currentIndex++;
    updateSlider();
      });

    // Autoplay functionality
    function startAutoPlay() {
        stopAutoPlay(); // Ensure no multiple intervals
        autoPlayInterval = setInterval(() => {
        currentIndex++;
    updateSlider();
        }, 3000); // Change every 3 seconds
      }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
      }

    // Pause autoplay on hover
    cardSlider.addEventListener('mouseover', stopAutoPlay);
    cardSlider.addEventListener('mouseout', startAutoPlay);