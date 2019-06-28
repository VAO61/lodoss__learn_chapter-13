const stringParams = obj =>
  Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');

var getJSON = async (url, params) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `${url}?${stringParams(params)}`, true);
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      return xhr.response;
    } else {
      throw new Error({
        status: xhr.status,
        statusText: xhr.statusText
      });
    }
  };
  xhr.onerror = () => {
    throw new Error({
      status: xhr.status,
      statusText: xhr.statusText
    });
  };
  xhr.send();
};

export default getJSON;
