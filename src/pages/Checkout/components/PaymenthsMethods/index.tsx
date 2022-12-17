import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { CoffeContext } from "../../../../contexts/CoffesContext";
import { ContainerLabels, InfoPayments, InputHidden, LabelPayment, PaymentMethodContainer, TextAndIconContainer, TitleAndInfoContainer, TitlePayments } from "./styles";

export function PaymentMethods() {

    const { selectPayment } = useContext(CoffeContext)

    const optionsArrayNL = (document.getElementsByName('pagamento'))

    async function handleSelectPaymentMethod() {
        const optionsArray = Array.prototype.slice.call(optionsArrayNL);
        const optionChecked = optionsArray.filter((option: any) => option.checked);
        if(optionChecked.length > 0){
            const optionPaymentSelected = optionChecked[0].value
            selectPayment(optionPaymentSelected)
        }
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
                    value='Cartão de Crédito'
                />
                <LabelPayment onClick={handleSelectPaymentMethod} htmlFor="payment1">
                    <CreditCard
                        size={16}
                    />
                    CARTÃO DE CRÉDITO
                </LabelPayment>
                <InputHidden
                    id="payment2"
                    type='radio'
                    name='pagamento'
                    value='Cartão de Débito'
                    defaultChecked
                />
                <LabelPayment onClick={handleSelectPaymentMethod} htmlFor="payment2">
                    <Bank
                        size={16}
                    />
                    CARTÃO DE DÉBITO
                </LabelPayment>
                <InputHidden
                    id="payment3"
                    type='radio'
                    name='pagamento'
                    value='Dinheiro'

                />
                <LabelPayment onClick={handleSelectPaymentMethod} htmlFor="payment3">
                    <Money
                        size={16}
                    />
                    DINHEIRO
                </LabelPayment>
            </ContainerLabels>
        </PaymentMethodContainer>
    )
}