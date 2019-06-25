strings = ['a', 'b', 'c'];
images = ['1', '2', '3'];

data = { strings, images };
// console.log(data);
// console.log(data.strings[0]);
// console.log(data.images[0]);

strings.forEach(item => {
  let object = {};

  object = {
    desc: item
  };
  // console.log(object);
  // return object;
  images.forEach(item => {
    let objImg = {
      image: item
    };
    let objectItem = Object.assign(object, objImg);
    console.log(object);
    return objectItem;
  });
});

// Objs = data.map(item => {
//   url: data.images,
//   desc: data.strings
// })

// console.log(Objs);
