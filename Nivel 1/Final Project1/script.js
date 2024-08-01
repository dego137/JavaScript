const inputText=document.getElementById('text-input')
const checkButton=document.getElementById('check-btn')
const resultDiv=document.getElementById('result')
const checkPal = (input)=>{
  let result=input
  if(input===''){
    alert('Please input a value') 
    return
  }
resultDiv.replaceChildren();//no entiendo aun esta linea
const lowerCase=input.replace(/[^A-Za-z0-9]/gi,'').toLowerCase()
let resultMsg = `<strong>${result}</strong> ${
    lowerCase === [...lowerCase].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`
  const pTag = document.createElement('p')
  pTag.className = 'user-input'
  pTag.innerHTML = resultMsg
  resultDiv.appendChild(pTag)
  // Show the result.
}
checkButton.addEventListener('click', () => {
  checkPal(inputText.value);
  inputText.value = '';
});
