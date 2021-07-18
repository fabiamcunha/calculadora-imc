	
			var	calcular=document.getElementById('calcular');
			var limpar= document.getElementById('limpar');

			function imc(){
				var nome = document.getElementById('nome').value;
				var peso = document.getElementById('peso').value;
				var altura = document.getElementById('altura').value;
				var resultado= document.getElementById('resultado');
				// se nome,altura e peso forem diferentes de vazio executa o bloco if  senao executa o else
				if(nome!=='' && altura!=='' && peso!==''){
					
					var valorIMC =(peso/(altura*altura)).toFixed(2);
					var classificacao='';

					if(valorIMC<18.5){
						classificacao='abaixo do peso.'
					}else if(valorIMC<24.9){
						classificacao=' no peso ideal.'
					}else if(valorIMC<29.9){
						classificacao='sobrepeso'
					}else if(valorIMC<34.9){
						classificacao='obesidade 1'
					}else if(valorIMC<39.9){
						classificacao='obesidade 2'
					}else if(valorIMC>=40){
						classificacao='grau de obesidade severa'
					}


					resultado.textContent=`Ola ${nome} seu IMC e de ${valorIMC} e você esta ${classificacao} `;

				}else {
					resultado.textContent='preencha todos os campos!!';
				}
		}

			calcular.addEventListener('click',imc);
		function limparform(){
			document.getElementById('nome').value="";
			document.getElementById('peso').value="";
			document.getElementById('altura').value="";
			document.getElementById('resultado').innerHTML="";

		}
		limpar.addEventListener('click',limparform)

				