import styled from "@emotion/styled/macro";

const FooterEstilizado = styled.footer`
  color: ${(props) => props.theme.cores.branco};
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl};
`;

export const Footer = ({ subtitulo }) => {
  return <FooterEstilizado>{subtitulo}</FooterEstilizado>;
};
