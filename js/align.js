let alignLeftToggle = 0;
let alignRightToggle = 0;
let alignCenterToggle = 0;
let alignJustifyToggle = 0;
alignLeft.addEventListener('click', ()=>{
  if(alignLeftToggle === 1){
    alignText('left');
    alignLeft.style.scale = 1;
    alignLeftToggle = 0;
  } else if(alignLeftToggle === 0){
    alignText('left');
    alignLeft.style.scale = 1.25;
    alignLeftToggle = 1;
    alignRightToggle = 0;
    alignCenterToggle = 0;
    alignJustifyToggle = 0;
  }
})
alignRight.addEventListener('click', ()=>{
  if(alignRightToggle === 1){
    alignText('left');
    alignRight.style.scale = 1;
    alignRightToggle = 0;
  } else if(alignRightToggle === 0){
    alignText('right');
    alignRight.style.scale = 1.25;
    alignRightToggle = 1;
  }
})
alignCenter.addEventListener('click', ()=>{
  if(alignCenterToggle === 1){
    alignText('left');
    alignCenter.style.scale = 1;
    alignCenterToggle = 0;
  } else if(alignCenterToggle === 0){
    alignText('center');
    alignCenter.style.scale = 1.25;
    alignCenterToggle = 1;
  }
})
alignJustify.addEventListener('click', ()=>{
  if(alignJustifyToggle === 1){
    alignText('left');
    alignJustify.style.scale = 1;
    alignJustifyToggle = 0;
  } else if(alignJustifyToggle === 0){
    alignText('center');
    alignJustify.style.scale = 1.25;
    alignJustifyToggle = 1;
  }
})