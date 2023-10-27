const formulario=document.getElementById('formulario')
let alunoId = null 

const getIdUrl=()=>{
     const paramString=window.location.search
     const params= new URLSearchParams(paramString)
     alunoId=params.get('id');
    
}

const carregarAluno = async ()=>{
    const retorno=await fetch(`http://localhost:3000/cadAluno/${alunoId }`)
    const aluno= await retorno.json()
    return aluno
    
}

const carregarAlunoForm = async (aluno)=>{
    document.getElementById('nome').value=aluno.nome
    document.getElementById('turma').value=aluno.turma
    
}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome=formulario.elements['nome'].value
    const turma=formulario.elements['turma'].value

const cadAluno={
    nome,
    turma
    
}
    
    editAluno(cadAluno)

})

const showDados = async ()=>{
    getIdUrl()
    const aluno= await carregarAluno()
    carregarAlunoForm(aluno)
}



const editAluno = async(cadAluno)=>{
    await fetch(`http://localhost:3000/cadAluno/${alunoId}`,{
        method: 'PUT',
        headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
        },
        
        
        body:JSON.stringify(cadAluno)
        
    })
    window.location="index-student.html"

}



showDados()