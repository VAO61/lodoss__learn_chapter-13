strings = ['desc-1', 'desc-2', 'desc-3'];
images = ['url-1', 'url-2', 'url-3'];
let data = [];

strings.map((item, index) => {
  var obj = new Object();
  obj.desc = item;
  obj.image = images[index];
  data.push(obj);
});
console.log(data);
