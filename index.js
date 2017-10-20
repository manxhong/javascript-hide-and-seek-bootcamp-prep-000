function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function deepestChild(){
  const lis = document.getElementById('app').querySelectorAll('#grand-node div');

  for (var i = 0; i < lis.length; i++) {
    if (i === lis.length) {
      return lis[i-1].innerHTML;
    }
  }
}

nestedTarget();
