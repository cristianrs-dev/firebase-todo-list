import { getAllTask } from "../services/firebaseService.js";
import {getDocs} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { deleteTask,updateTask } from "../services/firebaseService.js";



//FUNÇÃO PARA EXIBIR A LISTA DE TAREFAS DE UM USUARIO








function delTask(event) {
  const id = event.target.dataset.id;
  //console.log(typeof(id))
  //console.log(`Botão de apagar clicado para a tarefa ID: ${id}`);
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
                            <td><button type="button" data-bs-toggle="modal" data-bs-target="#meuModal" id="atualizar" data-id="${doc.id}"  class="btn btn-primary">atualizar</button></td>
                            <td><button type="button" data-id="${doc.id}" class="btn btn-danger">apagar</button></td>
                            </tr>`
                            
                                    
                            
      })

      
      const botaoAtualizar = document.querySelectorAll(".btn-primary")
      const modal = document.getElementById("meuModal")
      botaoAtualizar.forEach(botao =>{
        botao.addEventListener("click",()=>{
          modal.style.display='block'
          modal.classList.add("custom-modal-backdrop")
        })
      })


    
      const botoesApagar = document.querySelectorAll('.btn-danger');
      botoesApagar.forEach(botao => {
      botao.addEventListener('click', delTask);
      });
  
      const fechar = document.getElementById("fechar")
      fechar.addEventListener("click",()=>{
      modal.style.display='none'
  })
  
}
    
   


   
 