const getJSON = require('./getJSON.js');
const rendering = require('./rendering.js');
const output = document.querySelector('.random-content');

const getData = countItems => {
  const reqestImages = getJSON('https://picsum.photos/v2/list', {
    limit: countItems
  });

  const reqestStrings = getJSON('https://baconipsum.com/api/', {
    type: 'meat-and-filler',
    paras: countItems,
    'start-with-lorem': 5,
    format: 'json'
  });

  // Promise.race - ожидает первый, который выполнится
  Promise.all([reqestImages, reqestStrings])
    .then(([imageList, strings]) => {
      const images = imageList.map(
        item => `https://picsum.photos/id/${item.id}/140/140`
      );

      const data = strings.map((item, index) => {
        return {
          desc: item,
          image: images[index]
        };
      });

      rendering(output, data);
    })
    .catch(err => console.log(err));
};

getData(6);
