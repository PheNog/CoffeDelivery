import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { CoffeContext } from "../../../../contexts/CoffesContext";
import { ContainerLabels, InfoPayments, InputHidden, LabelPayment, PaymentMethodContainer, TextAndIconContainer, TitleAndInfoContainer, TitlePayments } from "./styles";

export function PaymentMethods() {

    const { selectPayment } = useContext(CoffeContext)

    function handleSelectPaymentMethod(option: string) {
        selectPayment(option)
        console.log('OPTIONS', option)
    }

    return (
        <PaymentMethodContainer>
            <TextAndIconContainer>
                <CurrencyDollar size={22} />
                <TitleAndInfoContainer>
                    <TitlePayments>Pagamento</TitlePayments>
                    <InfoPayments>O pagamento é feito na entrega. Escolha a forma que deseja pagar</InfoPayments>
                </TitleAndInfoContainer>
            </TextAndIconContainer>
            <ContainerLabels>
                <InputHidden
                    id="payment1"
                    type='radio'
                    name='pagamento'
                />
                <LabelPayment onClick={()=> handleSelectPaymentMethod('Cartão de Crédito')} htmlFor="payment1">
                    <CreditCard
                        size={16}
                    />
                    CARTÃO DE CRÉDITO
                </LabelPayment>
                <InputHidden
                    id="payment2"
                    type='radio'
                    name='pagamento'
                    defaultChecked
                />
                <LabelPayment onClick={()=> handleSelectPaymentMethod('Cartão de Débito')} htmlFor="payment2">
                    <Bank
                        size={16}
                    />
                    CARTÃO DE DÉBITO
                </LabelPayment>
                <InputHidden
                    id="payment3"
                    type='radio'
                    name='pagamento'
                />
                <LabelPayment onClick={()=> handleSelectPaymentMethod('Dinheiro')} htmlFor="payment3">
                    <Money
                        size={16}
                    />
                    DINHEIRO
                </LabelPayment>
            </ContainerLabels>
        </PaymentMethodContainer>
    )
}