import styled from "styled-components";

export const CheckoutMasterContainer = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    gap: 2rem;
    max-width: 1360px;
    margin-top: 2.25rem;
`
export const FormAndPaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: auto;
    margin-left: 8rem;
`

export const PaymentMethodContainer = styled.div`
    margin-top: 0.75rem;
    display: flex;
    padding: 2.5rem;
    margin-bottom: 8rem;
    background-color:${props => props.theme["base-card"]};
`
export const CartComponent = styled.div`
    margin-right: 8rem;
    width: 28rem;
    input {
        width: 6rem;
    }

`
export const TitlesCheckout = styled.div`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    color: ${props => props.theme["base-subtitle"]};

`
export const LabelPayment = styled.label`
    color: ${props => props.theme["purple-dark"]};
    width: 178.67px;
    height: 51px;
    border-radius: 6px;
    border: 0;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    background: ${props => props.theme["base-button"]};
    svg {
        color: ${props => props.theme["purple"]};
        margin-right: 0.75rem;
        margin-bottom: 4px;
    }
    :selected {
        border: 1px solid ${props => props.theme["purple-dark"]};
    }
`

export const InputHidden = styled.input`
    display: none;
`

export const ContainerLabels = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;

`
