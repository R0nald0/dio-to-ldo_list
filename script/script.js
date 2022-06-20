var recebeTexto = document.getElementById('recebeTexto');
let btn = document.getElementById("#btn-add");
var texto = document.querySelector('#descTarefa');
var ck ;

function adcionarNomeTarefa(){
    const  texoTarefa = texto.value;
    if(texoTarefa ==""){ return alert("insira uma tarega")}
     console.log(texoTarefa)
    criarlistTarefa(texoTarefa);
}

function criarlistTarefa(textoTarefa){
    
     //Create elements
     var novoElemento = document.createElement('span');
     let elementCheckBox = document.createElement('input');
     var divList = document.createElement('div')
    
     
     elementCheckBox.setAttribute('type','checkbox');
     
     var textoP = document.createTextNode(textoTarefa);
     novoElemento.appendChild(textoP);  
     
     

      divList.appendChild(elementCheckBox);
      divList.appendChild(novoElemento)   
      document.getElementById('itnsTarefa').appendChild(divList);
}

 //<input type="checkbox" id="checkTarefa" name="checkTarefa" value="tarefa">