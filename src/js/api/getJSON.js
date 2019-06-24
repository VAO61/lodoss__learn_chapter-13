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
      callbackSuccess(xhr.response);
    } else {
      callbackError(status);
    }
  };
  xhr.send();
};

// var getJSON = function(url, params) {
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', `${url}?${stringParams(params)}`, true);
//     xhr.responseType = 'json';
//     xhr.onload = () => {
//       if (status >= 200 && this.status < 300) {
//         // if (status === 200) {
//         resolve(xhr.response);
//       } else {
//         reject({
//           status: status,
//           statusText: xhr.statusText
//         });
//       }
//     };
//     xhr.onerror = () => {
//       reject({
//         status: status,
//         statusText: xhr.statusText
//       });
//     };
//     xhr.send();
//   });
// };

module.exports = getJSON;
