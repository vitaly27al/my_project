export const useMap = () => {
  window.map = null;
  const themeTarget = document.querySelector('[data-theme]');
  const themeTargetDataset = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;

  // Главная функция, вызывается при запуске скрипта
  main();
  async function main() {
    // ожидание загрузки модулей
    await ymaps3.ready;
    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapControls,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = ymaps3;

    // Импорт модулей для элементов управления на карте
    const { YMapZoomControl, YMapGeolocationControl } = await ymaps3.import(
      '@yandex/ymaps3-controls@0.0.1',
    );

    // Координаты центра карты
    const CENTER_COORDINATES = [134.098904, -22.625953];
    // координаты метки на карте
    const MARKER_COORDINATES = [134.098904, -22.625953];

    // Объект с параметрами центра и зумом карты
    const LOCATION = { center: CENTER_COORDINATES, zoom: 2 };

    // Создание объекта карты
    const map = new YMap(document.getElementById('map'), {
      location: LOCATION,
    });

    // Добавление слоев на карту
    const layerLight = new YMapDefaultSchemeLayer({
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

    const layerDark = new YMapDefaultSchemeLayer({
      customization: [
        {
          tags: {
            all: ['water'],
          },
          stylers: [
            {
              color: '#1d1e25',
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

    if (theme == 'dark') {
      map.addChild(layerDark);
    } else {
      map.addChild(layerLight);
    }

    map.addChild(new YMapDefaultFeaturesLayer());

    // Добавление элементов управления на карту
    map.addChild(
      new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({})),
    );
    map.addChild(
      new YMapControls({ position: 'top right' }).addChild(
        new YMapGeolocationControl({}),
      ),
    );

    // Создание маркера
    const el = document.createElement('img');
    el.className = 'hero_map-container-marker';
    el.src = './assets/icons/map-marker.svg';
    // При клике на маркер меняем центр карты на LOCATION с заданным duration
    el.onclick = () => map.update({ location: { ...LOCATION, duration: 400 } });

    // Создание заголовка маркера
    const markerTitle = document.createElement('h5');
    markerTitle.className = 'hero_map-container-text-title';
    markerTitle.innerHTML = 'Yogja, INA';

    const markerDescr = document.createElement('p');
    markerDescr.className = 'hero_map-container-text-descr';
    markerDescr.innerHTML = '100 Smith Street Collingwood VIC 3066 AU';

    const markerText = document.createElement('div');
    markerText.className = 'hero_map-container-text';
    markerText.appendChild(markerTitle);
    markerText.appendChild(markerDescr);

    // Контейнер для элементов маркера
    const imgContainer = document.createElement('div');
    imgContainer.className = 'hero_map-container';
    imgContainer.appendChild(markerText);
    imgContainer.appendChild(el);

    // Добавление центра карты
    map.addChild(new YMapMarker({ coordinates: CENTER_COORDINATES }));

    // Добавление маркера на карту
    map.addChild(
      new YMapMarker({ coordinates: MARKER_COORDINATES }, imgContainer),
    );
  }
};

// const layer = new YMapDefaultSchemeLayer({
//   customization: [
//     // Делаем прозрачными все геометрии водных объектов.
//     {
//       tags: {
//         all: ['water'],
//       },
//       stylers: [
//         {
//           color: '#FFF',
//         },
//       ],
//     },
//     {
//       elements: 'label',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       tags: {
//         all: ['landscape'],
//       },
//       stylers: [
//         {
//           color: '#acacb9',
//         },
//       ],
//     },
//   ],
// });
// map.addChild(layer);
