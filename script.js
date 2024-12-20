const inputTarefa = document.querySelector('.input-tarefa' );
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
    }

    inputTarefa.addEventListener ('keypress', function(e){
        if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        }
        });
        function criaTarefa(textoInput) {
            const li = criaLi();
            li.innerText = textoInput;
            tarefas.appendChild(li);
            limpaInput();
           criaBotaoApagar (li);}
         function limpaInput() {
            inputTarefa.value = '';
            inputTarefa.focus();
            }
         function criaBotaoApagar (li) {
                li.innerText += ' ';
                const botaoApagar = document.createElement('button');
                botaoApagar.innerText = 'Apagar';
                botaoApagar.setAttribute('class', 'apagar');
                botaoApagar.setAttribute('title', 'Apagar esta tarefa' );
                li.appendChild(botaoApagar);}
    document.addEventListener ('click', function (e) {
                    const el = e.target;
                    if (el.classList.contains('apagar')) {
                    el.parentElement.remove();
                    salvarTarefas();
                    }
                    });
                
