const stringParams = obj =>
  Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');

var getJSON = function(url, params, callbackSuccess, callbackError) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `${url}?${stringParams(params)}`, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      // console.log('xhr.response', xhr.response);
      callbackSuccess(xhr.response);
    } else {
      callbackError(status);
    }
  };
  xhr.send();
};

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
        baconIpsumOutput.innerHTML = '';

        // console.log(typeof baconGoodness);
        // console.log(baconGoodness);

        // TODO: forEach и/или map()
        // baconGoodness.forEach(i => {
        // debugger;
        baconGoodness.forEach(str => {
          // TODO: отрисовка в отдельной функции
          const item = document.createElement('div');
          item.className = 'about__item about-item';

          const itemTitle = document.createElement('h3');
          itemTitle.className = 'about-item__title';
          itemTitle.innerHTML = 'Some lorem title';

          const itemImgText = document.createElement('div');
          itemImgText.className = 'about-item__row';

          // getPicsumImages();
          // const itemImgList = 'https://picsum.photos/v2/list';
          // console.log(typeof itemImgList);

          const itemImg = document.createElement('img');
          itemImg.className = 'about-item__image';
          // TODO: https://picsum.photos/v2/list
          // TODO: массив объектов [{ ... },{ ... }, ...]
          // TODO: https://picsum.photos/id/ ... id(key)->value ... /140/140
          itemImg.src = images.pop();

          const itemDesc = document.createElement('div');
          itemDesc.className = 'about-item__desc content';

          const p = document.createElement('p');
          p.innerHTML = str;

          item.appendChild(p);

          item.appendChild(itemTitle);
          item.appendChild(itemImgText);
          itemImgText.appendChild(itemImg);
          itemImgText.appendChild(itemDesc);
          itemDesc.appendChild(p);
          baconIpsumOutput.appendChild(item);
        });
      },
      function(codeError) {
        console.error(`Error ${codeError}`);
      }
    );
  });
};

getData();

// document.addEventListener('DOMContentLoaded', getData);
