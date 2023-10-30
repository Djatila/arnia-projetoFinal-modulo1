const formulario=document.getElementById('formulario')
let profId = null 

const getIdUrl=()=>{
    const paramString=window.location.search
    const params= new URLSearchParams(paramString)
    profId=params.get('id');
   

}

const buscarProf = async ()=>{
    const retorno=await fetch(`https://db-json-pscy.onrender.com/cadProf/${profId }`)
    const prof= await retorno.json()
    return prof
    
}

const carregarDadosFormulario = async (prof)=>{ 
    document.getElementById('nome').value=prof.nome
    document.getElementById('perfil').value=prof.perfil
    document.getElementById('disciplina').value=prof.disciplina
   
}


const carregarProf = async ()=>{
    getIdUrl()
    const prof=await buscarProf()
    carregarDadosFormulario(prof)
}

editarProf = async(prof)=>{
    await fetch(`https://db-json-pscy.onrender.com/cadProf/${profId}`,{
        method: 'PUT',
        headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
        },
        
        
        body:JSON.stringify(prof)
    })

    window.location="index-teacher.html"
}


formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome=formulario.elements['nome'].value
    const perfil=formulario.elements['perfil'].value
    const disciplina=formulario.elements['disciplina'].value
    
    
    let cadCargo2

    const tipCargo = formulario.elements['tipCargo'];
        if(tipCargo === 'professor') {
            cadCargo2 = {
                tipo: 'professor',
                nome,
                perfil,
                disciplina,
               
            };

        } else if (tipCargo === 'coordenador'){
            cadCargo = {
                tipo:'coordenador',
                nome,
                perfil,
               
            };
        }

   

const prof={
    nome,
    perfil,
    disciplina,
    
    
    
}
    
    editarProf(prof)

})  

carregarProf()

let imgNormal = "images/key.png";
let imgAnter  = "images/inative.png";

function trocaImg(){
    document.getElementById("mudaImg").src= imgNormal;
    let out = imgNormal;
    imgNormal = imgAnter;
    imgAnter = out
}