size.value = 24;
sizeFun(size.value);
size.addEventListener('keyup', (e)=>{
  if (e.key === 'Enter'){
    sizeFun(size.value);
  }
})
size.addEventListener('click', ()=>{
  sizeFun(size.value);
});

color.addEventListener('change', function() {
    console.log(color.value);
    colorFun(color.value)
});
