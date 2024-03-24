export function detikFun() {
 var detik = new Date().getSeconds();
  var detikan = detik * 6;
  if(detikan == 0) {
    arrowS_Wrapper.style.transition = "0s";
  } else {
    arrowS_Wrapper.style.transition = "0.3s ease";
  }
  detikan += eval(-90);
  arrowS_Wrapper.style.transform = "translate(-50%,-50%) rotate(" + detikan + "deg)";
}

  
export function menitFun() {
  var menit = new Date().getMinutes();
  var menitan = menit * 6;
  if(menitan == 0) {
    arrowM_Wrapper.style.transition = "0s";
  } else {
    arrowM_Wrapper.style.transition = "0.3s ease";
  }
  menitan += eval(-90);
  arrowM_Wrapper.style.transform = "translate(-50%,-50%) rotate(" + menitan + "deg)";
  arrowM_Wrapper.style.opacity = 1;
}

  
  export function jamFun() {
  var jam = new Date().getHours();
  var jaman = jam * 30;
  if(jaman == 0) {
    arrowH_Wrapper.style.transition = "0s";
  } else {
    arrowH_Wrapper.style.transition = "0.3s ease";
  }
  jaman += eval(-90);
  arrowH_Wrapper.style.transform = "translate(-50%,-50%) rotate(" + jaman + "deg)";
  arrowH_Wrapper.style.opacity = 1;
}