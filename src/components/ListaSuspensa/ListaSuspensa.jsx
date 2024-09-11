import { useState } from "react";
import styled from "@emotion/styled";
import { ListaSuspensaEstilizada } from "./ListaSuspensaEstilizada";
import { ItemListaSuspensaEstilizado } from "./ItemListaSuspensaEstilizado";

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
  position: relative;
`;

const BotaoEstilizado = styled.button`
  cursor: pointer;
  display: block;
  height: 2.5rem;
  width: 100%;
  font-size: 1.125rem;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 1.125rem;
  border-bottom-left-radius: ${(props) =>
    props.estaAberta ? "0" : "1.125rem"};
  border-bottom-right-radius: ${(props) =>
    props.estaAberta ? "0" : "1.125rem"};
  margin-top: ${(props) => props.theme.espacamentos.xs};
  padding: ${(props) => props.theme.espacamentos.s};
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  &:focus {
    border-color: ${(props) => props.theme.cores.focus};
  }
`;

export const ListaSuspensa = ({ titulo, opcoes }) => {
  const [estaAberta, alternarVisibilidade] = useState(false);
  const [opcaoFocada, setOpcaoFocada] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const manipularTeclaDoTeclado = (evento) => {
    alternarVisibilidade(true);
    switch (evento.key) {
      case "ArrowDown":
        evento.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (focoAntigo == null) {
            return 0;
          }

          return (focoAntigo += 1);
        });
        break;
      case "ArrowUp":
        evento.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (!focoAntigo) {
            return 0;
          }
          return (focoAntigo -= 1);
        });
        break;
      case "Enter":
        evento.preventDefault();
        setOpcaoFocada(null);
        alternarVisibilidade(false);
        setOpcaoSelecionada(opcoes[opcaoFocada]);
        break;
      default:
        break;
    }
  };

  return (
    <LabelEstilizada>
      {titulo}
      <BotaoEstilizado
        estaAberta={estaAberta}
        onClick={() => alternarVisibilidade(!estaAberta)}
        onKeyDown={manipularTeclaDoTeclado}
      >
        <div>{opcaoSelecionada ? opcaoSelecionada.text : "Selecione"}</div>
        <div>
          <span>{estaAberta ? "▲" : "▼"} </span>
        </div>
      </BotaoEstilizado>
      {estaAberta && (
        <ListaSuspensaEstilizada>
          {opcoes.map((opcao, index) => (
            <ItemListaSuspensaEstilizado
              key={opcao.value}
              focoAtivo={index === opcaoFocada}
              onClick={() => {
                setOpcaoSelecionada(opcao);
              }}
            >
              {opcao.text}
            </ItemListaSuspensaEstilizado>
          ))}
        </ListaSuspensaEstilizada>
      )}
    </LabelEstilizada>
  );
};
