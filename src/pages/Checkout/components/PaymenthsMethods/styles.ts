import styled from "styled-components";


export const PaymentMethodContainer = styled.div`
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    margin-bottom: 8rem;
    background-color:${props => props.theme["base-card"]};
`

export const ContainerLabels = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;
`

export const InputHidden = styled.input`
    display: none;
    :checked + label {
        border:1px solid ${props => props.theme["purple"]};
        background: ${props => props.theme["purple-light"]}
    }
`

export const LabelPayment = styled.label`
    color: ${props => props.theme["base-text"]};
    width: 11.1669rem;
    height: 3.1875rem;
    border-radius: 6px;
    border: 0;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    cursor: pointer;
    background: ${props => props.theme["base-button"]};
    svg {
        color: ${props => props.theme["purple"]};
        margin-right: 0.75rem;
        margin-bottom: 0.25rem;
    }
    :hover{
        background-color: ${props => props.theme["base-hover"]};
    }
`

export const TitleAndInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`

export const TitlePayments = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${props => props.theme["base-subtitle"]};
`

export const InfoPayments = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${props => props.theme["base-text"]};
`

export const TextAndIconContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    svg {
        color: ${props => props.theme["purple"]};
    }
`