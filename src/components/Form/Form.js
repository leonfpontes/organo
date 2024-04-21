import "./Form.css"
import InputText from "../InputText"
import { Select } from "../Select/Select"
import { Button } from "../Button/Button"
import { useState } from "react"

export const Form = (props) => {
    //CRIANDO LISTA DO SELECT PARA PASSAR POR PARÂMETRO DE CRIAÇÃO DO COMPONENTE
    const squad = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]

    // GET E SET DE VALORES DOS CAMPOS (ARMAZENANDO ESTADOS COM REACT)
    const [getName, setName] = useState('')
    const [getPosition, setPosition] = useState('')
    const [getImage, setImage] = useState('')
    const [getSquad, setSquad] = useState('')

    // CAPTURANDO EVENTO DO SUBMIT DO FORMULÁRIO
    const onSave = (event) => {
        event.preventDefault()
        props.toProfessional({
            getName,
            getPosition,
            getImage,
            getSquad
        })
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={getName} //pega valor do campo
                    onChange={valor => setName(valor)} //atualiza o novo valor do campo
                />
                <InputText 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={getPosition}
                    onChange={valor => setPosition(valor)}
                    />
                <InputText 
                    mandatory={true} 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={getImage}
                    onChange={valor => setImage(valor)}
                    />
                <Select 
                    mandatory={true} 
                    label="Time" 
                    item={squad}
                    value={getSquad}
                    onChange={valor => setSquad(valor)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}