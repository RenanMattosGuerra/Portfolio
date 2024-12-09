function ModoTrocar(radio) {
    if (radio.value === 'mescuro') {
        document.body.classList.add('modo-escuro'); // Adiciona o modo escuro
    } else {
        document.body.classList.remove('modo-escuro'); // Remove o modo escuro
    }
}