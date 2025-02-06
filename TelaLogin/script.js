function ShowHide(){
    let senha = document.getElementById('pword')

    if(senha.type==='password'){
        senha.setAttribute('type','text')
    } else{
        senha.setAttribute('type','password')
    }
}