
function triangle(e){


   const base=  getInputValue('baseField');
   const heaight=  getInputValue('heaightField');
   if(isNaN(base) || isNaN(heaight)){
 
      alert("please insert number")
      return;

   }else{

    
      const aria=0.5 *base*heaight;
      setTextValue('areaTotal',aria);
   }
   // let count =0;
   // const name =e.parentNode.childNodes[1].innerText;
   // const totalArea=e.parentNode.childNodes[7].innerText.split(' ')[1];
   // const calculation= document.getElementById("calculation-container");
   // const p= document.createElement('p');
   // p.setAttribute('class','mb-4 ');
   // p.innerHTML = ` ${count +1}.  ${name}   ${totalArea}<span>cm <sup>2</sup> </span>   <button class="btn btn-primary text-white">Convert to m2</button> `;
   
   // calculation.appendChild(p)

   setAreaCalculation(e);

}


function rectangle(e){

   const width=  getInputValue('widthField');
   const length=  getInputValue('lengthField');
   if(isNaN(width) || isNaN(length)){
 
      alert("please insert number")
      return;

   }else{

    
      const aria= width*length;
      setTextValue('areaTotalRect',aria);
   }

   setAreaCalculation(e);
}


function Parallelogram(e){

   const paraWidth=  getInputValue('paraWidthField');
   const paraHeaight=  getInputValue('ParaHeaightField');
   if(isNaN(paraWidth) || isNaN(paraHeaight)){
 
      alert("please insert number")
      return;

   }else{

    
      const aria= paraWidth*paraHeaight;
      setTextValue('ParallelogramText',aria);
   }

   setAreaCalculation(e);

}


function ellipse(e){

   const majorFiled=  getInputValue('largeField');
   const minorField=  getInputValue('shortField');

   if(isNaN(majorFiled) || isNaN(minorField)){
 
      alert("please insert number")
      return;

   }else{

    
      const aria= 3.14* majorFiled*minorField;
      setTextValue('ellipseText',aria.toFixed(3));
   }

   setAreaCalculation(e);

}




function rhombus(e){
   const rhombusFieldP=  getInputValue('rhombusField-p');
   const rhombusFieldQ=  getInputValue('rhombusField-q');


   if(isNaN(rhombusFieldP) || isNaN(rhombusFieldQ)){
 
      alert("please insert number")
      return;

   }else{

    
      const aria= 0.5 * rhombusFieldP *rhombusFieldQ;
      setTextValue('rhombusText',aria);
   }
   setAreaCalculation(e);
  

}
function pentagon(e){
   const pentagonP=  getInputValue('pentagon-p');
   const pentagonB=  getInputValue('Pentagon-b');

   if(isNaN(pentagonP) || isNaN(pentagonB)){
 
      alert("please insert number")
      return;

   }else{

    
      const aria= 0.5 * pentagonP *pentagonB;
      setTextValue('pentagonText',aria);
   }

}

