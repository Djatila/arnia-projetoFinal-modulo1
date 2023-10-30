const formulario=document.getElementById('formulario')

const cadastrarAluno= async (cadAluno)=>{
    await fetch('https://db-json-pscy.onrender.com/cadAluno',{
        method: 'POST',
        headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
        },
        
        
        body:JSON.stringify(cadAluno)
    })

    window.location="index-student.html"
}

formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        const nome=formulario.elements['nome'].value
        const turma=formulario.elements['turma'].value

    const cadAluno={
        nome,
        turma
        
    }
        
        cadastrarAluno(cadAluno)
    
})

    let imgNormal = "images/key.png";
    let imgAnter  = "images/inative.png";

    function trocaImg(){
        document.getElementById("mudaImg").src= imgNormal;
        let out = imgNormal;
        imgNormal = imgAnter;
        imgAnter = out
    }