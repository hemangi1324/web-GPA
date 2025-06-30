const credit = {
    sic : 3,sicl : 1,oopc : 2, oopcl : 1, cca : 1,
    cst : 2,cstl : 1,cgd : 2,cgdl : 1,ese : 2,iidtl : 1,nptel : 1,ss : 1,ssl : 1,
    qp : 2,qpl : 1,mfr : 2,mfrl : 1,ieee : 2,ieeel : 1,iks : 1,fab : 1, iksl: 1,
    total: 200
};

let home = document.getElementById("homepage");
let G1 = document.getElementById("G1");
let G2 = document.getElementById("G2");
let rtn = document.querySelectorAll(".rtn");
let group1 = document.getElementById("Group1");
let group2 = document.getElementById("Group2");
let msg = document.getElementById("msg");
let TotalEarned = 0;
let sgpa = 0;
let container = document.querySelector(".container");

G1.addEventListener("click",function(){
  container.classList.remove('show-group2');
  container.classList.add('show-group1');
})

G2.addEventListener("click",function(){
  container.classList.remove('show-group1');
  container.classList.add('show-group2');
})

function checkcredit(n){
  if(n>90 && n<=100) return 10;
  else if(n>80 && n<=90) return 9;
  else if(n>70 && n<=80) return 8;
  else if(n>60 && n<=70) return 7;
  else if(n>50 && n<=60) return 6;
  else if(n>=45 && n<=50) return 5;
  else if(n>=40 && n<=44) return 4;
  else return 0;
}

function val(id) {
  return parseFloat(document.getElementById(id)?.value || 0);
}

function cal1(){
  TotalEarned = 0;
  // --- Input Values ---
let sicis = val("SICis1");
let sices = val("SICes1");
let siccie = val("SICcie1");
let sictw = val("SICtw1");
let sicatt = val("SICatt1");

let oopcis = val("OOPCis1");
let oopces = val("OOPCes1");
let oopccie = val("OOPCcie1");
let oopctw = val("OOPCtw1");
let oopcatt = val("OOPCatt1");

let cstis = val("CSTis");
let cstes = val("CSTes");
let cstcie = val("CSTcie");
let csttw = val("CSTtw");
let cstatt = val("CSTatt");

let cgdis = val("CGDis");
let cgdes = val("CGDes");
let cgdcie = val("CGDcie");
let cgdtw = val("CGDtw");
let cgdatt = val("CGDatt");

let eseis = val("ESEis");
let esees = val("ESEes");
let esecie = val("ESEcie");
let eseatt = val("ESEatt");

let sscie = val("SScie");
let sstw = val("SStw");
let ssatt = val("SSatt");

let iidtltw = val("IIDTLtw");
let npteltw = val("NPTELtw");
let ccatw = val("CCAtw1");

// --- Calculations ---
totalsic = checkcredit(sicatt + siccie + (sicis * (20 / 30)) + (sices * (60 / 70)));
totaloopc = checkcredit(oopcatt + oopccie + (oopcis * (20 / 30)) + (oopces * (60 / 70)));
totaloopcl = checkcredit(oopctw * 4);
totalsictut = checkcredit(sictw * 4);
totalcca = checkcredit(ccatw * 4);

totalcst = checkcredit(cstatt + cstcie + (cstis * (20 / 30)) + (cstes * (60 / 70)));
totalcgd = checkcredit(cgdatt + cgdcie + (cgdis * (20 / 30)) + (cgdes * (60 / 70)));
totalcstl = checkcredit(csttw * 4);
totalcgdl = checkcredit(cgdtw * 4);

totalese = checkcredit(eseatt + esecie + (eseis * (20 / 30)) + (esees * (60 / 70)));
totaliidtl = checkcredit(iidtltw * 2);
totalnptel = checkcredit(npteltw * 4);
totalss = checkcredit((ssatt + sscie) * 4);
totalsstw = checkcredit(sstw * 4);

// --- Final SGPA Credit Earned ---
TotalEarned =
  totalsic * credit.sic +
  totalsictut * credit.sicl +
  totaloopc * credit.oopc +
  totaloopcl * credit.oopcl +
  totalcst * credit.cst +
  totalcstl * credit.cstl +
  totalcgd * credit.cgd +
  totalcgdl * credit.cgdl +
  totalese * credit.ese +
  totaliidtl * credit.iidtl +
  totalnptel * credit.nptel +
  totalss * credit.ss +
  totalsstw * credit.ssl +
  totalcca * credit.cca;

}

function Sgpa(){
  sgpa = (TotalEarned / credit.total)*10 ;
}

let calculate1 = document.getElementById("calculate1");
calculate1.addEventListener("click", function(){
  cal1();
  Sgpa();
  document.getElementById("changes").innerHTML = `YOUR SGPA THIS SEMESTER IS ${sgpa}`;
  msg.style.display = "block";
  container.style.display = "none";
})

//calculations for group 2

function cal2(){
  // --- Input Values ---
TotalEarned = 0;

let sicis = val("SICis2");
let sices = val("SICes2");
let siccie = val("SICcie2");
let sictw = val("SICtw2");
let sicatt = val("SICatt2");

let oopcis = val("OOPCis2");
let oopces = val("OOPCes2");
let oopccie = val("OOPCcie2");
let oopctw = val("OOPCtw2");
let oopcatt = val("OOPCatt2");

let qpis = val("QPis");
let qpes = val("QPes");
let qpcie = val("QPcie");
let qptw = val("QPtw");
let qpatt = val("QPatt");

let mfris = val("MFRis");
let mfres = val("MFRes");
let mfrcie = val("MFRcie");
let mfrtw = val("MFRtw");
let mfratt = val("MFRatt");

let ieeeis = val("IEEEis");
let ieeees = val("IEEEes");
let ieeecie = val("IEEEcie");
let ieeeatt = val("IEEEatt");
let ieeetw = val("IEEEtw");

let ikscie = val("IKScie");
let ikstw = val("IKStw");
let iksatt = val("IKSatt");

let fabtw = val("FABtw");

let ccatw = val("CCAtw2");

// --- Calculations ---
totalsic = checkcredit(sicatt + siccie + (sicis * (20 / 30)) + (sices * (60 / 70)));
totaloopc = checkcredit(oopcatt + oopccie + (oopcis * (20 / 30)) + (oopces * (60 / 70)));
totaloopcl = checkcredit(oopctw * 4);
totalsictut = checkcredit(sictw * 4);
totalcca = checkcredit(ccatw * 4);

totalqp = checkcredit(qpatt + qpcie + (qpis * (20 / 30)) + (qpes * (60 / 70)));
totalmfr = checkcredit(mfratt + mfrcie + (mfris * (20 / 30)) + (mfres * (60 / 70)));
totalqpl = checkcredit(qptw * 4);
totalmfrl = checkcredit(mfrtw * 4);
totalieee = checkcredit(ieeeatt + ieeecie + (ieeeis * (20 / 30)) + (ieeees * (60 / 70)));
totalieeel = checkcredit(ieeetw*4);

totalfab = checkcredit(fabtw * 4);

totaliks = checkcredit((iksatt + ikscie) * 4);
totalikstw = checkcredit(ikstw * 4);

// --- Final SGPA Credit Earned ---
TotalEarned =
  totalsic * credit.sic +
  totalsictut * credit.sicl +
  totaloopc * credit.oopc +
  totaloopcl * credit.oopcl +
  totalqp * credit.qp +
  totalqpl * credit.qpl +
  totalmfr * credit.mfr +
  totalmfrl * credit.mfrl +
  totalieee * credit.ieee + 
  totalieeel * credit.ieeel +
  totalfab * credit.fab +
  totaliks * credit.iks +
  totalikstw * credit.iksl +
  totalcca * credit.cca;
}

let calculate2 = document.getElementById("calculate2");
calculate2.addEventListener("click", function(){
  cal2();
  Sgpa();
  document.getElementById("changes").innerHTML = `YOUR SGPA THIS SEMESTER IS ${sgpa}`;
  msg.style.display = "block";
  container.style.display = "none";
})

function showHomePage() {
  msg.style.display = "none";
  container.style.display = "flex";
  container.classList.remove('show-group1', 'show-group2');
}

rtn.forEach(function(button) {
  button.addEventListener('click', showHomePage);
});