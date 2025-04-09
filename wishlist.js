export async function fetchDestinations() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
  
      const destinationList = document.querySelector('.destination-list');
  
      data.forEach(destination => {
        const div = document.createElement('div');
        div.classList.add('destination');
        div.innerHTML = `
          <h3>${destination.destination}</h3>
          <p>${destination.country}</p>
          <p>${destination.reason}</p>
        `;
<<<<<<< HEAD
        destinationList.appendChild(div);
      });
  
      const localDestinations = JSON.parse(localStorage.getItem('wishlist')) || [];
      localDestinations.forEach(destination => {
        const div = document.createElement('div');
        div.classList.add('destination');
        div.innerHTML = `
          <h3>${destination.destination}</h3>
          <p>${destination.country}</p>
          <p>${destination.reason}</p>
        `;
        destinationList.appendChild(div);
      });
  
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  }
  
=======
        destinationContainer.appendChild(card);
    });
    
    window.addToWishlist = function(destinationName) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = destinationName;
        wishlistContainer.appendChild(listItem);
    };
});
   

>>>>>>> 09c4973574548f613e6f16c90dc06ce8f6805958
