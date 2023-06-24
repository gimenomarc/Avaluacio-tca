import React, { useState } from 'react';


export function make_inverter(option){
        let value = 0;
        console.log(value,option);
        if (option === 0){
            value = 4;
        }else if (option === 1){
            value = 3;
        }else if (option === 3){
            value = 1;
        }else if (option === 4){
            value = 0;
        }else{
            value = 2;
        }
        return value;
}


