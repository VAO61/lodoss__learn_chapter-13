const getJSON = require('./getJSON.js');
const rendering = require('./rendering.js');

const countItems = 6;

const getData = () => {
  // let output = document.querySelector('.random-content');
  // let images = []
  // let strings = []
  //   return getJSON('https://picsum.photos/v2/list', { limit: countItems })
  //   .then(res => {
  //     // res, map
  //     images = imageList.map(
  //       item => `https://picsum.photos/id/${item.id}/140/140`
  //     );
  //     return getJSON('https://baconipsum.com/api/');
  //   }).then(string => {
  //       strings = ...;

  //   })
  //   .catch();

  getJSON('https://picsum.photos/v2/list', { limit: countItems }, imageList => {
    const images = imageList.map(
      item => `https://picsum.photos/id/${item.id}/140/140`
    );

    getJSON(
      'https://baconipsum.com/api/',
      {
        type: 'meat-and-filler',
        paras: countItems,
        'start-with-lorem': 5,
        format: 'json'
      },
      function(strings) {
        rendering(output, strings, images);
      },
      function(codeError) {
        console.error(`Error ${codeError}`);
      }
    );
  });
};

getData();
