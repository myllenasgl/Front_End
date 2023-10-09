import React from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times=[
        'Brigadeiro',
        'Beijinho',
        'Surpresa de Uva',
        'Oreo',
        'Paçoca',
        'Churros',
        'Ninho com Nutella'
    ]
    return (
        <section className='formulario'>
        <form>
            
            <CampoTexto label="Nome" placeholder="Informe seu nome"/>
            <CampoTexto label="Telefone" placeholder="Informe seu telefone"/>
            <CampoTexto label="Quantidade" placeholder="Quantidade desejada"/>
            <label>Doces</label>
            <ListaSuspensa itens={times}/>
        </form>
        </section>
    );
}

export default Formulario;