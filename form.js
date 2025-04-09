document.getElementById('wishlist-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const destination = document.getElementById('destination').value;
    const country = document.getElementById('country').value;
    const reason = document.getElementById('reason').value;
  
    const newDestination = { destination, country, reason };
  
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(newDestination);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
    document.getElementById('thank-you-message').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('thank-you-message').classList.add('hidden');
    }, 3000);
  
    document.getElementById('wishlist-form').reset();
  
    const destinationList = document.querySelector('.destination-list');
    const div = document.createElement('div');
    div.classList.add('destination');
    div.innerHTML = `
      <h3>${newDestination.destination}</h3>
      <p>${newDestination.country}</p>
      <p>${newDestination.reason}</p>
    `;
    destinationList.appendChild(div);
  });
  