import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from "react"

function App() {

const [professionals, setProfessional] = useState([])

const toNewProfessional = (professional) => {
  setProfessional([...professionals, professional])
}

  return (
    <div className="App">
      <Banner />
      <Form toProfessional={professional => toNewProfessional(professional)} />
    </div>
  );
}

export default App;
