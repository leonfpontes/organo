import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Squad from './components/Squad';
import { useState } from "react"

function App() {

  const squads = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

const [professionals, setProfessional] = useState([])

const toNewProfessional = (professional) => {
  setProfessional([...professionals, professional])
}

  return (
    <div className="App">
      <Banner />
      <Form 
        squads={squads.map((squad) => squad.name)} 
        toProfessional={professional => toNewProfessional(professional)} 
      />
      {squads.map((squad) => 
        <Squad 
          key={squad.name} 
          squadName={squad.name} 
          primaryColor={squad.primaryColor} 
          secondaryColor={squad.secondaryColor}
          professionals={professionals.filter((professional) => professional.squad === squad.name)}
        />)
      }
    <Footer />
    </div>
  );
}

export default App;
