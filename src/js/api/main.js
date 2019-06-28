import getJSON from './getJSON.js';
import rendering from './rendering.js';

const output = document.querySelector('.random-content');

// getData(Number) : Promise<Array[{src: String, text: String}]>
const getData = countItems => {
  getJSON('https://picsum.photos/v2/list', { limit: countItems })
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
      data = [];
      strings.map((item, index) => {
        let obj = new Object();
        obj.desc = item;
        obj.image = images[index];
        data.push(obj);
      });
      return data;
    })
    .then(data => {
      rendering(output, data);
    })
    .catch(err => {
      console.log(err.statusText);
    });
};

getData(6);
