function palindrome(str) {
    let regex = /\w/g;
    let arr = str.replace("_","").toLowerCase().match(regex);
    let long = arr.length;
    let cont = 0;
    if(long % 2 == 0){
      for (let i in arr){
        if(arr[i]===arr[long-1-i]){
          cont += 1;
        }
      }
      if(cont == long){
        return true
      }
      return false
    }
    else{
      for (let i = 0; i<long-1;i++){
        if(arr[i]===arr[long-1-i]){
          cont += 1;
        }
      }
      if(cont == long-1){
        return true
      }
      return false
    }
  }
  
  console.log(palindrome("eye"));