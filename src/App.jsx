//importações
import Exemple from "./components/Exemple";
import Hello from "./components/Hello"

const App = () => {
  // Javascript -> Implementando tudo o que já conhecem
  const name = "Cauan";
  const name2 = "Vilson"

  //Não vamos utilizar:
  //querySelector
  //DOM Methods: appendChild, createElement
  //addEventListener

  const example = (mensagem) => {
    console.log("Eae galerinha!")
    console.log(mensagem)
  }

  const carro = {
    marca: "Honda",
    modelo: "HRV"
  };

  const {marca, modelo} = carro;


  return (
    //JSX -> Junção de HTML com JS
    <> {/*Fragment*/}
      <header className="header-container">
        <h1>Demo 1 - Primeiros passos</h1>
      </header>
      <Exemple/>
      <Exemple/>
      <Exemple/>
      <Exemple/>
      <Hello/>

      <p>Isso é um parágrafo</p>
      <h2>Instrutor {name}</h2>
      <button onClick={() => example("Olá pessoal")}>Exemple</button>
      <p>{name2}</p>
      <h3>Meu carro:</h3>
      <p>Marca: {marca}</p>
      <p>Modelo: {modelo}</p>

      <footer>
        footer
      </footer>
    </>
  )
}

export default App
