const textArea = document.getElementById('text');
const btnBold = document.getElementById('bold');
const btnItalic = document.getElementById('italic');
const btnUnderline = document.getElementById('underline');
const alignLeft = document.getElementById('align-left');
const alignRight = document.getElementById('align-right');
const alignCenter = document.getElementById('align-center');
const alignJustify = document.getElementById('align-justify');
const size = document.getElementById('size');
const color = document.getElementById('color');



  function fontWeight(value){
  textArea.style.fontWeight = value;
}
function fontStyle(value){
  textArea.style.fontStyle = value;
}
function textDecoration(value){
textArea.style.textDecoration = value;
}
function alignText(value){
  textArea.style.textAlign = value;
}
function sizeFun(value){
  textArea.style.fontSize = value + 'px';
}
function colorFun(value){
  textArea.style.color = value;
}