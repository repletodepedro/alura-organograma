import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../botao';
import { useState } from 'react';

const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({ nome, cargo, imagem, time })
        setNome('')
        setCargo('')
        setImage('')
        setTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImage] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>
                    Preencha os campos para criar o card do colaborador:
                </h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto label="Imagem" placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImage(valor)} />
                <ListaSuspensa obrigatorio={true} label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario 