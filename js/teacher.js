
const getProf = async ()=>{
    const apiURL = await fetch('http://localhost:3000/cadProf')
    const cadProf = await apiURL.json()
    mostrarProf(cadProf)

}

const mostrarProf=(cadProf)=>{
    let tabela=document.querySelector('tbody')
    tabela.innerHTML=''

    cadProf.forEach((prof)=>{
        let profHTML = `

    <div class="trjs">
        <tr >
           <td class="nomeTurma">${prof.nome}</td>
           <td class="nomeTurma1">${prof.perfil}</td>
           <td class="nomeTurma2">${prof.disciplina}</td>
           <td><img src="images/key.png" class="key7" id="mudaImg" ></td>
           <td> <img src="images/botton_blue.png"
 class="action7" onclick="editProf(${prof.id})">
 
 <img src="images/botton_trash.png"
 class="action7" onclick="excluir(${prof.id})"></td>
           
        </tr>
        
        
       
        </div>
        `
        tabela.innerHTML=tabela.innerHTML + profHTML

    })

}
getProf()


const excluir = async(id)=>{
    await fetch(`http://localhost:3000/cadProf/${id}`,{method:'DELETE'})
    getProf()
}

const editProf=(id)=>{
    window.location=`index-userteacher.html?id=${id}`
}

