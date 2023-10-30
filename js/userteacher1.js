
document.addEventListener('DOMContentLoaded', () => {
    const getProf = async () => {
        const apiURL = await fetch('https://db-json-pscy.onrender.com/cadProf');
        const cadProf = await apiURL.json();
        mostrarProf(cadProf);
    }

    const mostrarProf = (cadProf) => {
        let tabela = document.querySelector('tbody');
        tabela.innerHTML = '';

        cadProf.forEach((prof) => {
            let profHTML = `
                <div class="trjs">
                    <tr>
                        <td class="nomeTurma">${prof.nome}</td>
                        <td class="nomeTurma1">${prof.perfil}</td>
                        <td class="nomeTurma1">${prof.disciplina}</td>
                        <td><img src="images/key.png" class="key7" id="mudaImg"></td>
                        <td>
                            <img src="images/botton_blue.png" class="action7" onclick="editTeacher(${prof.id})">
                            <img src="images/botton_trash.png" class="action7" onclick="excluir(${prof.id})">
                        </td>
                    </tr>
                </div>
            `;
            tabela.innerHTML = tabela.innerHTML + profHTML;
        });
    }

    const excluir = async (id) => {
        await fetch(`https://db-json-pscy.onrender.com/cadProf/${id}`, { method: 'DELETE' });
        getProf();
    }

    const editTeacher = (id) => {
        window.location = `index-teacher.html?id=${id}`;
    }

    getProf();
});