import styled from "styled-components";

export const FormContainer = styled.div`
    padding: 2.25rem;
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    border: none;
    gap: 2rem;
    background-color:${props => props.theme["base-card"]};
    svg{
        color: ${props => props.theme["yellow-dark"]};
    }
`
export const TitleAndInfoContainer = styled.div`
`
export const TitleForm = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${props => props.theme["base-subtitle"]};

`
export const InfoForm = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${props => props.theme["base-text"]};
`
const BaseInput = styled.input`
    background: ${props => props.theme["base-input"]};
    height: 2.5rem;
    color: ${props => props.theme["base-label"]};
    border-radius: 4px;
    border: 1px solid ${props => props.theme["base-button"]};
    padding: 0.75rem;
    &:focus {}
    &::placeholder {}

`
export const InputsContainerMaster = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const TextAndIconContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`
export const InputCEP = styled(BaseInput)`
    width: 12.5rem;
`
export const InputAddress = styled(BaseInput)`

`
export const InputNumber = styled(BaseInput)`
    width: 12.5rem;
`
export const InputComplement = styled(BaseInput)`
    width: 100%;
`
export const InputDistrict = styled(BaseInput)`
    width: 12.5rem;
`
export const InputCity = styled(BaseInput)`
    width: 17.25rem;
`
export const InputUF = styled(BaseInput)`
    width: 3.75rem;
`
export const RowInputs = styled.div`
    display: flex;
    gap:0.75rem;

`


