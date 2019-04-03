
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
function generatorTalk(option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  };

  const phrase = ['很簡單', '很容易', '很快', '很正常'];
  // console.log(sample(task.engineer));
  let collection = [];
  // const option = {
  //   target: 'engineer'
  // };
  switch (option.target) {
    case 'engineer':
      collection = collection.concat("engineer").concat(sample(task.engineer)).concat(sample(phrase));
      // console.log(collection);
      break;
    case 'designer':
      collection = collection.concat('designer').concat(sample(task.designer)).concat(sample(phrase));
      break;
    case 'entrepreneur':
      collection = collection.concat('entrepreneur').concat(sample(task.entrepreneur)).concat(sample(phrase));
      break;
  }
  let word = '';
  for (i = 0; i < collection.length; i++) {
    word += collection[i];
  }
  console.log('word' + word);
  return word;
}

// generatorTalk();
module.exports = generatorTalk;
