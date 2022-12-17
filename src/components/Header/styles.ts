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
        width: 143px;
        height: 40px;
    }

`
export const ItemsContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 8rem;
`

export const LogoHeader = styled.img`
    width: 85px;
    height: 40px;
`

export const ButtonCartWithLabel = styled.button`
        width: 38px;
        height: 38px;
        border-radius: 8px;
        border: 0;
        background-color: ${(props) => props.theme["yellow-light"]};
        svg {
            color: ${(props) => props.theme["yellow-dark"]};
        }
        cursor: pointer;
        :hover{
            outline:0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};

        }
`
export const BoxLocation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    width: 143px;
    height: 38px;
    background: #EBE5F9;
    border-radius: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
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
    position: absolute;
    top: 9.5%;
    width: 16px;
    height: 16px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    align-items: center;
    justify-content: center;
`
