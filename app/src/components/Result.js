import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Option from './Option';
import Button from './Button';
import questions from '../data/questions';
import {make_inverter} from './Auxiliar';
import Values from '../data/Values';
import answers  from '../data/answers';

const Result = ({responses, list_responses}) =>{
    
  console.log(responses[0]);
  console.log(list_responses[0]);
}


export default Result;
