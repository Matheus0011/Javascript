// createElement = atribui elementos HTML
// createTextNode = Atribui texto em um HTML
// setAttribute = Adiciona atributos HTML na variavel - sempre dois atributos
// appendChild = atribui variaveis HTML dentro de outras variaveis HTML


let listaelementos = document.querySelector("#applist ul");       // Procura o elemento dentro da div
let entradaElemento = document.querySelector("#applist input");   // Procura o elemento dentro da div
let botaoelementos = document.querySelector("#applist button");   // Procura o elemento dentro da div

let tarefas = JSON.parse(localStorage.getItem("@lista")) || [];     // Cria uma array

function renderTarefa(){
    listaelementos.innerHTML = '';    // Atribui uma string vazia para a lista

    tarefas.map((todo)=>{                                        // .map cria um loop passando por todas as posiçoes do array, e colocando na variavel "todo"
        let lielemento = document.createElement("li");             // cria uma variavel com o elemento "li" de um html
        //console.log(todo);
        let textodaTarefa = document.createTextNode(todo);        // Atribui o texto do array em forma de elemento dentro de uma nova variavel 

        let linkElemento = document.createElement("a");
        linkElemento.setAttribute ("href", "#");

        let posiçao = tarefas.indexOf(todo);

        linkElemento.setAttribute("onclick", "deletarTarefa(" + posiçao + ")");

        linkTexto = document.createTextNode(" Excluir");
        linkElemento.appendChild(linkTexto);

        lielemento.appendChild(textodaTarefa);                     // coloca o teto da tarefa dentro da variavel com o elemento "li"
        lielemento.appendChild(linkElemento);
        listaelementos.appendChild(lielemento);                    // coloca a variavel com "li" e o texto de uma posiçao do array dentro da lista
    })
}

renderTarefa();

function addTarefa(){                                             //
    if(entradaElemento.value === ''){                             // se nao tiver nada em entrada de elemento, manda um alerta
        alert("escreve alguma coisa");
    }else{
        let novaTarefa = entradaElemento.value;                   // atribui o valor do texto imput do html dentro deoutra variavel

        tarefas.push(novaTarefa);                                 // coloca dentro da array tarefa pelo .push
        entradaElemento.value = '';                               // limpa a variavel de input, pois ja guardou o texto digitado na array
        renderTarefa();                                           //chama a funçao acima
        salvarBanco();
    }
}

botaoelementos.onclick = addTarefa;                               //quado o botão e clicado, chama a funçao acima

function deletarTarefa(posiçao){
    itemDelete = tarefas[posiçao];
    alert("vai deletar o item: " + itemDelete);

    tarefas.splice(posiçao , 1);
    renderTarefa();
    salvarBanco();
}

function salvarBanco(){

    localStorage.setItem("@lista" , JSON.stringify(tarefas));
}