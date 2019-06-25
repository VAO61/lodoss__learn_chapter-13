const getJSON = require('./getJSON.js');
// const rendering = require('./rendering.js');
// const output = document.querySelector('.random-content');

// getData(Number) : Promise<Array[{src: String, text: String}]>
const getData = countItems => {
  let images;

  return getJSON('https://picsum.photos/v2/list', { limit: countItems })
    .then(imageList => {
      images = imageList.map(
        item => `https://picsum.photos/id/${item.id}/140/140`
      );

      return getJSON('https://baconipsum.com/api/', {
        type: 'meat-and-filler',
        paras: countItems,
        'start-with-lorem': 5,
        format: 'json'
      });
    })
    .then(strings => {
      data = { strings, images };
      console.table(data);
      console.log(typeof data);
      console.log(typeof data.images);
      console.log(typeof data.strings);

      return data;
    })
    .catch(err => {
      console.log(err.statusText);
    });
};

getData(4);
// rendering(output, data);
// console.table(images);
// console.table(strings);
