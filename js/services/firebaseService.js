import { db } from "../config/firebaseConfig.js";
import {doc,getDoc,getDocs,setDoc,updateDoc,collection,deleteField,query,where,deleteDoc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


//FUNÇÃO PARA ADICIONAR TASK
function addTask() {

    const cityRef = doc(db, 'tarefas', 'tarefa5');
      setDoc(cityRef,
      { 
        completa:false,
        descricao:"adicinar dados",
        usuario:"/users/user1"
      }, 
      //linha responsavel por mesclar as informações no documento sem substituir as informações que existem lá
        { merge: true }
  );
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






