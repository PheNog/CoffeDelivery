import styled from "styled-components";

export const ContainerMasterSuccess = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 2rem;
    max-width: 1360px;
    margin-top: 2.25rem;
    align-items: flex-end;
`

export const ContainerTitleSubOrder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 8rem;
`

export const TitleConfirmOrder = styled.label`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
`

export const SubTitleConfirmOrder = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
    font-stretch: 100;
`

export const ContainerOrderData = styled.div`
    display: flex;
    border-radius: 6px 36px;
    flex-direction: column;
    padding: 40px;
    gap: 32px;
    width: 32.875rem;
`

export const RowDataContainer = styled.div`
    display: flex;
    align-items: center;
`

export const LogoRowData = styled.img`
    width: 2rem;
    margin-right: 12px;
`

export const ContainerTitleData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: cnter;
`

export const ContainerLabelRowCep = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
`

export const LabelAddressBold = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
`

export const LabelCityData = styled.label`
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme["base-text"]};
`

export const LabelComumText = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
`
export const LabelBoldText = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};

`
export const ImageOrderSuccess = styled.img`

`

export const ColumnImage = styled.div`
    margin-right: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 30.75rem;
    height: 18.3125rem;
    max-width: 1366px;

`

export const GradientBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 0.8rem;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    background: ${props => props.theme["background"]};
    background-clip: padding-box; 
    border: solid 1px transparent; 
    border-radius: 6px 36px;
//Criando uma borda com gradiente usando esse container com essa props before
    &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
}
`
