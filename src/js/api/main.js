const getJSON = require('./getJSON.js');
const rendering = require('./rendering.js');

const countItems = 6;

const getData = () => {
  let output = document.querySelector('.random-content');

  getJSON('https://picsum.photos/v2/list', { limit: countItems }, imageList => {
    const images = imageList.map(
      item => `https://picsum.photos/id/${item.id}/140/140`
    );
  })
    .then(function(dataImages) {
      console.log(dataImages);
      return images;
    })
    .catch(function(err) {
      console.log(err.statusText);
    });
  getJSON('https://baconipsum.com/api/', {
    type: 'meat-and-filler',
    paras: countItems,
    'start-with-lorem': 5,
    format: 'json'
  })
    .then(function(rendering) {
      rendering(output, strings, images);
      console.log(rendering);
    })
    .catch(function(err) {
      console.log(err.statusText);
    });
};

getData();
