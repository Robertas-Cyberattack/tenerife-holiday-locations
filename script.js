let map;
const markersByElement = new Map();

function initMap() {
  const mapEl = document.getElementById('googleMap');
  if (!mapEl) {
    console.error('Map container #googleMap not found.');
    return;
  }

  map = new google.maps.Map(mapEl, {
    center: { lat: 28.2916, lng: -16.6291 },
    zoom: 10,
  });

  // Create markers for each card
  const cards = document.querySelectorAll('.location');
  cards.forEach((card) => {
    const lat = Number(card.dataset.lat);
    const lng = Number(card.dataset.lng);
    const name = (card.querySelector('p')?.textContent || 'Location').trim();

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      console.warn('Skipping location with invalid coordinates:', card);
      return;
    }

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
      title: name,
    });

    markersByElement.set(card, marker);
  });

  // Event delegation: click anywhere on a card to move the map
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.addEventListener('click', (e) => {
      const card = e.target.closest('.location');
      if (!card) return;

      const lat = Number(card.dataset.lat);
      const lng = Number(card.dataset.lng);
      if (Number.isNaN(lat) || Number.isNaN(lng)) return;

      map.panTo({ lat, lng });
      map.setZoom(13);

      const marker = markersByElement.get(card);
      if (marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => marker.setAnimation(null), 700);
      }
    });

    // Keyboard accessibility: Enter/Space triggers the same action
    gallery.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const card = e.target.closest('.location');
      if (!card) return;
      e.preventDefault();
      card.click();
    });
  }
}

// Ensure the callback is globally visible to the Maps loader
window.initMap = initMap;
