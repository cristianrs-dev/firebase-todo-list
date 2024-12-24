import { getAllTask } from "../services/firebaseService.js";
import {getDocs} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";




//FUNÇÃO PARA EXIBIR A LISTA DE TAREFAS DE UM USUARIO
export async function renderTaskUser(){

    const tarefasQuery = await getAllTask();
    const asks = await getDocs(tarefasQuery);
  
    asks.forEach((doc) => {
    document.getElementById("tbody").innerHTML+=`
                            <tr>
                            <th scope="row">1</th>
                            <td>${JSON.stringify(doc.data().descricao)}</td>
                            <td>${JSON.stringify(doc.data().completa)}</td>
                            <td><button type="button" class="btn btn-primary">atualizar</button></td>
                            <td><button type="button" id="apagar" class="btn btn-danger">apagar</button></td>
                            </tr>`
  
      })
    }

   
 