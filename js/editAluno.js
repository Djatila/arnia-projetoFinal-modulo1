const formulario=document.getElementById('formulario')
let alunoId = null 

const getIdUrl=()=>{
    const paramString=window.location.search
    const params= new URLSearchParams(paramString)
    alunoId=params.get('id');
   

}

const buscarAluno = async ()=>{
    const retorno=await fetch(`http://localhost:3000/cadAluno/${alunoId }`)
    const aluno= await retorno.json()
    return aluno
    
}

const carregarDadosFormulario = async (aluno)=>{ 
    document.getElementById('nome').value=aluno.nome,
    document.getElementById('turma').value=aluno.turma
   

    
}


const carregarAluno = async ()=>{
    getIdUrl()
    const aluno=await buscarAluno()
    carregarDadosFormulario(aluno)
}

editarAluno = async(aluno)=>{
    await fetch(`http://localhost:3000/cadAluno/${alunoId}`,{
        method: 'PUT',
        headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
        },
        
        
        body:JSON.stringify(aluno)
    })

    window.location="index-student.html"
}


formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome=formulario.elements['nome'].value
    const turma=formulario.elements['turma'].value
    
   

const aluno={
    nome,
    turma
    
    
}
    
    editarAluno(aluno)

})  

carregarAluno()