import React from 'react';
import Card from './Card';

 const Cards = ({cources}) => {
  
  let allCources=[];

  const getCources = () =>{
    console.log(cources);
      Object.values(cources).forEach( (courceCategory) =>{
        courceCategory.forEach((cource)=>{
          allCources.push(cource);
        })
      })
    return allCources;
  }
  return (
    <div>
        {
          getCources().map( (cource) => {
          return (<Card key={cource.id} cource={cource}/>) 
        })
        }
    </div>
  )
}

export default Cards;