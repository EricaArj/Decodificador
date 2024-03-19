document.addEventListener("DOMContentLoaded", function() {
  let bcopiar = document.getElementById("bocopiar");
  bcopiar.style.display = "none";
});

function criptografar(){

  let textoInserido = document.getElementById('Txinserido').value;
  let textoCriptografado = '';

  for(i = 0; i < textoInserido.length; i++) {
      if (textoInserido[i] === 'a') {
          textoCriptografado += 'ai';
      } else if(textoInserido[i] === 'e'){
          textoCriptografado += 'enter';
      } else if(textoInserido[i] === 'i'){
          textoCriptografado += 'imes';
      } else if(textoInserido[i] === 'o'){
          textoCriptografado += 'ober';
      } else if(textoInserido[i] === 'u'){
          textoCriptografado += 'ufat';
      } else {
          textoCriptografado += textoInserido[i];
      }
  }
      
  let resultadoFinal = document.getElementById('noTxt');
      resultadoFinal.innerText = textoCriptografado;
      resultadoFinal.style.padding = '2rem'; 
  let atualizarFinal = document.getElementById('noMsg');
      atualizarFinal.style.display = "none"; 
  let imgFinal = document.getElementById('imgResult');
      imgFinal.style.display = "none"; 
  let bcopiar = document.getElementById("bocopiar");
      bcopiar.style.display = "block";
  let espaco = document.getElementById("section2");
      espaco.style.gap = "20rem";
  
  let letrasMaiusculas = textoInserido.match(/[A-Z]/g);
  let acento = textoInserido.match(/[À-ÖÙ-Üà-öù-ü]/g);

      if(letrasMaiusculas){
          document.getElementById('noTxt').innerText = 'O texto inserido contém Letra(s) Maiúscula(s)! Tente novamente com Letras Minúsculas.';
          bcopiar.style.display = "none";
      } else if (acento){
          document.getElementById('noTxt').innerText = 'O texto inserido contém Acento(s)! Tente novamente sem utilizar Acento(s).';
          bcopiar.style.display = "none";
      } else if (textoInserido.trim() === '') {
          document.getElementById('noTxt').innerText = 'Não há o que Criptografar!';
          bcopiar.style.display = "none";
      }
      
      document.getElementById('bocopiar').addEventListener('click', function() {
          let textoCopiado = document.createElement("textarea");
          textoCopiado.value = textoCriptografado;
          document.body.appendChild(textoCopiado);
          textoCopiado.select();
          document.execCommand('copy');
          document.body.removeChild(textoCopiado);
  
          let copyButton = document.getElementById('bocopiar');
          copyButton.classList.add('elementos__resultado__copiar__copiado');
          copyButton.innerText = 'Copiado';
  
          setTimeout(function() {
              copyButton.classList.remove('elementos__resultado__copiar__copiado');
              copyButton.innerText = 'Copiar';
          }, 1000);
  
       
      });
};

function descriptografar(){

  let textoInserido = document.getElementById('Txinserido').value;
  let textoDescriptografado = '';

  for(let i = 0; i < textoInserido.length; i++) {
      if (textoInserido.substring(i, i + 2) === 'ai') {
          textoDescriptografado += 'a';
          i++;
      } else if(textoInserido.substring(i, i + 5) === 'enter') {
          textoDescriptografado += 'e';
          i += 4;
      } else if(textoInserido.substring(i, i + 4) === 'imes') {
          textoDescriptografado += 'i';
          i += 3;
      } else if(textoInserido.substring(i, i + 4) === 'ober') {
          textoDescriptografado += 'o';
          i += 3;
      } else if(textoInserido.substring(i, i + 4) === 'ufat') {
          textoDescriptografado += 'u';
          i += 3;
      } else {
          textoDescriptografado += textoInserido[i];
      }
  }

  let resultadoFinal = document.getElementById('noTxt');
      resultadoFinal.innerText = textoDescriptografado;
      resultadoFinal.style.padding = '2rem'; 
  let atualizarFinal = document.getElementById('noMsg');
      atualizarFinal.style.display = "none"; 
  let imgFinal = document.getElementById('imgResult');
      imgFinal.style.display = "none"; 
  let bcopiar = document.getElementById("bocopiar");
      bcopiar.style.display = "block";
  let espaco = document.getElementById("section2");
      espaco.style.gap = "20rem";

      let letrasMaiusculas = textoInserido.match(/[A-Z]/g);
      let acento = textoInserido.match(/[À-ÖÙ-Üà-öù-ü]/g);
  
          if(letrasMaiusculas){
              document.getElementById('noTxt').innerText = 'O texto inserido contém Letra(s) Maiúscula(s)! Tente novamente com Letras Minúsculas.';
              bcopiar.style.display = "none";
          } else if (acento){
              document.getElementById('noTxt').innerText = 'O texto inserido contém Acento(s)! Tente novamente sem utilizar Acento(s).';
              bcopiar.style.display = "none";
          } else if (textoInserido.trim() === '') {
              document.getElementById('noTxt').innerText = 'Não há o que Descriptografar!';
              bcopiar.style.display = "none";
          }
  
          document.getElementById('bocopiar').addEventListener('click', function() {
              let textoCopiado = document.createElement("textarea");
              textoCopiado.value = textoDescriptografado;
              document.body.appendChild(textoCopiado);
              textoCopiado.select();
              document.execCommand('copy');
              document.body.removeChild(textoCopiado);
          });

          document.getElementById('bocopiar').addEventListener('click', function() {
              let textoCopiado = document.createElement("textarea");
              textoCopiado.value = textoDescriptografado;
              document.body.appendChild(textoCopiado);
              textoCopiado.select();
              document.execCommand('copy');
              document.body.removeChild(textoCopiado);
      
              let copyButton = document.getElementById('bocopiar');
              copyButton.classList.add('elementos__resultado__copiar__copiado');
              copyButton.innerText = 'Copiado';
      
              setTimeout(function() {
                  copyButton.classList.remove('elementos__resultado__copiar__copiado');
                  copyButton.innerText = 'Copiar';
              }, 1000);
      
           
          });  

};