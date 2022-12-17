import styled from 'styled-components'

export const CardMenuContainer = styled.div`
    width: 256px;
    height: 310px;
    left: 0px;
    top: 0px;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px;
    box-shadow: 1px 6px 5px gray;
`
export const ImageLabelTitleSubtitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`
export const ImageMenuItem = styled.img`
    position: relative;
    width: 120px;
    height: 120px;
    top: -2rem;
    margin-bottom: 0.75rem;
`
export const CoffeTypeLabel = styled.label`
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    border-radius: 100px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    /* identical to box height, or 13px */
    margin: 0;
    text-transform: uppercase;
    position: relative;
    top: -2rem;
    margin-bottom: 1rem;
`
export const CoffeFlavorName = styled.h1`
    /* Title/Title S */
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color:  ${(props) => props.theme['base-subtitle']};
    position: relative;
    top: -2rem;
    margin-bottom: 0.5rem;

`

export const CoffeFlavorDescription = styled.h2`
    /* Text/Regular S */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color:  ${(props) => props.theme['base-label']};
    position: relative;
    width: 15rem;
    top: -2rem;
`
export const PriceCountCartContainer = styled.div`
    display: flex;
    position: relative;
    top: -3rem;
    justify-content: space-between;
    padding: 1.5rem 1.5rem;
    color: black;
    align-items: center;
    margin-bottom: 1.5rem;
`
export const PriceLabel = styled.label`
    color:  ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    text-align: right;
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const R$Label = styled.label`
    color:  ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 130%;
    text-align: right;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.2rem;

`
export const CountAndButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export const InputCart = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1.75rem;
height: 1.25rem;
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
export const ButtonCart = styled.button`
    display:flex;
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    border: 0;
    padding: 6px;
    cursor: pointer;
    :hover {
        background-color: ${(props) => props.theme['purple']};
    }
`
export const ContainerLabelsCoffeType = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
`
export const InputAndButtonsContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 38px;
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


