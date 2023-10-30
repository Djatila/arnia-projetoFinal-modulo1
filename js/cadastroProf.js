const formulario=document.getElementById('formulario')

const cadastrarProf= async (cadProf)=>{
    await fetch('https://db-json-pscy.onrender.com/cadProf',{
        method: 'POST',
        headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
        },
        
        
        body:JSON.stringify(cadProf)
    })

    window.location="index-teacher.html"
}

formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        const nome=formulario.elements['nome'].value
        const perfil=formulario.elements['perfil'].value
        const disciplina=formulario.elements['disciplina'].value

        let cadCargo

        const tipCargo = formulario.elements['tipCargo'];
        if(tipCargo === 'professor') {
            cadCargo = {
                tipo: 'professor',
                nome,
                perfil,
                disciplina
            };

        } else if (tipCargo === 'coordenador'){
            cadCargo = {
                tipo:'coordenador',
                nome,
                perfil
            };
        }

    const cadProf={
        nome,
        perfil,
        disciplina
        
    }
        
        cadastrarProf(cadProf)
    
})

    let imgNormal = "images/key.png";
    let imgAnter  = "images/inative.png";

    function trocaImg(){
        document.getElementById("mudaImg").src= imgNormal;
        let out = imgNormal;
        imgNormal = imgAnter;
        imgAnter = out
    }