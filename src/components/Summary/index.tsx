import entradaImg from '../../assets/entradas.svg';
import saidaImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';

import { Card, Container } from "./styles";

export function Summary(){
    return (
        <Container>
            <Card>
                <header>
                    <p>Entradas</p>
                    <img src={entradaImg} alt="" />
                </header>
                <strong>R$ 1.000,00</strong>
            </Card>
            <Card>
                <header>
                    <p>Saídas</p>
                    <img src={saidaImg} alt="" />
                </header>
                <strong>R$ 1.000,00</strong>
            </Card>
            <Card>
                <header>
                    <p>Saldo</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>R$ 1.000,00</strong>
            </Card>
        </Container>
    );
}