import styled from "styled-components";


export const Wrapper = styled.div`
    max-width: 600px;
    width: 90%;
    background: linear-gradient(to bottom right, #301E67, #03001C);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        font-size: 1.2rem;
    }
    @media (max-width:576px ) {
        width: 100%;
        padding: 20px;
        p{
        font-size: 1rem;
        }
    }
    .buttonParent {
        display: flex;
        flex-direction: column;
    }

`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.9;
        transform: scale(1.01);
        transition: 0.3s ease;
    }
    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({correct, userClicked}) =>
            correct ? 'linear-gradient(to right, #03AC13, #028A0F)' : !correct && userClicked ? 'linear-gradient(to right, #f44336, #CC0000)' : 'linear-gradient(to right, #13005A, #00337C)'};
        border: 1px solid #B6EADA;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        
    }
    @media (max-width:576px ) {
        width: 95%;
        align-self: center;
        button{
            font-size: 0.8rem;
        }
    }

`