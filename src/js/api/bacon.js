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

  getJSON(
    'https://baconipsum.com/api/',
    {
      type: 'meat-and-filler',
      paras: 4,
      'start-with-lorem': 5,
      // sentences: 4,
      format: 'json'
    },
    function(baconGoodness) {
      if (baconGoodness && baconGoodness.length > 0) {
        baconIpsumOutput.innerHTML = '';
        for (var i = 0; i < baconGoodness.length; i++) {
          const item = document.createElement('div');
          item.className = 'about__item about-item';

          const itemTitle = document.createElement('h3');
          itemTitle.className = 'about-item__title';
          itemTitle.innerHTML = 'Some lorem title';

          const itemImgText = document.createElement('div');
          itemImgText.className = 'about-item__row';

          const itemImg = document.createElement('img');
          itemImg.className = 'about-item__image';
          itemImg.src = 'https://picsum.photos/140/140?random=' + [i];

          const itemDesc = document.createElement('div');
          itemDesc.className = 'about-item__desc content';

          const p = document.createElement('p');
          p.innerHTML = baconGoodness[i];

          item.appendChild(p);

          item.appendChild(itemTitle);
          item.appendChild(itemImgText);
          itemImgText.appendChild(itemImg);
          itemImgText.appendChild(itemDesc);
          itemDesc.appendChild(p);
          baconIpsumOutput.appendChild(item);
        }
      }
    },
    function(codeError) {
      alert(`Error ${codeError}`);
    }
  );
};

document.addEventListener('DOMContentLoaded', getData);
