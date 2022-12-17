import styled from "styled-components";

export const ContainerItemCart = styled.div`
    display: flex;
    align-items: center;
    height: 6.5rem;
    border-bottom: 1px solid #E6E5E5;
    width: 100%;
`
export const ImageCoffeCart = styled.img`
    width: 4rem;
`
export const RowNamePrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`
export const RowInputButton = styled.div`
    display: flex;
    width: 100%;
    gap: 0.5rem;

`
export const LabelNameItemCart = styled.label`
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${props => props.theme["base-subtitle"]};

`
export const LabelPriceCart = styled.label`
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: right;
    color:${props => props.theme["base-text"]};


`
export const InputNumberCart = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    width: 72px;
    height: 32px;
    background:${props => props.theme["base-button"]};
    border-radius: 6px;
    border: 0;
    color: ${props => props.theme["base-text"]};
`
export const ButtonRemoveCart = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 91px;
    height: 32px;
    color: ${props => props.theme["base-text"]};
    background: ${props => props.theme["base-button"]};
    border-radius: 6px;
    border: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    svg {
        color: ${props => props.theme["purple"]};

    }
    :hover{
        background-color: ${props => props.theme["base-hover"]};
    }
`
export const NameInputContainer = styled.button`
    display: flex;
    flex-direction: column;
    border: 0;
    width: 100%;
    margin-left: 1.25rem;
`

export const InputAndButtonsContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 2rem;
    border-radius: 6px;

    background: ${props => props.theme['base-button']};
    button {
    
        height: 100%;
        border: none;
    background: ${props => props.theme['base-button']};
    z-index: 1;
    }
    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

    svg {
        :hover {
            color: ${props => props.theme['purple-dark']};
        }
        color: ${props => props.theme['purple']};
        padding: 0rem;
    }

`

export const InputCart = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1.75rem;
height: auto;
    gap: 4px;
    background: #E6E5E5;
    color: black;
    border: 0;
    text-align: center;
    :focus {
        outline:0;
        box-shadow: 0 0 0 transparent;
    }
`