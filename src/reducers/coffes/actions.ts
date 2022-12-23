import { CoffeDataProps } from "../../contexts/CoffesContext";

interface DataOrder {
    number: string;
    cep: string;
    address: string;
    district: string;
    city: string;
    UF: string;
    paymentSelected: string;
    cart: CoffeDataProps[];
}

export enum ActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    SELECT_PAYMENT_METHOD = 'SELECT_PAYMENT_METHOD',
    REMOVE_ITEM_OF_CART = 'REMOVE_ITEM_OF_CART',
    SEND_ORDER = 'SEND_ORDER',
    UPDATE_AMOUNT = 'UPDATE_AMOUNT',
    CLEAR_CART = 'CLEAR_CART'
}

export function addItemToCartAction(coffeItem: CoffeDataProps) {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            coffeItem
        }
    }
}

export function selectPaymentAction(option: string) {
    return {
        type: ActionTypes.SELECT_PAYMENT_METHOD,
        payload: {
            option
        }
    }
}

export function removeItemOfCartAction(coffeItem: CoffeDataProps) {
    return {
        type: ActionTypes.REMOVE_ITEM_OF_CART,
        payload: {
            coffeItem
        }
    }
}

export function updateAmountAction(id: string, type: string) {
    return {
        type: ActionTypes.UPDATE_AMOUNT,
        payload: {
            id,
            type
        }
    }
}

export function sendOrderAction(dataOrder: DataOrder) {
    return {
        type: ActionTypes.SEND_ORDER,
        payload: {
            dataOrder
        }
    }
}

export function clearCartAction() {
    return {
        type: ActionTypes.CLEAR_CART
    }
}