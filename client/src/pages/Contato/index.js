import React from "react";
import { Link } from "react-router-dom";
import { ContatoContainer } from "../../components/ContatoContainer";
import { InputPrincipal } from "../../components/InputPrincipal";
import { SubmitButton } from "../../components/SubmitButton";
import { TextAreaPrincipal } from "../../components/TextAreaPrincipal";



export function Contato(props) {

    return (

        <ContatoContainer>
            <div className="contatoContainer">
                <h1 className="contatoTitle">Contato</h1>
                <InputPrincipal type="text" placeholder="Nome" />
                <InputPrincipal type="text" placeholder="Titulo" />
                <TextAreaPrincipal type="textarea" placeholder="Descrição" />
                <div className="buttonContainer">
                <SubmitButton>                
                        <Link to="/contato" label="enviarContato" className="loginButtonStyle">Enviar</Link>                
                </SubmitButton>
                </div>
            </div>

            <div className="leaves"></div>
            <div className="leaves2"></div>
        </ContatoContainer>
    )
}