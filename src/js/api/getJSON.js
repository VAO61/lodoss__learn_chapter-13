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

module.exports = getJSON;
