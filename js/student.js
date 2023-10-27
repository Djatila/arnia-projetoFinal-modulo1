
const getAlunos = async ()=>{
    const apiURL = await fetch('http://localhost:3000/cadAluno')
    const cadAluno = await apiURL.json()
    mostrarAlunos(cadAluno)

}

const mostrarAlunos=(cadAluno)=>{
    let tabela=document.querySelector('tbody')
    tabela.innerHTML=''

    cadAluno.forEach((aluno)=>{
        let alunoHTML = `

    <div class="trjs">
        <tr >
           <td class="nomeTurma">${aluno.nome}</td>
           <td class="nomeTurma1">${aluno.turma}</td>
           <td><img src="images/key.png" class="key7" id="mudaImg" ></td>
           <td> <img src="images/botton_blue.png"
 class="action7" onclick="editStudent(${aluno.id})">
 
 <img src="images/botton_trash.png"
 class="action7" onclick="excluir(${aluno.id})"></td>
           
        </tr>
        
        
       
        </div>
        `
        tabela.innerHTML=tabela.innerHTML + alunoHTML

    })

}
getAlunos()


const excluir = async(id)=>{
    await fetch(`http://localhost:3000/cadAluno/${id}`,{method:'DELETE'})
    getAlunos()
}

const editStudent=(id)=>{
    window.location=`index-userstudent.html?id=${id}`
}

