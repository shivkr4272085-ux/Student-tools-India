function percentage(){
  const a=parseFloat(document.getElementById("obtained").value);
  const b=parseFloat(document.getElementById("total").value);
  const out=document.getElementById("percentageResult");
  if(!isFinite(a)||!isFinite(b)||b<=0){out.textContent="Enter valid marks.";return}
  out.textContent=`Percentage: ${(a/b*100).toFixed(2)}%`;
}
function age(){
  const value=document.getElementById("dob").value;
  const out=document.getElementById("ageResult");
  if(!value){out.textContent="Select your date of birth.";return}
  const birth=new Date(value+"T00:00:00");
  const now=new Date();
  let years=now.getFullYear()-birth.getFullYear();
  let months=now.getMonth()-birth.getMonth();
  if(now.getDate()<birth.getDate()) months--;
  if(months<0){years--;months+=12}
  if(birth>now){out.textContent="Date of birth cannot be in the future.";return}
  out.textContent=`Age: ${years} years ${months} months`;
}
function emi(){
  const P=parseFloat(document.getElementById("loan").value);
  const annual=parseFloat(document.getElementById("rate").value);
  const n=parseInt(document.getElementById("months").value);
  const out=document.getElementById("emiResult");
  if(!isFinite(P)||!isFinite(annual)||!isFinite(n)||P<=0||n<=0||annual<0){out.textContent="Enter valid values.";return}
  const r=annual/12/100;
  const payment=r===0?P/n:P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  out.textContent=`Monthly EMI: ₹${payment.toFixed(2)}`;
}
