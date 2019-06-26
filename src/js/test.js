strings = ['desc-1', 'desc-2', 'desc-3'];
images = ['url-1', 'url-2', 'url-3'];
let data = [];

strings.map((item, index) => {
  var obj = new Object();
  obj.desc = item;
  obj.image = images[index];
  // console.log(obj);
  data.push(obj);
  // return data;
});
console.log(data);

// data = { strings, images };
// data = { desc: strings[0], image: images[0] };

// -------
// array = [];
// strings.forEach(i => {
//   images.forEach(j => {
//     data = { desc: i, image: j };
//   });
//   array.push(data);
// });
// console.log(array); // [ { desc: 'desc-1', image: 'url-3' }, { desc: 'desc-2', image: 'url-3' }...
// ------

// var newObj = data.reduce((strings, images) => {
//   return strings.concat(images);
// });

// console.log(newObj);

// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//   return a.concat(b);
// });
// console.log(flattened);
