import {addTask, getAllTasks } from "./utils/domFunctions.js";

//Banco de Dados NoSQL - Orientado a Documentos. MongoDB, Firebase, Cassandra.
//console.log(db[0].steps[2].step)
// items: [{item1:1}, {item:2}, {item:3}]

const db = [
    {
        id: 1,
        title: "Concluir App Conexão Arte",
        steps: [
            {step: "Ajustar textos"},
            {step: "Trocar imagens para imagens públicas"},
            {step: "Publicar no Expo"},
            {step: "Publicar no Expo Store Connect"},
    ],
    done: false,
    dueDate: "2022-05-06",
    reminder: "2022-05-02 10:00",
    },
        {
         
        id: 2,   
        title: "Aula 4 Fiap - Avanade",
        teps: [{ step: "Atributos Globais" }, { step: "Estrutura CSS" }],
        done: true,
        dueDate: "2022-04-28",
        },
            
  ];

getAllTasks(db);

// console.log(db[0].title);
//DOM - Document Object Model - é o JavaScript acessando o HTML e manipulando ele.
//HTML ele é complicado pelo navegador em uma árvore de comandos, chamado DOM.

const newTask = document.querySelector("#inputTxtNewTask");
const form = document.querySelector("#addNewTask");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Form faz um favor? Pois não! Não faz nada....
});

newTask.addEventListener("keyup", (e) => { 
    
    e.preventDefault();
    e.stopPropagation();
    if(e.key == "Enter") {
        // Se newTask. valeu for ao contrário de true. Ou seja se for false, se estiver vazio.
        if(!newTask.value) {
            alert("Digite uma nova tarefa, para adicionar.");
        } else {
            // alert(newTask.value);

            const d = new Date();
            const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

            db.push({ id: Number(db.length) + 1, title: newTask.value, done: false, dueData: today});

            
            
            document.querySelector(".tasks").innerHTML = "";
            getAllTasks(db);

            //tentar fazer com addtask

            newTask.value = "";
            console.log(db);
            }
        
    }
    
});


// //exemplo de array
// const frutas = ["maçã", "banana", "abacaxi", "abacate"];

// //frutas [3]
// //frutas.length;
// //frutas[frutas.length -1];
// console.log(frutas.flat(-1));

// //Criando um objeto literal
// //JavaScript Object Notation - JSON
// const dados = {
//     nome: "Danilo Albuquerque",
//     idade: 28,
//     programador: true,
//     acao: () => {
//         console.log("Executando uma ação");
//     },

// };

// //Objeto é um conjunto de atributos(propriedades ou valores) e métodos(métodos ações e funções)
// console.log(dados.nome);
// console.log("Idade: ", dados.idade);
// },
// };