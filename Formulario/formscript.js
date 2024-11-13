    document.addEventListener("DOMContentLoaded", function() {
        const inteiraSelect = document.getElementById("inteira");
        const meiaSelect = document.getElementById("meia");
        const totalDisplay = document.getElementById("total");
        const inteiraPrice = 20; // Preço do ingresso inteiro
        const meiaPrice = 10;    // Preço do ingresso meia

    function updateTotal() {
        const inteiraCount = parseInt(inteiraSelect.value);
        const meiaCount = parseInt(meiaSelect.value);
        const totalPrice = (inteiraCount * inteiraPrice) + (meiaCount * meiaPrice);
        totalDisplay.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    }

    inteiraSelect.addEventListener("change", updateTotal);
    meiaSelect.addEventListener("change", updateTotal);
});

function checar(){   
    const inteiraSelect = document.getElementById("inteira");
    const meiaSelect = document.getElementById("meia");
    const inteiraCount = parseInt(inteiraSelect.value);
    const meiaCount = parseInt(meiaSelect.value);
    if (inteiraCount + meiaCount == 0){
        window.alert('Selecione pelo menos 1 ingresso para continuar.')
    }
}