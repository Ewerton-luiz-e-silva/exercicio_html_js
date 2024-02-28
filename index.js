const form = document.getElementById('form');
const saldoa = document.getElementById('saldoa');
const saldob = document.getElementById('saldob');
const acerto = document.getElementById('saquerealizado');
const erro = document.getElementById('erro');

function sacandoDinheiro(saldoa, saldob){
    return saldob > saldoa ;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = sacandoDinheiro(saldoa.valueAsNumber, saldob.valueAsNumber)
    if(validarForm){
        acerto.style.display = 'block';
        saldoa.value='';
        saldob.value='';
    }
})

saldob.addEventListener('keyup', function(e){
    let validarForm = sacandoDinheiro(saldoa.valueAsNumber, saldob.valueAsNumber)
    if(!validarForm){
        erro.style.display = 'block';
        acerto.style.display = 'none';
    } else{
        erro.style.display = 'none';
    }
})