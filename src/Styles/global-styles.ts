import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        &:not(input){
            user-select: none;
        }
    }
    html{
        height: 100%;
        min-height: calc(100% + env(safe-area-inset-top));
    }
    body{
        width: 100%;
        height: 100%;
        font-size: 16px;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    input, textarea{
        -webkit-appearance: none;
        text-align: center;
        &:focus, &:active{
            outline:none
        }
    }
    img{
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    #root{
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
