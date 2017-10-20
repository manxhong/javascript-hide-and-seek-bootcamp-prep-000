function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function deepestChild(){
  const lis = document.querySelectorAll('div');

  for (var i = 0; i < lis.length; i++) {
    if (i===lis.length) {
      console.log(lis[i]);
      return lis[i];
    }
  }
}

console.log(deepestChild());
