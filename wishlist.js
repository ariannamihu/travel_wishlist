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
  