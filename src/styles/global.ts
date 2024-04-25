import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar {
        width: 10px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.text};
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    }

    body {
        display: flex;
        flex-direction: column;
        background-color: ${(props) => props.theme.colors.background};
        width: 100%;
        margin: 0 auto;
        font-family: sans-serif;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`;
