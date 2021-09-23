import React from "react"
import { DateInput } from "../../../DateInput"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"

import "./styles.css"

export function Pagamento() {
  return (
    <>
    <div className="header">
        <h1 className="title">Pagamento</h1>
        <div className="info">
            <div className="input-container">
                <div className="input-capsule">
                    <InputPrincipal placeholder="Número do Cartão"  className="inputCadastro"/>
                </div>
                <div className="input-capsule">
                    <DateInput type="number" placeholder="Validade" className="inputCadastro"/>
                </div>
                <div className="input-capsule">
                <DateInput type="number" placeholder="CCV" className="inputCadastro"/>
                </div>
                <div className="input-capsule">
                    <InputPrincipal placeholder="Banco"  className="inputCadastro"/>
                </div>
                <div>
                <ButtonSub title="Continuar"/>
                </div>  
            </div>
        </div>
        
    </div>
    </>
  )
}
