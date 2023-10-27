
const buscarprof = async( )=>{
    const url=await fetch(``)
    const prof = await url.json( )
    Content.innerHTML=content.innerHTML + 
    `<li>
    <i,g class="" src=""${elemnto.thmbnail}
    </li>`

}


const timestamp = (new Date()).getTime()
const publicKey = ''
const privateKey = ''
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)



buscarCidaden=async (cidade) =>{
    const url=await fetch(``)
    let cidades = await url.json( )
    console.log(cidades)
    cidades.forEach((item)=>{
        console.log{item.englishName}
    })

}
buscarCidade()