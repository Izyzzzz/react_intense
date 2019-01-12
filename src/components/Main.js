import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    font-size: 40px;
    font-weight: bold;
    line-height: 50px;
    color: #ffffff;
    span {
        font-size: 24px;       
        line-height: 30px;
        display: block;
    }
`

const LightText  = styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.56;
    color: #ffffff;
    margin-top: 54px;
`

const CallBtn = styled.button`
    width: 245px;
    height: 64px;
    border-radius: 31.6px;
    background-color: #ffa14b;
    font-size: 18px;
    line-height: 1.33;
    color: #ffffff;
    margin-top: 35px;
`

class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={5}>
                    <Repair>
                    Качественный ремонт
                    <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </LightText>
                    <CallBtn>Отправить заявку!</CallBtn>
                </Col>
                <Col lg={6} lgOffset={1}>
                </Col>
            </Row>
        )
    }
}

export default Main