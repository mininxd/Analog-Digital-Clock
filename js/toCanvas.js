export function capture() {
  capturedEl.setAttribute("src", "");
  html2canvas(clockWrapper, { 
    logging:false,
    useCORS: true,
    allowTaint: true,
    imageTimeout: 0,
    removeContainer: true,
    foreignObjectRendering:false,
  }).then((canvas) => {
    var image2canvas = canvas.toDataURL('image/png');
    capturedEl.setAttribute("src", image2canvas);
  })
}



