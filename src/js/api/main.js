import getJSON from './getJSON.js';
import rendering from './rendering.js';

const output = document.querySelector('.random-content');

const getData = async countItems => {
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
    return {
      desc: item,
      image: images[index]
    };
  });

  rendering(output, data);
};

getData(5);
