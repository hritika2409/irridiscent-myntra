document.addEventListener('DOMContentLoaded', () => {
    const buyOutfitBoxBtn = document.getElementById('buyOutfitBoxBtn');
    const moreMinisBtn = document.getElementById('moreMinisBtn');

    buyOutfitBoxBtn.addEventListener('click', () => {
        alert('Outfit box added to cart!');
    });

    moreMinisBtn.addEventListener('click', () => {
        alert('Loading more minis...');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let index = 0;
  
    setInterval(function() {
      index = (index + 1) % totalImages;
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }, 5000); // Change image every 5 seconds (adjust as needed)
  });

  // Function to create a new mini element with text and image
function createMini(miniText, imageUrl) {
    var miniElement = document.createElement('div');
    miniElement.className = 'mini';
  
    // Create image element
    var imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = miniText; // Set alt attribute for accessibility
    miniElement.appendChild(imageElement);
  
    // Create text element
    var textElement = document.createElement('p');
    textElement.textContent = miniText;
    miniElement.appendChild(textElement);
  
    return miniElement;
  }
  
  // Click event listener for the "more minis" button
  document.getElementById('moreMinisBtn').addEventListener('click', function() {
    // Show loading box
    document.getElementById('loadingBox').style.display = 'block';
  
    // Simulate a delay for loading minis (you would fetch data here)
    setTimeout(function() {
      // Example: Array of objects containing text and image URL
      var newMinis = [
        { text: 'Mini 1', image: './rent/sa.png' },
        { text: 'Mini 2', image: './rent/sa1.png' },
        { text: 'Mini 3', image: './rent/sa4.png' }
      ];
  
      // Create and append each mini element to minisContainer
      newMinis.forEach(function(miniData) {
        var newMini = createMini(miniData.text, miniData.image);
        document.getElementById('minisContainer').appendChild(newMini);
      });
  
      // Hide loading box after minis are loaded
      document.getElementById('loadingBox').style.display = 'none';
    }, 2000); // Adjust the delay time as needed
  });
  
  
  