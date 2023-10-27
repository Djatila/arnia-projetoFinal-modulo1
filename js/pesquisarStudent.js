const profil3 = document.getElementById('profil5');
const tabelaDados = document.getElementById('tbody2');

profil3.addEventListener('keyup', () => {
    let expressao = profil3.value.toLowerCase(); 
    
    let tbodyCode = tabelaDados.getElementsByTagName('tr');
   
    for (let local in tbodyCode) {
        if (true === isNaN(local)) {
            continue;
        }
 
        let mostrarLocal = tbodyCode[local].innerHTML.toLowerCase(); // 
        if (true === mostrarLocal.includes(expressao)) {
            tbodyCode[local].style.display = '';
        } else {
            tbodyCode[local].style.display = 'none';
        }
    }
});