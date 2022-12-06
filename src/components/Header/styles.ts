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


    img {
        width: 85px;
        height: 40px;
    }
    button {
        width: 38px;
        height: 38px;
        border-radius: 8px;
        border: 0;
        background-color: ${(props) => props.theme["yellow-light"]};
        svg {
            color: ${(props) => props.theme["yellow-dark"]};
        }
    }
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
        margin: 0 9rem;
`

