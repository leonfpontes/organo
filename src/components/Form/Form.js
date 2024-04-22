import { useState } from "react"
import { Button } from "../Button/Button"
import InputText from "../InputText"
import { Select } from "../Select/Select"
import "./Form.css"

export const Form = (props) => {

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
        setName('')
        setPosition('')
        setImage('')
        setSquad('')
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
                    item={props.squads}
                    value={getSquad}
                    onChange={valor => setSquad(valor)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}