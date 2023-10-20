import "./App.css";
import "./mobileStyles.css";
import "./whatsAppIcon.css";
import "boxicons";

import { Header } from "./componentes/header/index";
import { Portada } from "./componentes/portada/index";
import { Container1 } from "./componentes/contenedores/container1";
import { Container2 } from "./componentes/contenedores/container2";
import { Container3 } from "./componentes/contenedores/container3";
import { Container4 } from "./componentes/contenedores/container4";
import { Container5 } from "./componentes/contenedores/container5";
import { WhatsAppIcon } from "./componentes/whatsAppIcon/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Portada />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <WhatsAppIcon />
    </div>
  );
}

export default App;
