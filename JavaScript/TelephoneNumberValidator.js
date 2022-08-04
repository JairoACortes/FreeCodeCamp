function telephoneCheck(str) {
  if (str[0]=="-"|/[?]/.test(str)){
    return false;
  }
  if(/\d/.test(str[0])&&/\d/.test(str[1])&&/\s/.test(str[2])){
    return false;
  }
  if(str.indexOf("(")!=-1||str.indexOf(")")!=-1){
    let charac = /^\d\s[(]\d\d\d[)]|^[(]\d\d\d[)]|^\d[(]\d\d\d[)]/;
    if(!charac.test(str)){
      return false
    }
  }
  let regex = /\d/g;
  let arr = str.match(regex);
  //console.log(arr)
  if(arr.length<10||arr.length>11){
    return false;
  }
  else if(arr.length==11){
    if(arr[0]!=1){
      return false;
    }else{
      return true;
    }
  }
  else{
    return true;
  }
}

console.log(telephoneCheck("55 55-55-555-5"));
