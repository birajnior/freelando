import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "#ffffff",
    atencao: "",
    focus: "",
    primarias: {
      a: "#5754ed",
      b: "",
      c: "",
    },
    secundarias: {
      a: "#ebeaf9",
      b: "",
      c: "",
    },
    neutras: {
      a: "#373737",
      b: "",
      c: "",
      d: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  espacamentos: {
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  fontFamily: '"Montserrat", sans-serif',
};

export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};
