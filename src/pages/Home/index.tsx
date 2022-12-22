
import { CoffesCatalogContainer, ContainerItemsIcons, HomeContainer, IconAndLabel, ImgCoffeCup, ItemsIconsAndLabels, MenuFullContainer, RowIntroContainer, TitleMenuCoffes, TitleSubtitleAndItems } from "./styles";
import coffeCupHome from '../../assets/coffe-delivery-home.png'
import logoItem1 from '../../assets/icon (1).svg'
import logoItem2 from '../../assets/icon (2).svg'
import logoItem3 from '../../assets/icon (5).svg'
import logoItem4 from '../../assets/icon (4).svg'
import { MenuCoffes } from "../../components/MenuCoffes";
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffesContext";
import * as zod from 'zod'

import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"



const inputMenuSchema = zod.object({
    itemsAmount: zod.number().min(1).max(10, 'Você só pode adicionar 10 itens por vez.'),
})

type inputMenuData = zod.infer<typeof inputMenuSchema>

export function Home() {
    const { menuItems } = useContext(CoffeContext)

    const inputMenu = useForm<inputMenuData>({
        resolver: zodResolver(inputMenuSchema),
        defaultValues: {
            itemsAmount: 1
        }
    })
    const { handleSubmit, watch, reset } = inputMenu

    const itemsAmount = watch('itemsAmount')


    return (
        <HomeContainer>
            <RowIntroContainer>
                <TitleSubtitleAndItems>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    <ContainerItemsIcons>
                        <ItemsIconsAndLabels>
                            <IconAndLabel>
                                <img src={logoItem1} />
                                <span>
                                    Compra simples e segura
                                </span>
                            </IconAndLabel>
                            <IconAndLabel>
                                <img src={logoItem2} />
                                <span>
                                    Entrega rápida e rastreada

                                </span>
                            </IconAndLabel>
                        </ItemsIconsAndLabels>
                        <ItemsIconsAndLabels>
                            <IconAndLabel>
                                <img src={logoItem3} />
                                <span>
                                    Embalagem mantém o café intacto
                                </span>
                            </IconAndLabel>
                            <IconAndLabel>
                                <img src={logoItem4} />
                                <span>
                                    O café chega fresquinho até você
                                </span>
                            </IconAndLabel>
                        </ItemsIconsAndLabels>
                    </ContainerItemsIcons>
                </TitleSubtitleAndItems>
                <ImgCoffeCup src={coffeCupHome} />
            </RowIntroContainer>
            <MenuFullContainer>
                <FormProvider {...inputMenu}>

                    <TitleMenuCoffes>
                        Nossos cafés
                    </TitleMenuCoffes>

                    <CoffesCatalogContainer>
                        {menuItems.map((coffeFlavor) => {

                            return (
                                <MenuCoffes
                                    key={coffeFlavor.id}
                                    coffeFlavor={coffeFlavor}
                                />
                            )
                        })
                        }
                    </CoffesCatalogContainer>
                </FormProvider>

            </MenuFullContainer>
        </HomeContainer >
    )
}