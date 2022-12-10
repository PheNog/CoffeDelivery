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
    /* Title/Title L */

font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 32px;
line-height: 130%;
/* identical to box height, or 42px */


/* Brand / Yellow Dark */

color: #C47F17;
`

export const SubTitleConfirmOrder = styled.label`
    /* Text/Regular L */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;
/* identical to box height, or 26px */


/* Base/Subtitle */

color: #403937;
font-stretch: 100;
`

export const ContainerOrderData = styled.div`
    display: flex;
    border-radius: 6px 36px;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;
    width: 526px;
`

export const RowDataContainer = styled.div`
    display: flex;
    align-items: center;
`

export const LogoRowData = styled.img`
    width: 32px;
    margin-right: 0.75rem;
`

export const ContainerTitleData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: cnter;
`

export const ContainerLabelRowCep = styled.div`

font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* or 21px */


/* Base/Text */

color: #574F4D;
`

export const LabelAddressBold = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    /* or 21px */


    /* Base/Text */

    color: #574F4D;
`

export const LabelCityData = styled.label`
        font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    /* or 21px */


    /* Base/Text */

    color: #574F4D;
`

export const LabelComumText = styled.label`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* or 21px */


/* Base/Text */

color: #574F4D;
`
export const LabelBoldText = styled.label`
        font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: #574F4D;
`
export const ImageOrderSuccess = styled.img`

`

export const ColumnImage = styled.div`
    margin-right: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 492px;
    height: 293px;
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

    &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
}
`
