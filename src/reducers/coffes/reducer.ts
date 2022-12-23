import { ActionTypes } from "./actions";
import { produce } from 'immer'
import { CoffeDataProps, OrderData } from "../../contexts/CoffesContext";

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CoffesState {
    cartItems: CoffeDataProps[];
    paymentSelected: string;
    order: OrderData
    menuItems: CoffeDataProps[];
}

export function coffesReducer(state: CoffesState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return produce(state, draft => {
                const productIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.coffeItem.id);
                if (productIndex < 0) {
                    draft.cartItems.push(action.payload.coffeItem);
                } else {
                    draft.cartItems[productIndex].itemQuantity += action.payload.coffeItem.itemQuantity;
                }
            })

        case ActionTypes.SELECT_PAYMENT_METHOD: {
            return produce(state, draft => {
                draft.paymentSelected = action.payload.option
            })
        }

        case ActionTypes.REMOVE_ITEM_OF_CART: {
            return produce(state, draft => {
                const filteredCart = draft.cartItems.filter(cartItem => cartItem.id !== action.payload.coffeItem.id);
                draft.cartItems = filteredCart
            })
        }

        case ActionTypes.UPDATE_AMOUNT: {
            return produce(state, draft => {

                const productIndexMenuItems = state.menuItems.findIndex(cartItem => cartItem.id === action.payload.id)
                if (productIndexMenuItems >= 0) {
                    const item = draft.menuItems[productIndexMenuItems];
                    draft.menuItems[productIndexMenuItems].itemQuantity =
                        action.payload.type === "increment" ? item.itemQuantity + 1 : item.itemQuantity - 1
                }

                const productIndexCartItems = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
                if (productIndexCartItems >= 0) {
                    const item = draft.cartItems[productIndexCartItems];
                    draft.cartItems[productIndexCartItems].itemQuantity =
                        action.payload.type === "increment" ? item.itemQuantity + 1 : item.itemQuantity - 1
                }
            })
        }

        case ActionTypes.SEND_ORDER: {
            return produce(state, draft => {
                draft.order = action.payload.dataOrder
            })
        }

        case ActionTypes.CLEAR_CART: {
            return produce(state, draft => {
                draft.cartItems = []
            })
        }
        default:
            return state
    }
}
