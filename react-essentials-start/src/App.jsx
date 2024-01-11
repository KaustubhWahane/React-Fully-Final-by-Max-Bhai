import { useState } from 'react';
import TabButton from './TabButton';
import {CORE_CONCEPTS , EXAMPLES} from './data'

function CoreConcepts(props){
    return(
      <li>
        <img src= {props.image} alt={props.title} />  
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )
  }
function App() {
  const [selectedTopic , setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    // selectedButton => "components" , "jsx" , "props" , "state  "
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
       <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <pre>Fundamental React concepts you will need for almost any app you are going to build!</pre>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
     <main>
       <section id="core-concepts">
        {/* Long Method */}
         <CoreConcepts
         title={CORE_CONCEPTS[0].title}
         description={CORE_CONCEPTS[0].description}
         image = {CORE_CONCEPTS[0].image}
         />
         {/* Short-Cut Method */}
         <CoreConcepts {...CORE_CONCEPTS[1]}/>
         <CoreConcepts {...CORE_CONCEPTS[2]}/>
         <CoreConcepts {...CORE_CONCEPTS[3]}/>
       </section>
     <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={() => { handleSelect("components") }}>Component</TabButton>
        <TabButton onSelect={() => { handleSelect("jsx") }}>JSX</TabButton>
        <TabButton onSelect={() => { handleSelect("props") }}>Props</TabButton>
        <TabButton onSelect={() => { handleSelect("state") }}>State</TabButton>
      </menu>
      {/* Conditional Rendering */}
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
     </section>
     </main>
    </div>
  );
}

export default App;
