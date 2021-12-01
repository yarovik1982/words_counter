const init = ()=>{

let str = document.querySelector("#text-inp");
const out = document.querySelector(".content_output");
const word = "слов";
const mess = "Текст содержит ";
const o   = "о";
const a   = "а";

document.addEventListener("click", e=>{
   e.preventDefault();
   
   if(e.target.id == "exe") {
      
      // removeSpaces();
   // countWord();
   showMessage();
   // addWordsEnd();
} else {
   return;
}
})

const removeSpaces = ()=>{
   let newStr = str.value;
   let text = newStr.replace(/\s+/g, ' ').trim();
   str.value = "";
   str.value = text;
   // if(newStr == ""){
   //    out.textContent = "Введите текст!";
   // }
   // console.log(str.value);
   return str.value;
}
const countWord = ()=>{
   let text = removeSpaces();
   let arrWord = text.split(" ");
   let num = arrWord.length;
   // console.log(num);
   // console.log(arrWord);
   return arrWord;
}

const showMessage = ()=>{
   let arrWord = countWord();
   let num = arrWord.length;
   let n = num % 10;
console.log(arrWord);
   if(num < 3){
      out.textContent = "Введите более трех слов";
      return;
   }
  
   if((num > 20 && n === 1) || (n === 1)){
      out.textContent = `${mess}${num} ${word}${o}`;
      return;
   }
   if((n === 2 && num > 20) || (n === 3 && num >20) || (n === 4 && num > 20) || (n === 2) || (n === 3) || (n === 4)){
      out.textContent = `${mess}${num} ${word}${a}`;
      return;
   }
   if((5<=n<=9 && num > 20) || (5 <= n <=9)){
      out.textContent = `${mess}${num} ${word}`;
      return;
   }
   if (str.value == ""){
      // removeSpaces()
      return;
   }
}
}
init();