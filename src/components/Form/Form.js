import "./Form.css"
import InputText from "../InputText"
import { Select } from "../Select/Select"
import { Button } from "../Button/Button"

export const Form = () => {
    const squad = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText mandatory={true} label="Nome" placeholder="Digite seu nome"/>
                <InputText mandatory={true} label="Cargo" placeholder="Digite seu cargo"/>
                <InputText mandatory={true} label="Imagem" placeholder="Informe o endereço da imagem"/>
                <Select mandatory={true} label="Time" item={squad}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}