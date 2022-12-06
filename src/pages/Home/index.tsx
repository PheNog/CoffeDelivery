
import { CoffesCatalogContainer, ContainerItemsIcons, HomeContainer, IconAndLabel, ImgCoffeCup, ItemsIconsAndLabels, MenuFullContainer, RowIntroContainer, TitleMenuCoffes, TitleSubtitleAndItems } from "./styles";
import coffeCupHome from '../../assets/coffe-delivery-home.png'
import logoItem1 from '../../assets/icon (1).svg'
import logoItem2 from '../../assets/icon (2).svg'
import logoItem3 from '../../assets/icon (5).svg'
import logoItem4 from '../../assets/icon (4).svg'
import { MenuCoffes } from "../../components/MenuCoffes";
import { dataCoffesFlavor } from "../../components/MenuCoffes/dataCoffes";

export function Home() {


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
                <TitleMenuCoffes>
                    Nossos cafés
                </TitleMenuCoffes>

                <CoffesCatalogContainer>
                    {dataCoffesFlavor.map((coffeFlavor) => {
                        const idsLine = ['1', '2', '3', '4']
                        if(!idsLine.includes(coffeFlavor.id)) return

                        return (
                            <MenuCoffes
                                key={coffeFlavor.id}
                                id={coffeFlavor.id}
                                coffeType={coffeFlavor.coffeType}
                                coffeFlavorName={coffeFlavor.coffeFlavorName}
                                coffeFlavorDescription={coffeFlavor.coffeFlavorDescription}
                                coffePrice={coffeFlavor.coffePrice}
                                coffeImage={coffeFlavor.coffeImage}
                            />
                        )
                    })
                    }
                </CoffesCatalogContainer>
                <CoffesCatalogContainer>
                    {dataCoffesFlavor.map((coffeFlavor) => {
                        const idsLine = ['5', '6', '7', '8']
                        if(!idsLine.includes(coffeFlavor.id)) return

                        return (
                            <MenuCoffes
                                key={coffeFlavor.id}
                                id={coffeFlavor.id}
                                coffeType={coffeFlavor.coffeType}
                                coffeFlavorName={coffeFlavor.coffeFlavorName}
                                coffeFlavorDescription={coffeFlavor.coffeFlavorDescription}
                                coffePrice={coffeFlavor.coffePrice}
                                coffeImage={coffeFlavor.coffeImage}
                            />
                        )
                    })
                    }
                </CoffesCatalogContainer>
                <CoffesCatalogContainer>
                    {dataCoffesFlavor.map((coffeFlavor) => {
                        const idsLine = ['9', '10', '11', '12']
                        if(!idsLine.includes(coffeFlavor.id)) return

                        return (
                            <MenuCoffes
                                key={coffeFlavor.id}
                                id={coffeFlavor.id}
                                coffeType={coffeFlavor.coffeType}
                                coffeFlavorName={coffeFlavor.coffeFlavorName}
                                coffeFlavorDescription={coffeFlavor.coffeFlavorDescription}
                                coffePrice={coffeFlavor.coffePrice}
                                coffeImage={coffeFlavor.coffeImage}
                            />
                        )
                    })
                    }
                </CoffesCatalogContainer>
                <CoffesCatalogContainer>
                    {dataCoffesFlavor.map((coffeFlavor) => {
                        const idsLine = ['13', '14']
                        if(!idsLine.includes(coffeFlavor.id)) return

                        return (
                            <MenuCoffes
                                key={coffeFlavor.id}
                                id={coffeFlavor.id}
                                coffeType={coffeFlavor.coffeType}
                                coffeFlavorName={coffeFlavor.coffeFlavorName}
                                coffeFlavorDescription={coffeFlavor.coffeFlavorDescription}
                                coffePrice={coffeFlavor.coffePrice}
                                coffeImage={coffeFlavor.coffeImage}
                            />
                        )
                    })
                    }
                </CoffesCatalogContainer>
            </MenuFullContainer>
        </HomeContainer >
    )
}