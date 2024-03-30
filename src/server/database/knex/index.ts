import { knex } from 'knex';

import { development, production, test } from './Environment';


const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
    console.log("1")  
    return production;
    case 'test': 
    console.log("2")
    return test;

    default: 
    
    console.log("3")
    return development;
  }
};

export const Knex = knex(getEnvironment());