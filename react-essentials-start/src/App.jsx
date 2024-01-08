import {CORE_CONCEPTS} from './data'

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
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
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
     </main>
    </div>
  );
}

export default App;
