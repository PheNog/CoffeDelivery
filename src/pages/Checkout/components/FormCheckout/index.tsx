import { 
    FormContainer, 
    InfoForm, 
    InputAddress, 
    InputCEP, 
    InputCity, 
    InputComplement, 
    InputDistrict, 
    InputNumber, 
    InputsContainerMaster, 
    InputUF, 
    RowInputs, 
    TextAndIconContainer, 
    TitleAndInfoContainer, 
    TitleForm 
} from "./styles";
import { MapPinLine } from 'phosphor-react'

export function FormCheckout() {
    return (
        <FormContainer>
            <TextAndIconContainer>
                <MapPinLine size={22} />
                <TitleAndInfoContainer>
                    <TitleForm>Endereço de Entrega</TitleForm>
                    <InfoForm>Informe o endereço onde deseja receber seu pedido</InfoForm>
                </TitleAndInfoContainer>
            </TextAndIconContainer>
            <InputsContainerMaster>
                <InputCEP placeholder="CEP" />
                <InputAddress placeholder="Rua" />
                <RowInputs>
                    <InputNumber placeholder="Número" />
                    <InputComplement placeholder="Complemento" />
                </RowInputs>
                <RowInputs>
                    <InputDistrict placeholder="Bairro"/>
                    <InputCity placeholder="Cidade" />
                    <InputUF placeholder="UF" />
                </RowInputs>
            </InputsContainerMaster>
        </FormContainer>
    )
}