function getInputValue(inputId){

    const inputValue=document.getElementById(inputId);
    const valueText=inputValue.value;
    const value =parseFloat(valueText);
    inputValue.value="";
return value;
}

function setTextValue(id,value){
    const idValue =document.getElementById(id);
    idValue.innerText=value;
    
}


function setAreaCalculation(e){

  
    let count =0;
   const name =e.parentNode.childNodes[1].innerText;
   const totalArea=e.parentNode.childNodes[7].innerText.split(' ')[1];
   const calculation= document.getElementById("calculation-container");
   const p= document.createElement('p');
   p.setAttribute('class','mb-4 ');
   p.innerHTML = ` ${count +1}.  ${name}   ${totalArea}<span>cm <sup>2</sup> </span>   <button class="btn btn-primary text-white">Convert to m2</button> `;
   
   calculation.appendChild(p)


}