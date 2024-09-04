import styled from "@emotion/styled/macro";

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  line-height: normal;
  font-size: 1.5rem;
`;

const InputEstilizada = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.espacamentos.xs};
  border-radius: ${(props) => props.theme.espacamentos.s};
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.neutras.a};
  background: ${(props) => props.theme.cores.branco};
  height: 2.5rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.0625rem;
`;

export const CampoTexto = ({ titulo }) => {
  return (
    <LabelEstilizada>
      {titulo}
      <InputEstilizada />
    </LabelEstilizada>
  );
};
