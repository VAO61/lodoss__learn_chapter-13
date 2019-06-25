const stringParams = obj =>
  Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');

var getJSON = function(url, params) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}?${stringParams(params)}`, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // if (status === 200) {
        resolve(xhr.response);
        console.log(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText + 'What`s a problem mother f..ather?'
        });
      }
    };
    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
};

module.exports = getJSON;
