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

export const CartComponentContainer = styled.div`
    margin-right: 8rem;
    width: 28rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
export const CardCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 44px;
`
export const ContainerPaymentConfirm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    margin-bottom: 1.5rem;
`


export const RowTotalItensEntrega = styled.div`
    display:flex;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: right;
    color: ${props => props.theme["base-text"]};
    justify-content: space-between;
`
export const RowFinalTotal = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    align-items: center;
    text-align: right;
    color: ${props => props.theme["base-subtitle"]};

`
export const ButtonConfirmOrder = styled.button`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    height: 46px;
    background: ${props => props.theme["yellow"]};
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    :hover{
        background: ${props => props.theme["yellow-dark"]};
    }
`
export const ItemsCartContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 1rem;
`

