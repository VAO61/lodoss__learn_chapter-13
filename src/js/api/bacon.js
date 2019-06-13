// document.addEventListener('DOMContentLoaded', function(event) {
// const button = document.getElementById('baconButton');
// let baconIpsumOutput = document.getElementById('someTestBlock');

// button.addEventListener('click', () => {});
// });

var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      console.log('xhr.response', xhr.response);
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

const button = document.getElementById('baconButton');

button.addEventListener('click', () => {
  let baconIpsumOutput = document.getElementById('someTestBlock');
  // baconIpsumOutput.append();

  const res = getJSON(
    'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json',
    function(errCode, baconGoodness) {
      console.log('baconGoodness', baconGoodness);
      if (baconGoodness && baconGoodness.length > 0) {
        // baconIpsumOutput.html('');
        for (var i = 0; i < baconGoodness.length; i++)
          baconIpsumOutput.append('<p>' + baconGoodness[i] + '</p>');
        // baconIpsumOutput.show();
      }
    }
  );
  console.log('res', res);
});
