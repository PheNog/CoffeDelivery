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
import { useFormContext } from "react-hook-form";

export function FormCheckout() {

    const { register } = useFormContext()

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
                <InputCEP
                    placeholder="CEP"
                    id='cep'
                    {...register('cep')}
                />
                <InputAddress
                    placeholder="Rua"
                    id='address'
                    {...register('address')}
                />
                <RowInputs>
                    <InputNumber
                        placeholder="Número"
                        id='number'
                        {...register('number')}
                    />
                    <InputComplement
                        placeholder="Complemento"
                        id='complement'
                        {...register('complement')}
                    />
                </RowInputs>
                <RowInputs>
                    <InputDistrict
                        placeholder="Bairro"
                        id='district'
                        {...register('district')}
                    />
                    <InputCity
                        placeholder="Cidade"
                        id='city'
                        {...register('city')}
                    />
                    <InputUF
                        placeholder="UF"
                        id='UF'
                        {...register('UF')}
                    />
                </RowInputs>
            </InputsContainerMaster>
        </FormContainer>
    )
}