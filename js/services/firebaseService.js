import { db } from "../config/firebaseConfig.js";
import {doc,getDoc,getDocs,setDoc,updateDoc,collection,deleteField,query,where,deleteDoc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

//AQUI FICAM OS SERVIÇOS BASICOS DE CRUD, CODIGO PURO DO FIREBASE
//FUNÇÃO PARA ADICIONAR TASK
export async function addTask(tarefa,user,descricao,status) {

    const cityRef = doc(db, "tarefas", tarefa);
      setDoc(cityRef,
      { 
        completa:status,
        descricao:descricao,
        usuario:user
      }, 
      //linha responsavel por mesclar as informações no documento sem substituir as informações que existem lá
        { merge: true }
  );
}

//FUNÇÃO PARA LER TODAS AS TASK DE UM USUARIO

export async function getAllTask(){
  let usuario = await getUser()
  
  if (usuario.empty) {
    throw new Error("Nenhum usuário encontrado.");
  }
//lê todos os documentos de uma coleção com relação ao usuario referenciado
const tarefas = query(collection(db, "tarefas"),
                
                    where("completa", "not-in", [""]),
                  where("usuario","==",usuario.docs[0].ref)

);
return tarefas
}


//DELETAR UM DOCUMENTO INTEIRO
export async function deleteTask(id) {
  await deleteDoc(doc(db, "tarefas", id));
}
 

//ATUALIZAR UM DOCUMENTO
export async function updateTask(colecao,documento,user,descricao,status) {

  const task = doc(db, colecao, documento);
  await updateDoc(task, {
    completa:status,
    descricao:descricao,
    usuario:user

});
  
}



//FUNÇÃO PARA BUSCAR UM USUARIO ESPECIFICO
async function getUser() {
    const users = collection(db, "users");
    const user = query(users,where("nome","==","cristian"));
    const usuario = await getDocs(user)
    
    if (usuario.empty) {
       
       throw new Error("Usuário não encontrado.");
  }
  
  return usuario;
}








