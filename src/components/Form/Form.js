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
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite seu nome"/>
                <InputText label="Cargo" placeholder="Digite seu cargo"/>
                <InputText label="Imagem" placeholder="Informe o endereço da imagem"/>
                <Select label="Time" item={squad}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}