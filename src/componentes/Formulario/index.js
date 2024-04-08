import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {
    const times = [
        'Nome 1',
        'Nome 2',
        'Nome 3'
    ]

    return (
        <section className='form'>
            <form>
                <h2>
                    Preencha os campos para criar o card do colaborador: 
                </h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
                {/* <ListaSuspensa itens={times}/> */}
            </form>
        </section>
    )
}

export default Formulario 