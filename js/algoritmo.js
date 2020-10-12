function calcular(){
    let kilos = document.getElementById('kilo_manzanas').value;
    let costo_kilo = document.getElementById('costo_kilo').value;
    let costo, descuento, igv, total_paga;
    let descuento1 = 0.10, descuento2 = 0.15, descuento3 = 0.20;
    costo = Number(kilos) * Number(costo_kilo);
    if (kilos === '' && costo_kilo === ''){
        alert('Falta ingresar datos');
    }else if(Number(kilos) >= 0 && Number(kilos) <= 2){
        document.getElementById('descuento').value = 0;
        descuento = 0 * costo;
    }else if(Number(kilos) >= 2.01 && Number(kilos) <= 5){
        document.getElementById('descuento').value = 10;
        descuento = descuento1 * costo;
    }else if(Number(kilos) >= 5.01 && Number(kilos) <= 10){
        document.getElementById('descuento').value = 15;
        descuento = descuento2 * costo;
    }else{
        document.getElementById('descuento').value = 20;
        descuento = descuento3 * costo;
    }
    igv = costo * 0.18;
    total_paga = (costo - descuento) + igv;
    document.getElementById('costo_total').value = costo;
    document.getElementById('igv').value = igv;
    document.getElementById('total_pagar').value = total_paga;
}

function limpiar(){
    document.getElementById('kilo_manzanas').value = '';
    document.getElementById('costo_kilo').value = '';
    document.getElementById('costo_total').value = '';
    document.getElementById('descuento').value = '';
    document.getElementById('igv').value = '';
    document.getElementById('total_pagar').value = '';
}              
document.getElementById('calcular').addEventListener('click',calcular);
document.getElementById('limpiar').addEventListener('click',limpiar);


