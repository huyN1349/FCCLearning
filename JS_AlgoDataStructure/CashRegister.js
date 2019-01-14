function checkCashRegister(price, cash, cid) {

  var billValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var total = 0;
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1]
  }
  //console.log(cid)
  var result = {status: null, change: []};
  var balance = cash - price;
  var billAvail;
  var billNeed;
  var changeNeed;
  var rem;
  var i = cid.length - 1;
  //console.log(cid[2][1])
  //Loop through balance until it reaches zero and i becomes negative
  while (balance > 0 && i >= 0) {
    billAvail = cid[i][1] / billValue[i];
    billNeed = parseInt(balance / billValue[i]);
    //Compare between No. of bills available and No. of bills needed
    if ((billAvail >= billNeed) && (billNeed > 0)) {
      changeNeed = billNeed*billValue[i];
      balance -= changeNeed;
      balance = Math.round(balance*100)/100;
      result.change.push([cid[i][0], changeNeed]);
    } else if ((billAvail < billNeed) && (billAvail > 0)) {
      balance -= cid[i][1];
      balance = Math.round(balance*100)/100;
      result.change.push(cid[i]);
    }
    i--;

  }

  if ((total < cash - price) || (result.change.length == 0) || balance > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  } else if (total == cash - price) {
    result.status = "CLOSED";
    result.change = cid;
  } else if (total > cash - price) {
    result.status = "OPEN";
  }

  return (result);

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) ;
