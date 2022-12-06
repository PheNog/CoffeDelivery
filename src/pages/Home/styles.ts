import styled from "styled-components"
import BackgroundImage from '../../assets/Background.png'

export const HomeContainer = styled.main`
    max-width: 1360px;
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
`

export const TitleSubtitleAndItems = styled.div`
    align-items: center;
    width: 588px;
    margin-left: 8rem;
    h1 {
        color: ${props => props.theme["base-title"]};
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        margin-bottom: 1rem;
    }
    h2{
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        margin-bottom: 4rem;
    }
`

export const RowIntroContainer = styled.div`
    width: 100%;
    display: flex;
    height: 544px;
    justify-content: center;
    align-items: center;
    background-image: url(${BackgroundImage}) ;
    background-size: cover;
    backdrop-filter: blur(80px);
`
export const ItemsIconsAndLabels = styled.div`
    color: ${props => props.theme["base-text"]};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    img {
        width: 2rem;
        height: 2rem;
    }
    span {
        align-items: center;
    }
`

export const IconAndLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`
export const ContainerItemsIcons = styled.div`
    display: flex;
    gap: 2rem;
`

export const ImgCoffeCup = styled.img`
    width: 476px;
    height: 360px;
    margin-right:8rem ;
`
export const MenuFullContainer = styled.div`
    margin-left: 8rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
`
export const TitleMenuCoffes = styled.div`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 2rem;

`
export const CoffesCatalogContainer = styled.div`
    display: flex;
    gap: 2rem;
    box-sizing: border-box;
    width: 100%;
    margin-top: 2.5rem;
`