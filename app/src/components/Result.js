import React, { useState } from 'react';

export function eval_test(llista,imc){
    let vomit = false;
    let medicament = false;
    let exercici = false;
    let dieta = false;

    if (eval_anorexia_nerviosa(llista,imc)){
        if (eval_vomit(llista)){
            vomit = true;
        }
        if (eval_medicament(llista)){
            medicament = true;
        }
        if (vomit || medicament){
            if (vomit && !medicament && !eval_fartaneres(llista)){
                return <div>El diagnostic final es anorexia nerviosa amb purgues de vomit.</div>
            }else if(!vomit && medicament && !eval_fartaneres(llista)){
                return <div>El diagnostic final es anorexia nerviosa amb purges de medicament.</div>
            }else if(vomit && medicament && !eval_fartaneres(llista)){
                return <div>El diagnostic final es anorexia nerviosa amb purges de vomit i medicament.</div>
            }else if(vomit && medicament && eval_fartaneres(llista)){
                return <div>El diagnostic final es purges amb vomit i medicament, i trastorn de fartaneres</div>
            }else if(vomit && !medicament && eval_fartaneres(llista)){
                return <div>El diagnostic final es purges de vomit amb transtorn de fartaneres</div>
            }else{
                return <div>El diagnostic final es purges de medicament amb transtorn de fartaneres</div>
            }
        }else{
            if(eval_exercici(llista) && eval_an_restrictiu_dieta(llista)){
                return <div>El diagnostic final es anorexia nerviosa amb restricció d'exercici i dieta.</div>
            }else if(eval_exercici(llista) && !eval_an_restrictiu_dieta(llista)){
                return <div>El diagnostic final es anorexia nerviosa amb restricció d'exercici</div>
            }else if(!eval_exercici(llista) && eval_an_restrictiu_dieta(llista)){
                return <div>El diagnostic final es anorexia nerviosa amb restricció de dieta</div>
            }else{
                return <div>El diagnostic final es anorexia nerviosa</div>
            }
        }
    }else if(eval_bulimia_nerviosa(llista,imc)){
        if (eval_vomit(llista) && eval_exercici(llista) && eval_medicament(llista)){
            return <div>El diagnostic final es bulimia nerviosa amb vomits, exercici i medicaments</div>
        }else if(!eval_vomit(llista) && eval_exercici(llista) && eval_medicament(llista)){
            return <div>El diagnostic final es bulimia nerviosa amb exercici i medicaments.</div>
        }else if(!eval_vomit(llista) && !eval_exercici(llista) && eval_medicament(llista)){
            return <div>El diagnostic final es bulimia nerviosa amb medicaments.</div>
        }else if(eval_vomit(llista) && !eval_exercici(llista) && eval_medicament(llista)){
            return <div>El diagnostic final es bulimia nerviosa amb vomits i medicaments.</div>
        }else if(eval_vomit(llista) && !eval_exercici(llista) && !eval_medicament(llista)){
            return <div>El diagnostic final es bulimia nerviosa amb vomits.</div>
        }else if(!eval_vomit(llista) && eval_exercici(llista) && !eval_medicament(llista)){
            return <div>El diagnostic final es bulimia nerviosa amb exercici.</div>
        }else if(eval_vomit(llista) && eval_exercici(llista) && !eval_medicament(llista)){
            return <div>El diagnostic final es builimia nerviosa amb vomits i exercici.</div>
        }else{
            return <div>El diagnostic final es bulimia nerviosa</div>
        }
    }else if(eval_fartaneres(llista)){
            return <div>El diagnostic final es transtorn de fartaneres.</div>
    }else if(eval_teria(llista,imc)){
            return <div>El diagnostric final es transtorn de evitació/restricció de la ingesta d'aliments</div>
    }else if(eval_ruminacio(llista)){
        return <div>El diagnostic final es transtorn de ruminació</div>
    }else if(eval_pica(llista)){
        return <div>El diagnostric final es PICA.</div>
    }else{
        return <div>El diagnostic final no es compatible amb cap TCA.</div>
    }
}

export function validate_test(llista_resp){
    if (!validate_items_infrequencia(llista_resp)){
        return false;
    }else if (!validate_items_correlacionats(llista_resp)){
        return false;
    }else if (!eval_patro_repetitiu(llista_resp)){
        return false;
    }else if (!eval_patro_repetitiu_2(llista_resp)){
        return false;
    }else{
        return true;
    }
}

function eval_anorexia_nerviosa(resposta,imc){
    return (imc && resposta['AS']['bool'] && resposta['P']['bool'] && resposta['AP']['bool']['F']);
}

function eval_fartaneres(resposta){
    return( resposta['FG']['bool'] && resposta['FC']['bool']);
}

function eval_vomit(resposta){
    return resposta['V']['bool'];
}

function eval_medicament(resposta){
    return resposta['CM']['bool'];
}

function eval_an_restrictiu_dieta(resposta){
    return resposta['D']['bool'];
}

function eval_exercici(resposta){
    return resposta['EF']['bool'];
}

function eval_bulimia_nerviosa(resposta,imc){
    return (!imc && resposta['FG']['bool'] && resposta['FC']['bool'] && resposta['AS']['bool'] && resposta['AP']['bool']);
}

function eval_teria(resposta,imc){
    return (resposta['RM']['bool'] && (resposta['CS']['bool'] || resposta['SOAA']['bool'] || imc));
}

function eval_ruminacio(resposta){
    return resposta['R']['bool'];
}

function eval_pica(resposta){
    return resposta['CSNN']['bool'];
}

function is_acord(pregunta){
    return (pregunta === 3 || pregunta === 4);
}

function is_desacord(pregunta){
    return (pregunta === 0 || pregunta === 1);
}

function eval_mateixa_resposta(resposta1,resposta2){
    return ((is_acord(resposta1) && is_acord(resposta2)) || (is_desacord(resposta1) && is_desacord(resposta2)) || (resposta1 === resposta2));
}

function eval_resposta_oposada(resposta1,resposta2){
    return ((is_acord(resposta1) && is_desacord(resposta2)) || (is_desacord(resposta1) && is_acord(resposta2)) || (resposta1 === 2 &&  resposta2 === 2));
}

function validate_items_infrequencia(llista){
    if (llista[19] < 3){
        return false;
    }else if(llista[12] < 3){
        return false;
    }else if(llista[64] > 1){
        return false;
    }else if(llista[71] < 3){
        return false;
    }else if(llista[84] < 3){
        return false;
    }else{
        return true;
    }
}

function validate_items_correlacionats(llista){
    let valor = 7;

    if (eval_resposta_oposada(llista[14],llista[77])){
        valor -= 1;
    }
    if (eval_resposta_oposada(llista[0],llista[45])){
        valor -= 1;
    }
    if (eval_resposta_oposada(llista[46],llista[76])){
        valor -= 1;
    }
    if (eval_resposta_oposada(llista[33],llista[65])){
        valor -= 1;
    }
    if (eval_resposta_oposada(llista[44],llista[8])){
        valor -= 1;
    }
    if (eval_resposta_oposada(llista[83],llista[39])){
        valor -= 1;
    }
    if (eval_resposta_oposada(llista[32],llista[79])){
        valor -= 1;
    }
    if (valor < 5){
        return false;
    }else{
        return true;
    }
}

function comptar_elements_llista(llista,elemento){
    const contador = llista.reduce((count, num) => {
        if (num === elemento) {
            return count + 1;
        }
        return count;
        }, 0);
}

function eval_patro_repetitiu(llista){
    if (comptar_elements_llista(llista,0) > 78){
        return false;
    }
    else if (comptar_elements_llista(llista,1) > 78){
        return false;
    }
    else if (comptar_elements_llista(llista,2) > 78){
        return false;
    }
    else if (comptar_elements_llista(llista,3) > 78){
        return false;
    }
    else if (comptar_elements_llista(llista,4) > 78){
        return false;
    }else{
        return true;
    }
}

function eval_patro_repetitiu_2(list_respostes) {
  // Se evalúa si todas las respuestas del test se han respondido de manera 0 1 2 3 4 
  // Es decir, Totalmente en desacuerdo, en desacuerdo, indiferente, de acuerdo, totalmente de acuerdo 
  // De forma cíclica
  let string_list = '';
  for (let value of list_respostes) {
    string_list += value.toString();
  }
  let string_patro = '01234';
  let matches = string_list.match(new RegExp(string_patro, 'g'));
  if (matches && matches.length === 17) {
    return false;
  } else {
    return true;
  }
}
