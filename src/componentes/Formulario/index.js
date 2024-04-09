import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='form'>
            <form>
                <h2>
                    Preencha os campos para criar o card do colaborador: 
                </h2>
                <CampoTexto label="Nome" placeholder='Digite seu nome' />
                <CampoTexto label="Cargo" placeholder='Digite seu cargo' />
                <CampoTexto label="Imagem" placeholder='Digite o endereço da imagem' />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario 