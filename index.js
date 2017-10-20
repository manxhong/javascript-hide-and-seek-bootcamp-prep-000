function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function deepestChild(){
  const lis = document.querySelectorAll('#grand-node div');
  return lis[lis.length-1];
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n.toString();
  }
}
