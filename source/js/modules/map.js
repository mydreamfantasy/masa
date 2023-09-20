/* eslint-disable no-undef */
export const initMap = () => {
  const map = L.map('map')
      .on('load', () => {})
      .setView(
          {
            lat: 55.028522,
            lng: 82.928281,
          },
          17
      );
  map.on('mouseout', function () {
    map.scrollWheelZoom.disable();
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/svg/pin.svg',
    iconSize: [38, 50],
    iconAnchor: [30, 55],
  });

  const mainPinMarker = L.marker(
      {
        lat: 55.028522,
        lng: 82.928281,
      },
      {
        icon: mainPinIcon,
      }
  );

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    evt.target.getLatLng();
  });

  map.setView(
      {
        lat: 55.028522,
        lng: 82.928281,
      },
      17
  );
};
