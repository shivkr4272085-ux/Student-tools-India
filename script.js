const n=id=>parseFloat(document.getElementById(id).value),o=(id,x)=>document.getElementById(id).textContent=x;
function percent(){let a=n('p1'),b=n('p2');o('pr',isFinite(a)&&b>0?`Percentage: ${(a/b*100).toFixed(2)}%`:'Enter valid marks.')}
function age(){let v=document.getElementById('dob').value;if(!v){o('ar','Select date of birth.');return}let d=new Date(v),x=new Date();if(d>x){o('ar','Invalid date.');return}let y=x.getFullYear()-d.getFullYear(),m=x.getMonth()-d.getMonth();if(x.getDate()<d.getDate())m--;if(m<0){y--;m+=12}o('ar',`Age: ${y} years ${m} months`)}
function emi(){let p=n('ep'),r=n('er'),m=n('en');if(p<=0||r<0||m<=0){o('emir','Enter valid values.');return}r/=1200;let e=r? p*r*Math.pow(1+r,m)/(Math.pow(1+r,m)-1):p/m;o('emir',`Monthly EMI: ₹${e.toFixed(2)}`)}
function gst(){let p=n('gp'),r=n('gr');if(p<0||r<0){o('gstr','Enter valid values.');return}let g=p*r/100;o('gstr',`GST: ₹${g.toFixed(2)} | Total: ₹${(p+g).toFixed(2)}`)}
function bmi(){let w=n('bw'),h=n('bh');if(w<=0||h<=0){o('bmir','Enter valid values.');return}o('bmir',`BMI: ${(w/(h/100)**2).toFixed(2)}`)}
function discount(){let p=n('dp'),r=n('dr');if(p<0||r<0){o('drx','Enter valid values.');return}let d=p*r/100;o('drx',`Discount: ₹${d.toFixed(2)} | Pay: ₹${(p-d).toFixed(2)}`)}
function si(){let p=n('sp'),r=n('sr'),t=n('st');let i=p*r*t/100;o('sir',isFinite(i)?`Interest: ₹${i.toFixed(2)} | Total: ₹${(p+i).toFixed(2)}`:'Enter valid values.')}
function ci(){let p=n('cp'),r=n('cr'),t=n('ct');let a=p*(1+r/100)**t;o('cir',isFinite(a)?`Interest: ₹${(a-p).toFixed(2)} | Amount: ₹${a.toFixed(2)}`:'Enter valid values.')}
function salary(){let m=n('sal');o('salr',m>=0?`Annual salary: ₹${(m*12).toFixed(2)}`:'Enter valid salary.')}
function loan(){let p=n('lp'),r=n('lr'),t=n('lt');let i=p*r*t/100;o('lrx',isFinite(i)?`Interest: ₹${i.toFixed(2)} | Total: ₹${(p+i).toFixed(2)}`:'Enter valid values.')}