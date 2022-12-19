import { useContext, useEffect, useState } from "react";
import { CoffeContext } from "../../contexts/CoffesContext";
import { toBrlPt } from "../../utils/methods";
import { FormCheckout } from "./components/FormCheckout";
import { ItemCart } from "./components/ItemCart/ItemCart";
import { PaymentMethods } from "./components/PaymenthsMethods";
import * as zod from 'zod'
import {
    ButtonConfirmOrder,
    CardCartContainer,
    CartComponentContainer,
    CheckoutMasterContainer,
    ContainerPaymentConfirm,
    FormAndPaymentContainer,
    ItemsCartContainer,
    RowFinalTotal,
    RowTotalItensEntrega,
    StyledNavLink,
    TitlesCheckout
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


export interface TotalItemsCart {
    totalCart: number;
    totalCartFormatted?: string;
    totalCartFormattedWithDelivery?: string;
}

const checkoutFormValidationSchema = zod.object({
    cep: zod.string().max(9).min(8, 'Informe o CEP.'),
    address: zod.string().min(3, 'Informe a sua rua.'),
    number: zod.string().min(1, 'Preencha o seu numero.').max(6),
    complement: zod.string(),
    district: zod.string(),
    city: zod.string(),
    UF: zod.string().min(2).max(2)
}).required();

export function Checkout() {
    const { cartItems, sendOrder } = useContext(CoffeContext)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

    const totalCart = cartItems.map(el => el.itemQuantity * el.coffePrice).reduce((total, item) => total + item, 0)
    const totalWithDelivery = totalCart + 3.5
    const totalsObject = {
        totalCartFormatted: toBrlPt(totalCart),
        totalCartWithDeliveryFormatted: toBrlPt(totalWithDelivery)
    }

    type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

    const checkoutForm = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutFormValidationSchema),
        defaultValues: {
            cep: '',
            address: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            UF: ''
        }
    })

    function handleCreateOrder(data: CheckoutFormData) {
        console.log("🚀 ~ file: index.tsx:68 ~ handleCreateOrder ~ data", data)
        sendOrder(data)
        reset()
    }

    const { handleSubmit, watch, reset } = checkoutForm

    const watchAllFields = watch(['cep', 'address', 'number', 'district', 'city', 'UF'])
    const validateFields = watchAllFields.filter(item => item === '')

    console.log("🚀 ~ file: index.tsx:74 ~ Checkout ~ watchAllFields", watchAllFields)
    if (isSubmitDisabled === true) {
        if (validateFields.length === 0) {
            setIsSubmitDisabled(state => state = false)
        }
    }



    return (
        <CheckoutMasterContainer onSubmit={handleSubmit(handleCreateOrder)}>
            <FormAndPaymentContainer >
                <TitlesCheckout>Complete seu pedido</TitlesCheckout>
                <FormProvider {...checkoutForm} >
                    <FormCheckout />
                    <PaymentMethods />
                </FormProvider>
            </FormAndPaymentContainer>
            <CartComponentContainer>
                <TitlesCheckout>Cafés selecionados</TitlesCheckout>
                <CardCartContainer>
                    <ItemsCartContainer
                    >
                        {cartItems.map((item) => {
                            return (
                                <ItemCart
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                        }
                    </ItemsCartContainer>
                    <ContainerPaymentConfirm>
                        <RowTotalItensEntrega>
                            <div>Total de itens</div>
                            <div>{totalsObject.totalCartFormatted}</div>
                        </RowTotalItensEntrega>
                        <RowTotalItensEntrega>
                            <div>Entrega</div>
                            <div>R$ 3,50</div>
                        </RowTotalItensEntrega>
                        <RowFinalTotal>
                            <div>Total</div>
                            <div>{totalsObject.totalCartWithDeliveryFormatted}</div>
                        </RowFinalTotal>
                    </ContainerPaymentConfirm>
                    <StyledNavLink to='/checkout/success-order'>
                        <ButtonConfirmOrder
                            type='submit'
                            disabled={isSubmitDisabled}
                        >
                            CONFIRMAR PEDIDO
                        </ButtonConfirmOrder>
                    </StyledNavLink>
                </CardCartContainer>
            </CartComponentContainer>
        </CheckoutMasterContainer>
    )
}