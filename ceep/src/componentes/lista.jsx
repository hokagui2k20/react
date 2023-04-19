import React, { Component } from "react";
import CardNota from "./card_notas/CardNotas";
class Lista extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                    return (
                        <li key={index}>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default Lista;