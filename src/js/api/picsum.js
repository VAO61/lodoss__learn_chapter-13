const stringParamsPicum = obj =>
  Object.keys(obj).map(key => `${key}=${obj[key]}`);

var getJSONPicsum = function(url, params, callbackSuccess, callbackError) {
  // var itemImgListUrl = 'https://picsum.photos/v2/list';
  var itemImgListRequest = new XMLHttpRequest();
  // itemImgListRequest.open('GET', itemImgListUrl);
  itemImgListRequest.open('GET', `${url}?${stringParamsPicum(params)}`, true);
  itemImgListRequest.responseType = 'json';
  itemImgListRequest.onload = function() {
    var status = itemImgListRequest.status;
    if (status === 200) {
      callbackSuccess(itemImgListRequest.response);
    } else {
      callbackError(status);
    }
  };
  itemImgListRequest.send();
  // аксиус / fetch
};

// TODO: https://picsum.photos/id/`value`/140/140

const getDataPicsum = () => {
  // console.log(getJSONPicsum);
  getJSONPicsum('https://picsum.photos/v2/list', { limit: 4 }, function(
    jsonObj
  ) {
    console.log(jsonObj);
    console.log(typeof jsonObj);
    // var imgUrl = jsonObj[''];

    for (var i = 0; jsonObj.length; i++) {
      // var test = jsonObj[i];
      // console.log(test + 'aaaaaaa');
      console.log(jsonObj);
    }
  });
};

document.addEventListener('DOMContentLoaded', getDataPicsum);

module.exports = getJSONPicsum;
