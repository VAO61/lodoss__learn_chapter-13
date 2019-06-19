const getJSON = require('./getJSON.js');
const rendering = require('./rendering.js');

const getData = () => {
  let baconIpsumOutput = document.querySelector('.block-lorem');

  getJSON('https://picsum.photos/v2/list', { limit: 4 }, imageList => {
    const images = imageList.map(
      item => `https://picsum.photos/id/${item.id}/140/140`
    );

    console.log(images);

    getJSON(
      'https://baconipsum.com/api/',
      {
        type: 'meat-and-filler',
        paras: 4,
        'start-with-lorem': 5,
        format: 'json'
      },
      function(baconGoodness) {
        rendering(baconIpsumOutput, baconGoodness, images);
      },
      function(codeError) {
        console.error(`Error ${codeError}`);
      }
    );
  });
};

getData();

// document.addEventListener('DOMContentLoaded', getData);
