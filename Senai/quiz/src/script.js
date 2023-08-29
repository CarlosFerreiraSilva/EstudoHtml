var correto = 0
var errado = 0
var tela = document.getElementById('tela')
        var Primeira = document.getElementById('Primeira')
        var Segunda = document.getElementById('Segunda')
        var Tereceira = document.getElementById('Tereceira')
        var Quarto = document.getElementById('Quarto')
        var res = document.getElementById('res')
        var text = document.getElementById('text')
        var progresso = document.getElementById('progresso')
        var corpo = document.getElementById('corpo')
        var audioErrado = document.getElementById('errado')

        function playErrado(){
            audioErrado.play();
        }
        function clickPic(){
            tela.style.display = 'none'
            Primeira.style.display = 'flex'
            corpo.style.display = 'block'
        }

        function Pergunta1(params) {
            if (params == 1) {
                alert('Resposta Correta!')
                correto++
                Primeira.style.display = 'none'
                Segunda.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">Mico leão Pintudo</h2>`
            }else{
                audioErrado.play();
                errado++
                Primeira.style.display = 'none'
                Segunda.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">Mico leão Pintudo</h2>`
            }
            atualizarProgresso()
        }

        function Pergunta2(params) {
            if (params == 1) {
                alert('Resposta Correta!')
                correto++
                Segunda.style.display = 'none'
                Tereceira.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">Mico leão tetudo</h2>`

            }else{
                playErrado()
                errado++
                Segunda.style.display = 'none'
                Tereceira.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">Mico leão tetudo</h2>`
            }
            atualizarProgresso()
        }

        function Pergunta3(params) {
            if (params == 1) {
                alert('Resposta Correta!')
                correto++
                Tereceira.style.display = 'none'
                Quarto.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">Mico leão bombastico</h2>`

            }else{
                playErrado()
                errado++
                Tereceira.style.display = 'none'
                Quarto.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">Mico leão bombastico</h2>`
            }
            atualizarProgresso()
        }

        function Pergunta4(params) {
            if (params == 1) {
                alert('Resposta Correta!')
                correto++
                Quarto.style.display = 'none'
                res.style.display = 'block'
                res.innerHTML = `<h1 style="font-weight: bolder;">Sua Quantidade de Acertos é ${correto}/4</h1>`
                text.innerHTML = ''

            }else{
                playErrado()
                errado++
                res.innerHTML = `<h1 style="font-weight: bolder;">Sua Quantidade de Acertos é ${correto}/4</h1>`
                Quarto.style.display = 'none'
                res.style.display = 'block'
                text.innerHTML = ''
            }
            progresso.style.display = 'flex'
            atualizarProgresso()
        }



        function atualizarProgresso() {
            var progressSegmentOne = document.getElementById("correto");
            var progressSegmentTwo = document.getElementById("errado");
    
            var widthIncrementCorreto = 25 * correto;
            var widthIncrementErrado = 25 * errado;
    
            progressSegmentOne.style.width = widthIncrementCorreto + "%";
            progressSegmentOne.setAttribute("aria-valuenow", widthIncrementCorreto);
    
            progressSegmentTwo.style.width = widthIncrementErrado + "%";
            progressSegmentTwo.setAttribute("aria-valuenow", widthIncrementErrado);
        }
    
        // Chamando a função de aumento do correto para simular o aumento
        // Você pode chamar essa função sempre que necessário para aumentar o correto
        aumentarcorreto();