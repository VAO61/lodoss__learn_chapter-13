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
        resolve(xhr.response);
      } else {
        reject(xhr);
      }
    };
    xhr.onerror = err => {
      reject(err);
    };
    xhr.send();
  });
};

export default getJSON;
