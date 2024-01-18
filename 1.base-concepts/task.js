"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let D;

 D = Math.pow(b, 2)-(4*a*c);

 if (D === 0){
  arr = [-b/(2*a)];
 } else if (D > 0){
  arr = [(-b + Math.sqrt(D) )/(2*a), (-b - Math.sqrt(D) )/(2*a)];
 }
 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percent_month = (percent/100)/12;
  let credit_body = amount - contribution;
  let month_pay = credit_body * (percent_month+(percent_month/(Math.pow(1+percent_month, countMonths)-1)));
  let full_pay = Number((month_pay * countMonths).toFixed(2));

  return full_pay;
}