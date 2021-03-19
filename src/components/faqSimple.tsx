import React, { useState } from 'react';

function FaqSimple(props: {title: string, description: string, open: boolean}) {

    // Affiche un titre (props)
    // Affiche un paragraphe (props)
    // Il s'ouvre ou se ferme en fonction de la porps open
    // Créer h3 qui a une fonction qui contient une autre fonction 'setOpen' qui va changer la valeur de open
    
    //Declarer un state variable que on veut appeler "count"
    //Retourner un pragraphe qui affiche le nb de count
    //Créer un button qui a une fonction qui contient une autre fonction setCount qui va incrémenter le nb de count


    const [open, setOpen] = useState(props.open);
    // useSate permet de définir l'état de mon composant.
    // open = notre état
    // setOpen = fonction qui nous permet de changer notre état
    // useState(0) définie la valeur par défault de notre composant a 0

    return (
        <div className="faq-container">
            <div className="title-container">
                <h3 onClick={()=> setOpen(open === true ? false : true)}>{props.title}</h3>
            </div>
            <div>
                <p className={`${ open ? 'is-displayed' : ''}`}>
                    {props.description}
                </p>
            </div>
        </div>
    );
  }
  
  export default FaqSimple;
