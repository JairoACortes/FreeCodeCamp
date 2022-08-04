function rot13(str) {
  // A = 65, Z = 90
  // String.fromCharCode()
  let arr = str.split("")
  let newArr = []
  let espe
  for(let i in arr){
    if(arr[i]== " "){
      newArr.push(" ")
    }
    else if(arr[i]=="!"||arr[i]=="?"||arr[i]=="."){
      espe = arr[i];
    }
    else{
      let aux = arr[i].charCodeAt(0)
      if(aux>77){
        aux= 65+(12-(90-aux))
        newArr.push(aux)
      }
      else{
        aux= aux+13
        newArr.push(aux)
      }
      
    }
  }
  for(let i in newArr){
    if(newArr[i]!==" ")
    newArr[i]=String.fromCharCode(newArr[i])
  }
  newArr.push(espe)
  return newArr.join("")
}

console.log(rot13("SERR PBQR PNZC"));
