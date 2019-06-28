import getJSON from './getJSON.js';
import rendering from './rendering.js';

const output = document.querySelector('.random-content');

// getData(Number) : Promise<Array[{src: String, text: String}]>
const getData = async countItems => {
  try {
    const imageList = await getJSON('https://picsum.photos/v2/list', {
      limit: countItems
    });

    const images = imageList.map(
      item => `https://picsum.photos/id/${item.id}/140/140`
    );

    const strings = await getJSON('https://baconipsum.com/api/', {
      type: 'meat-and-filler',
      paras: countItems,
      'start-with-lorem': 5,
      format: 'json'
    });

    const data = strings.map((item, index) => {
      let obj = new Object();
      obj.desc = item;
      obj.image = images[index];
      return obj;
    });

    rendering(output, data);
  } catch (err) {
    console.error(err);
  }
};

getData(100);
