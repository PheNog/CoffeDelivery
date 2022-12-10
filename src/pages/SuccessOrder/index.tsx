import React from "react"
import { ColumnImage, ContainerLabelRowCep, ContainerMasterSuccess, ContainerOrderData, ContainerTitleData, ContainerTitleSubOrder, GradientBox, ImageOrderSuccess, LabelAddressBold, LabelBoldText, LabelCityData, LabelComumText, LogoRowData, RowDataContainer, SubTitleConfirmOrder, TitleConfirmOrder } from "./styles"
import ImgOrderSuccess from './assets/order-success.svg'
import iconLocation from './assets/iconLocation.svg'
import ItemTimer from './assets/ItemTimer.svg'
import moneyIcon from './assets/moneyIcon.svg'


export function SuccessOrder() {
    return (
        <ContainerMasterSuccess>
            <ContainerTitleSubOrder>
                <TitleConfirmOrder>Uhu! Pedido confirmado</TitleConfirmOrder>
                <SubTitleConfirmOrder>Agora é só aguardar que logo o café chegará até você</SubTitleConfirmOrder>
                <GradientBox>
                    <ContainerOrderData>
                        <RowDataContainer>
                            <LogoRowData
                                src={iconLocation}
                            />
                            <ContainerTitleData>
                                <ContainerLabelRowCep>
                                    Entrega em {''}
                                    <LabelAddressBold>Rua Piedade do rio grande, 99</LabelAddressBold>
                                </ContainerLabelRowCep>
                                <LabelCityData>Ponte Rasa - São Paulo, SP</LabelCityData>
                            </ContainerTitleData>
                        </RowDataContainer>
                        <RowDataContainer>
                            <LogoRowData
                                src={ItemTimer}
                            />
                            <ContainerTitleData>
                                <LabelComumText>Previsão de entrega</LabelComumText>
                                <LabelBoldText>20 min - 30 min </LabelBoldText>
                            </ContainerTitleData>
                        </RowDataContainer>
                        <RowDataContainer>
                            <LogoRowData
                                src={moneyIcon}
                            />
                            <ContainerTitleData>
                                <LabelComumText>Pagamento na entrega</LabelComumText>
                                <LabelBoldText>Cartão de Crédito</LabelBoldText>
                            </ContainerTitleData>
                        </RowDataContainer>
                    </ContainerOrderData>
                </GradientBox>

            </ContainerTitleSubOrder>
            <ColumnImage>
                <ImageOrderSuccess
                    src={ImgOrderSuccess}
                />
            </ColumnImage>
        </ContainerMasterSuccess>
    )
}