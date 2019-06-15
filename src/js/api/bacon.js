const stringParams = obj =>
  Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');

// document.addEventListener('DOMContentLoaded', function(event) {
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

const button = document.getElementById('baconButton');

const getData = () => {
  // let baconIpsumOutput = document.getElementById('someTestBlock');
  // TODO: Находит, но не записывает (innerHTML)
  let baconIpsumOutput = document.querySelector('.block-lorem');

  // console.log(baconIpsumOutput);

  getJSON(
    'https://baconipsum.com/api/',
    {
      type: 'all-meat',
      paras: 3,
      'start-with-lorem': 1,
      format: 'json'
    },
    function(baconGoodness) {
      if (baconGoodness && baconGoodness.length > 0) {
        baconIpsumOutput.innerHTML = '';
        for (var i = 0; i < baconGoodness.length; i++) {
          const div = document.createElement('div');
          div.className = 'block-lorem__item';
          const p = document.createElement('p');
          p.innerHTML = baconGoodness[i];
          div.appendChild(p);
          // baconIpsumOutput.append('<p>' + baconGoodness[i] + '</p>');
          baconIpsumOutput.appendChild(div);
        }
      }
    },
    function(codeError) {
      alert(`Error ${codeError}`);
    }
  );
};

button.addEventListener('click', getData);

document.addEventListener('DOMContentLoaded', getData);
// });

// API не соответствует макету/формулировке задания!
