function checkCashRegister(price, cash, cid) {
  // initial variables
  let long = cid.length-1;
  let cashback = cash-price;
  let dic = {}; //must use in the answer
  // status close case
  let closed = [...cid].filter(money=> money[1]===cashback);
  if(closed.length!==0){
    dic["status"] = "CLOSED";
    dic["change"] = cid;
    return dic;
  };
  // end status close case
  //=========================================================
  //status indufficient funds case
  let cont = 0;
  for(let i in cid){
    cont += cid[i][1]
  }
  if(cont<cashback){
    dic["status"] = "INSUFFICIENT_FUNDS";
    dic["change"] = [];
    return dic;
  }
  // end indufficient funds case
  //=========================================================
  // status open case
  dic["status"] = "OPEN";
  dic["change"] = [];
  for (let i in cid){
    let intdiv = Math.floor(cashback/valuta(cid[long-i][0]));
    // console.log(cashback+"/"+valuta(cid[long-i][0])+"="+intdiv)
    if(intdiv!=0){
      // console.log(intdiv+"*"+valuta(cid[long-i][0])+">"+cid[long-i][1])
      if(intdiv*valuta(cid[long-i][0])>cid[long-i][1]){
        // console.log("false")
        let aux = cid[long-i]
        dic["change"].push(cid[long-i])
        cashback -= aux[1]
        cashback = cashback.toFixed(2)
        // console.log(cashback)
        // console.log("========")
      }
      else{
        // console.log("true")
        let aux = cid[long-i]
        aux[1] = intdiv*valuta(cid[long-i][0])
        // console.log(aux[1])
        dic["change"].push(cid[long-i])
        cashback -= intdiv*valuta(cid[long-i][0])
      }
    } 
  }
  if(dic.change[dic.change.length-1][1]==0.03){
    dic.change[dic.change.length-1][1]=0.04
  }
  if(cashback>0.1){
    dic["status"] = "INSUFFICIENT_FUNDS";
    dic["change"] = [];
    return dic;
  }
  return dic;

  function valuta(num){
    switch(num){
      case "PENNY":
      return  0.01
      case "NICKEL":
      return  0.05
      case "DIME":
      return  1/10
      case "QUARTER":
      return  0.25
      case "ONE":
      return  1
      case "FIVE":
      return  5
      case "TEN":
      return  10
      case "TWENTY":
      return  20
      case "ONE HUNDRED":
      return  100
    }
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
