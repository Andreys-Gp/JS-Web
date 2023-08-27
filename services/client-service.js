const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

const crearCliente=(nombre,email)=>{
  fetch("http://localhost:3000/perfil",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({nombre,email})

  })
}
export const clientService = {
  listaClientes
}