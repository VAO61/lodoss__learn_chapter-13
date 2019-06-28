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
    .then(responses => {
      const imageList = responses[0];
      const strings = responses[1];

      const images = imageList.map(
        item => `https://picsum.photos/id/${item.id}/140/140`
      );

      const data = strings.map((item, index) => {
        let obj = new Object();
        obj.desc = item;
        obj.image = images[index];
        return obj;
      });

      rendering(output, data);
    })
    .catch(err => console.log(err));
};

getData(6);
