function analizar(){
    let antiguedad = document.getElementById('antiguedad').value;
    let sueldo_basico = document.getElementById('sueldo_basico').value;
    let antiguedad1 = 0.20, antiguedad2 = 0.30, sueldo1 = 0.25, sueldo2 = 0.10;
    if(antiguedad === '' || sueldo_basico === ''){
        alert('Falta ingresar datos');
    }else if(Number(antiguedad) >= 2 && Number(antiguedad) <= 5){
        bono_antiguedad1 = antiguedad1 * sueldo_basico;
        if(Number(sueldo_basico) <= 1000){
            bono_concepto1 = sueldo1 * Number(sueldo_basico);
        }else if(Number(sueldo_basico) > 1000 && Number(sueldo_basico) <= 3500){
            bono_concepto1 = sueldo2 * Number(sueldo_basico);
        }
    }else{
        bono_antiguedad1 = antiguedad2 * Number(sueldo_basico);
        if(Number(sueldo_basico) <= 1000){
            bono_concepto1 = sueldo1 * Number(sueldo_basico);
        }else if(Number(sueldo_basico) > 1000 && Number(sueldo_basico) <= 3500){
            bono_concepto1 = sueldo2 * Number(sueldo_basico);
        }
    }
    neto_pagar = Math.round(Number(sueldo_basico) + bono_antiguedad1 + bono_concepto1);
    document.getElementById('bono_antiguedad').value = bono_antiguedad1;
    document.getElementById('bono_sueldo').value = bono_concepto1;
    document.getElementById('neto_pagar').value = neto_pagar;
}

function borrar(){
    document.getElementById('antiguedad').value = '';
    document.getElementById('sueldo_basico').value = '';
    document.getElementById('bono_antiguedad').value = '';
    document.getElementById('bono_sueldo').value = '';
    document.getElementById('neto_pagar').value = '';
}              
document.getElementById('analizar').addEventListener('click',analizar);
document.getElementById('borrar').addEventListener('click',borrar);