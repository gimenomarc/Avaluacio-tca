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
