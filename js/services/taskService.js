import { getAllTask } from "../services/firebaseService.js";
import {getDocs} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { deleteTask } from "../services/firebaseService.js";



//FUNÇÃO PARA EXIBIR A LISTA DE TAREFAS DE UM USUARIO

function delTask(event) {
  const id = event.target.dataset.id;
  console.log(typeof(id))
  console.log(`Botão de apagar clicado para a tarefa ID: ${id}`);
  deleteTask(id)
  
}




export async function renderTaskUser(){
    const tarefasQuery = await getAllTask();
    const asks = await getDocs(tarefasQuery);
    asks.forEach((doc) => {
    
    document.getElementById("tbody").innerHTML+=`
                            <tr>
                            <th scope="row">${doc.id}</th>
                            <td>${doc.data().descricao}</td>
                            <td>${doc.data().completa}</td>
                            <td><button type="button" data-target="#meuModal" onclick="modal();backModal()" class="btn btn-primary">atualizar</button></td>
                            <td><button type="button" data-id="${doc.id}" class="btn btn-danger">apagar</button></td>
                            </tr>`
                            
                                    
                            
      })

  const botoesApagar = document.querySelectorAll('.btn-danger');

  botoesApagar.forEach(botao => {
    botao.addEventListener('click', delTask);
  });

  function modal(){
    let modal = document.getElementById("meuModal")
    modal.style.display='block'
  }
  function fechar(){
    let modal = document.getElementById("meuModal")
    modal.style.display='none'
  }
  
  function backModal(){
    let modal = document.getElementById("meuModal")
    modal.classList.add("custom-modal-backdrop")
  }
      
    }
    
   
    

   
 