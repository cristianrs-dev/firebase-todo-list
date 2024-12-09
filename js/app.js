
 /* 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, getDoc,getDocs,setDoc,updateDoc,collection,deleteField, query, where,deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDZfgyulyET6IqiC7yIWK79X3fKu-g_HX4",
    authDomain: "todo-list-52d3e.firebaseapp.com",
    projectId: "todo-list-52d3e",
    storageBucket: "todo-list-52d3e.firebasestorage.app",
    messagingSenderId: "470227550432",
    appId: "1:470227550432:web:2cbfce1b8e9193495a9085",
    measurementId: "G-M3RD99L4ZG"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
*/
import { renderTaskUser } from "../js/services/taskService.js";

  renderTaskUser()


















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

 await deleteDoc(doc(db, "tarefas", "tarefa3"));
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




