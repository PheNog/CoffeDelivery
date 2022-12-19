import coffeImg1 from './assets/Type=Expresso.svg'
import coffeImg2 from './assets/Type=Americano.svg'
import coffeImg3 from './assets/Type=Expresso Cremoso.svg'
import coffeImg4 from './assets/Type=Café Gelado.svg'
import coffeImg5 from './assets/Type=Café com Leite.svg'
import coffeImg6 from './assets/Type=Latte.svg'
import coffeImg7 from './assets/Type=Capuccino.svg'
import coffeImg8 from './assets/Type=Macchiato.svg'
import coffeImg9 from './assets/Type=Mochaccino.svg'
import coffeImg10 from './assets/Type=Chocolate Quente.svg'
import coffeImg11 from './assets/Type=Cubano.svg'
import coffeImg12 from './assets/Type=Havaiano.svg'
import coffeImg13 from './assets/Type=Árabe.svg'
import coffeImg14 from './assets/Type=Irlandês.svg'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { TotalItemsCart } from '../pages/Checkout'


interface CoffesContextType {
    menuItems: CoffeDataProps[]
    addItemToCart: (data: CoffeDataProps) => void
    removeItemOfCart: (data: CoffeDataProps) => void
    cartItems: CoffeDataProps[]
    updateAmount: (id: string, type: "increment" | "decrement") => void
    selectPayment: (option: string) => void
    paymentSelected: string
    sendOrder: (dataForm: CheckoutFormData) => void
    order: OrderData

}


export const CoffeContext = createContext({} as CoffesContextType)



export interface CoffeDataProps {
    id: string
    coffeFlavorName: string
    coffeType: string[]
    coffeFlavorDescription: string
    coffePrice: number
    itemQuantity: number
    coffeImage: string
}

interface CoffeContextProviderProps {
    children: ReactNode
}

export interface OrderData{
    address: string,
    number: string,
    city: string,
    district: string,
    UF: string,
    paymentSelected: string
    cart: CoffeDataProps[]
}

const dataCoffesFlavor: CoffeDataProps[] = [
    {
        id: "1",
        coffeFlavorName: 'Expresso Tradicional',
        coffeType: ['tradicional'],
        coffeFlavorDescription: 'O tradicional café feito com água quente e grãos moídos',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg1
    },
    {
        id: "2",
        coffeFlavorName: 'Expresso Americano',
        coffeType: ['tradicional'],
        coffeFlavorDescription: 'Expresso diluído, menos intenso que o tradicional',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg2
    },
    {
        id: "3",
        coffeFlavorName: 'Expresso Cremoso',
        coffeType: ['tradicional'],
        coffeFlavorDescription: 'Café expresso tradicional com espuma cremosa',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg3
    },
    {
        id: "4",
        coffeFlavorName: 'Expresso Gelado',
        coffeType: ['tradicional', 'gelado'],
        coffeFlavorDescription: 'Bebida preparada com café expresso e cubos de gelo',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg4
    },
    {
        id: "5",
        coffeFlavorName: 'Café com Leite',
        coffeType: ['tradicional', 'COM LEITE'],
        coffeFlavorDescription: 'Meio a meio de expresso tradicional com leite vaporizado',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg5
    },
    {
        id: "6",
        coffeFlavorName: 'Latte',
        coffeType: ['tradicional', 'COM LEITE'],
        coffeFlavorDescription: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg6
    },
    {
        id: "7",
        coffeFlavorName: 'Capuccino',
        coffeType: ['tradicional', 'COM LEITE'],
        coffeFlavorDescription: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg7
    },
    {
        id: "8",
        coffeFlavorName: 'Macchiato',
        coffeType: ['tradicional', 'COM LEITE'],
        coffeFlavorDescription: 'Café expresso misturado com um pouco de leite quente e espuma',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg8
    },
    {
        id: "9",
        coffeFlavorName: 'Mocaccino',
        coffeType: ['tradicional', 'COM LEITE'],
        coffeFlavorDescription: 'Café expresso com calda de chocolate, pouco leite e espuma',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg9
    },
    {
        id: "10",
        coffeFlavorName: 'Chocolate Quente',
        coffeType: ['ESPECIAL', 'COM LEITE'],
        coffeFlavorDescription: 'Bebida feita com chocolate dissolvido no leite quente e café',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg10
    },
    {
        id: "11",
        coffeFlavorName: 'Cubano',
        coffeType: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        coffeFlavorDescription: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg11
    },
    {
        id: "12",
        coffeFlavorName: 'Havaiano',
        coffeType: ['ESPECIAL'],
        coffeFlavorDescription: 'Bebida adocicada preparada com café e leite de coco',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg12
    },
    {
        id: "13",
        coffeFlavorName: 'Árabe',
        coffeType: ['ESPECIAL'],
        coffeFlavorDescription: 'Bebida preparada com grãos de café árabe e especiarias',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg13
    },
    {
        id: "14",
        coffeFlavorName: 'Irlandês',
        coffeType: ['ESPECIAL', 'ALCOÓLICO'],
        coffeFlavorDescription: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        coffePrice: 9.90,
        itemQuantity: 1,
        coffeImage: coffeImg14
    },
]
type CheckoutFormData = {
    number: string;
    cep: string;
    address: string;
    complement: string;
    district: string;
    city: string;
    UF: string;
}

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [paymentSelected, setPaymentSelected] = useState('Cartão de Débito')
    const [cartItems, setCartItems] = useState<Array<CoffeDataProps>>([])
    const [menuItems, setMenuItems] = useState<Array<CoffeDataProps>>(dataCoffesFlavor)
    const [order, setOrder] = useState<OrderData>({
        address: '',
        number: '',
        city: '',
        district: '',
        UF: '',
        paymentSelected: paymentSelected,
        cart: cartItems
    })
    

    function addItemToCart(coffeItem: CoffeDataProps) {
        const copyCart = [...cartItems];
        const productIndex = copyCart.findIndex(cartItem => cartItem.id === coffeItem.id);
        if (productIndex < 0) {
            copyCart.push(coffeItem);
        } else {
            copyCart[productIndex].itemQuantity += coffeItem.itemQuantity;
        }
        setCartItems(copyCart)
    }


    function selectPayment(option: string){
        setPaymentSelected(state => state = option)
    }

    function removeItemOfCart(coffeItem: CoffeDataProps) {
        const copyCart = [...cartItems];
        const filteredCart = copyCart.filter(cartItem => cartItem.id !== coffeItem.id);

        setCartItems(filteredCart)
    }

    function updateAmount(
        id: string,
        type: string
    ) {
        const copyCart = [...cartItems];
        const productIndex = copyCart.findIndex(product => product.id === id);

        if (productIndex >= 0) {
            const item = copyCart[productIndex];
            copyCart[productIndex].itemQuantity =
                type === "increment" ? item.itemQuantity + 1 : item.itemQuantity - 1;
        } else {
            throw Error();
        }
        setCartItems(copyCart);
    }

    function clearCart() {
        setCartItems([]);
    }

    function sendOrder(dataForm: CheckoutFormData ){
        console.log("🚀 ~ file: CoffesContext.tsx:259 ~ sendOrder ~ dataForm", dataForm)
        const dataOrder = {
            number: dataForm.number,
            cep: dataForm.cep,
            address: dataForm.address,
            district: dataForm.district,
            city: dataForm.city,
            UF: dataForm.UF,
            paymentSelected: paymentSelected,
            cart: cartItems
        }
        const stateJSON = JSON.stringify(dataOrder)
        console.log("🚀 ~ file: CoffesContext.tsx:271 ~ sendOrder ~ stateJSON", stateJSON)
        localStorage.setItem('@coffe-shop: order-state-1.0.0', stateJSON)
        setOrder(state => state = dataOrder)
        useEffect(() => {


            localStorage.setItem('@coffe-shop: order-state-1.0.0', stateJSON)
        }, [order])
        console.log(order)
    }



    return (
        <CoffeContext.Provider value={
            {
                menuItems,
                addItemToCart,
                removeItemOfCart,
                cartItems,
                updateAmount,
                selectPayment,
                paymentSelected,
                sendOrder,
                order
            }
        }>
            {children}
        </CoffeContext.Provider>
    )
}