const getJSON = require('./getJSON.js');
const rendering = require('./rendering.js');

const countItems = 6;

const getData = () => {
  let output = document.querySelector('.random-content');

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

  //   getJSON('https://picsum.photos/v2/list', { limit: countItems }, imageList => {
  //     const images = imageList
  //       .map(item => `https://picsum.photos/id/${item.id}/140/140`)
  //       .then(function(datums) {
  //         console.log(datums);
  //         return images;
  //       })
  //       .catch(function(err) {
  //         console.log(err.statusText);
  //       });
  //   });

  //   getJSON('https://baconipsum.com/api/', {
  //     type: 'meat-and-filler',
  //     paras: countItems,
  //     'start-with-lorem': 5,
  //     format: 'json'
  //   })
  //     .then(function() {
  //       rendering(output, strings, images);
  //     })
  //     .catch(function(err) {
  //       console.log(err.statusText);
  //     });
};

getData();
