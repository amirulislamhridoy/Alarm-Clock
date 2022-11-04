const ary = [1,3,2,7,4,6]
const p = 3

function shiftedPosition(ary, p){
  let newAry = new Array(ary.length)
  let k = 0
  
  for(let i = p; i < ary.length; i++){
    newAry[k] = ary[i]
    k++;
  }
  for(let i = 0; i < p; i++){
    newAry[k] = ary[i]
    k++;
  }
  console.log(newAry)
}

shiftedPosition(ary, p)