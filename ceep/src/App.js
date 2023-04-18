import React, { Component } from "react";
import Lista from "./componentes/lista";
import FormularioCadastro from "./componentes/formularioCadastro"
class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <Lista/>
      </section>
    );
  }

}

export default App;
