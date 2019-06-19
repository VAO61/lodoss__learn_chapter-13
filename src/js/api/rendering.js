const rendering = (container, strList, imageList) => {
  container.innerHTML = '';

  // console.log(typeof baconGoodness);
  // console.log(baconGoodness);

  // TODO: forEach и/или map()
  // baconGoodness.forEach(i => {
  // debugger;
  strList.forEach(str => {
    // TODO: отрисовка в отдельной функции
    const item = document.createElement('div');
    item.className = 'about__item about-item';

    const itemTitle = document.createElement('h3');
    itemTitle.className = 'about-item__title';
    itemTitle.innerHTML = 'Some lorem title';

    const itemImgText = document.createElement('div');
    itemImgText.className = 'about-item__row';

    // getPicsumImages();
    // const itemImgList = 'https://picsum.photos/v2/list';
    // console.log(typeof itemImgList);

    const itemImg = document.createElement('img');
    itemImg.className = 'about-item__image';
    // TODO: https://picsum.photos/v2/list
    // TODO: массив объектов [{ ... },{ ... }, ...]
    // TODO: https://picsum.photos/id/ ... id(key)->value ... /140/140
    itemImg.src = imageList.pop();

    const itemDesc = document.createElement('div');
    itemDesc.className = 'about-item__desc content';

    const p = document.createElement('p');
    p.innerHTML = str;

    item.appendChild(p);

    item.appendChild(itemTitle);
    item.appendChild(itemImgText);
    itemImgText.appendChild(itemImg);
    itemImgText.appendChild(itemDesc);
    itemDesc.appendChild(p);
    container.appendChild(item);
  });
};

module.exports = rendering;
