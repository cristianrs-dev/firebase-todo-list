
import { renderTaskUser } from "../js/services/taskService.js";
import { deleteTask } from "./services/firebaseService.js";



  renderTaskUser()

//AQUI SERÁ A INTERAÇÃO COM O HTML

document.addEventListener("DOMContentLoaded", () => {
  let apagar = document.getElementById("apagar");
  if (apagar) {
    apagar.addEventListener("click", deleteTask);
  } else {
    console.error("Elemento com ID 'apagar' não encontrado.");
  }
});

  

















//adiciona uma nova tarefa

/*
// le uma tarefa
const docRef = doc(db, "tarefas", "tarefa1");
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
   // document.getElementById("descricao").innerHTML=JSON.stringify(docSnap.data().descricao)
   // document.getElementById("status").innerHTML=JSON.stringify(docSnap.data().completa)
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
/*
const q = query(collection(db, "tarefas"), where("completa", "not-in", [""]));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  document.getElementById("tbody").innerHTML+=`
                          
                           <tr>
                          <th scope="row">1</th>
                          <td>${JSON.stringify(doc.data().usuario.nome)}</td>
                          <td>${JSON.stringify(doc.data().descricao)}</td>
                          <td>${JSON.stringify(doc.data().completa)}</td>
                          <td><button type="button" class="btn btn-primary">atualizar</button></td>
                          <td><button type="button" class="btn btn-danger">apagar</button></td>
                          </tr>
  `

}); */


/*
DELETAR UM DOCUMENTO INTEIRO

 await deleteDoc(doc(db, "tarefas", "tarefa4"));
 */


/**
 * remover um campo
 * const cityRef = doc(db, 'tarefas', 'tarefa3');

// Remove the 'capital' field from the document
await updateDoc(cityRef, {
    descricao: deleteField()
});
 */

/**
 * ATUALIZAR UM DOCUMENTO
 * const washingtonRef = doc(db, "tarefas", "tarefa");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  descricao: true
});
 
 */




