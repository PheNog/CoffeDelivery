import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 1360px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    border-bottom: 1px solid ${(props) => props.theme["purple-light"]};
`

export const CartAndLocation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    img {
        width: 8.9375rem;
        height: 2.5rem;
    }
`

export const ItemsContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 8rem;
`

export const LogoHeader = styled.img`
    width: 5.3125rem;
    height: 2.5rem;
`

export const ButtonCartWithLabel = styled.button`
        width: 2.375rem;
        height: 2.375rem;
        border-radius: 8px;
        border: 0;
        cursor: pointer;
        background-color: ${(props) => props.theme["yellow-light"]};
        svg {
            color: ${(props) => props.theme["yellow-dark"]};
        }
        :hover{
            outline:0;
        box-shadow: 0 0 0 0.125rem ${(props) => props.theme['yellow-dark']};
        }
`

export const BoxLocation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    width: 8.9375rem;
    height: 2.375rem;
    background: #EBE5F9;
    border-radius: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: ${props => props.theme["purple-dark"]};
    svg{
        color: ${props => props.theme.purple};
    }
`

export const LabelTotalItems = styled.label`
    border-radius: 50%;
    background: ${props => props.theme["yellow-dark"]};
    position: relative;
    right: 10%;
    bottom: 10%;
    width: 1rem;
    height: 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 130%;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1px;
    margin-left: 0.5px
`
