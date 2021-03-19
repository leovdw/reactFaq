import React from 'react';
import logo from './logo.svg';
import './App.css';
import FaqSimple from './components/faqSimple';
import { data } from './faqContent.json';

// J'aimerai que nous génerions les 4 faq en faisant une boucle sur le fichier faqData
// pass a function to map
let faqHolder: JSX.Element[] = [];

// Pour que ma fonction faq fonctionne elle a besoin d'un paramètre qui nous envoit de la donnée
// Cette donnée doit être sous une certaine forme, 
// {title: string, description: string}[]
// C'est a dire que la paramètre doit contenir un tableau d'objects
// Qui contiens title et description
let index = 0;

function faq (dataParam: { title: string, description: string, open: boolean }[]) {
  for (index; index <= dataParam.length -1; index++){
    const title = dataParam[index].title;
    const description = dataParam[index].description; 
    const open = dataParam[index].open;
    // On veut générer une FAQ grâce au tableau de donnée
    // Et pousser la FAQ dans faqHolder
    faqHolder.push(<FaqSimple 
      title={title} 
      description={description}
      open={open}
    />);
  }
  return faqHolder
}



function App() {
  return (
    <div className="App">
      <div className="faq">
        {faq(data)}
      </div>
    </div>
  );
}

export default App;
