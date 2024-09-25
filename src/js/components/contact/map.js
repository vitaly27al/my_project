import mapMarker from '/assets/icons/mapMarker.svg';
export const useMap = () => {
  initMap();
  // ====================================== карта
  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(
      document.getElementById('map'),

      {
        location: {
          center: [52.956554, 10.278685],
          zoom: 2,
        },
      },
    );
    // =======================================

    // =======================================Маркер

    // const markerElement = document.createElement('div');
    // markerElement.className = 'marker-class';
    // markerElement.innerText = "I'm marker!";

    // const marker = new YMapMarker(
    //   {
    //     source: '$mapMarker',
    //     coordinates: [130, -25],
    //     draggable: false,
    //   },
    //   markerElement,
    // );

    // map.addChild(marker);
    // =================================================

    // ===============================================Стили карты

    const layer = new YMapDefaultSchemeLayer({
      customization: [
        // Делаем прозрачными все геометрии водных объектов.
        {
          tags: {
            all: ['water'],
          },
          stylers: [
            {
              color: '#FFF',
            },
          ],
        },
        {
          elements: 'label',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          tags: {
            all: ['landscape'],
          },
          stylers: [
            {
              color: '#acacb9',
            },
          ],
        },
      ],
    });
    map.addChild(layer);
  }
};
