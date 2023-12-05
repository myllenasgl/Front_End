import { useState } from "react"
import {doces} from "./retornaDados"


function Pesquisa(){
    const [doceRequisitado, setdoceRequisitado] = useState([])
    return(
        <section>
            <h1>Realize seu pedido agora!</h1>
            <input
                placeholder="informe a opção de doce"
                onBlur={(evento=>{
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = doces.filter(doce => doce.titulo.includes(textoDigitado))
                    setdoceRequisitado(resultadoPesquisa)
                })}
            ></input>
            {/* utilizar o map para mostrar na tela a lista de doce */}

            {doceRequisitado.map(doce=>(
                <div>
                    <p>{doce.titulo}</p>
                </div>
            ))

            }

        </section>
    )
}

export default Pesquisa