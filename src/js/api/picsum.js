// alert('aaaaaaaa');

const getJSONPicsum = function(url, params, callbackSuccess, callbackError) {
  // var itemImgListUrl = 'https://picsum.photos/v2/list';
  var itemImgListRequest = new XMLHttpRequest();
  itemImgListRequest.open('GET', itemImgListUrl);
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

  // console.log(getJSONPicsum);

  const getDataPicsum = () => {
    getJSONPicsum('https://picsum.photos/v2/list'),
      {
        // TODO: https://picsum.photos/id/`value`/140/140
      },
      function showImgUrl(jsonObj) {
        var imgUrl = jsonObj[''];

        for (var i = 0; imgUrl.length; i++) {
          var test = imgUrl[i];

          console.log(test);
        }
      };
  };
};
module.exports = getJSONPicsum;
