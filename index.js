function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function deepestChild(){
  const lis = document.querySelectorAll('#grand-node div');
  return lis[lis.length-1].innerHTML;
}

nestedTarget();
