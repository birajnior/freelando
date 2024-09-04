import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import { Card } from "./components/Card/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { Footer } from "./components/footer/Footer";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Tipografia } from "./components/Tipografia/Tipografia";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Card>
        <Tipografia variante="h3" componente="h1">
          Crie seu cadastro
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo" />
      </Card>
      <Footer subtitulo="Desenvolvido por Alura. Projeto fictício sem fins comerciais." />
    </ProvedorTema>
  );
}

export default App;
