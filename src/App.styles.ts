import styled, {createGlobalStyle} from "styled-components";
import BgImg from './images/unsplash.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }
    body {
        background-image: url(${BgImg});
        background-size: cover;
        background-position: center;
        margin: 0;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;


    }
    *{
        box-sizing: border-box;
    }
    h1, p {
        color: whitesmoke;
    }

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .score{
        font-size: 2rem;
        margin: 20px 0 0;

    }

    h1 {
        background-image: linear-gradient(180deg, #B6EADA, #5B8FB9);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #150050);
        font-size: 50px;
        text-align: center;
        margin: 20px;

    }

    .start, .next{
        cursor: pointer;
        background: linear-gradient(180deg, rgb(63, 0, 113), rgb(21, 0, 80));
        border: 2px solid #B6EADA;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        color: whitesmoke;
        transition: 0.3s ease;
        font-size: 1.2rem;
    }

    .start:hover, .next:hover{
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
        transform: scale(1.05);
        transition: 0.3s ease;
    }

    .start{
        max-width: 200px;
        animation: gelatine 0.8s infinite ease-in-out alternate;
    }
    
    @keyframes gelatine {
        from { transform: scale(0.95); }
        to { transform: scale(1.05); }
      }

    .load-10 .bar {
        animation: barLoading 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
        float: left;
        width: 15px;
        height: 6px;
        border-radius: 2px;
        background-color: #4b9cdb;
    }
    @keyframes barLoading {
        0%,
        100% {
          transform: translate(0, 0);
        }
      
        50% {
          transform: translate(80px, 0);
          background-color: #f5634a;
          width: 25px;
        }
      }



`
