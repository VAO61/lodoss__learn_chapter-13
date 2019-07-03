const rendering = (outputContainer, inputContent) => {
  outputContainer.innerHTML = '';

  inputContent.forEach(inputContent => {
    const item = document.createElement('div');
    item.className = 'about__item about-item';

    const itemTitle = document.createElement('h3');
    itemTitle.className = 'about-item__title';
    itemTitle.innerHTML = 'Some lorem title';

    const itemContent = document.createElement('div');
    itemContent.className = 'about-item__row';

    const itemImg = document.createElement('img');
    itemImg.className = 'about-item__image';
    itemImg.src = inputContent.image;

    const itemText = document.createElement('div');
    itemText.className = 'about-item__desc content';

    const p = document.createElement('p');
    p.innerHTML = inputContent.desc;

    item.appendChild(p);

    item.appendChild(itemTitle);
    item.appendChild(itemContent);
    itemContent.appendChild(itemImg);
    itemContent.appendChild(itemText);
    itemText.appendChild(p);
    outputContainer.appendChild(item);
  });
};

export default rendering;
