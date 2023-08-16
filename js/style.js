let boldToggle = 0;
let italicToggle = 0;
let underlineToggle = 0;
btnBold.addEventListener('click', ()=>{
  if(boldToggle === 1){
    fontWeight('normal');
    boldToggle = 0;
  } else if(boldToggle === 0){
    fontWeight('bold');
    boldToggle = 1;
  }
})
btnItalic.addEventListener('click', ()=>{
  if(italicToggle === 1){
    fontStyle('normal');
    italicToggle = 0;
  } else if(italicToggle === 0){
    fontStyle('italic');
    italicToggle = 1;
  }
})
btnUnderline.addEventListener('click', ()=>{
  if(underlineToggle === 1){
    textDecoration('none');
    underlineToggle = 0;
  } else if(underlineToggle === 0){
    textDecoration('underline');
    underlineToggle = 1;
  }
})