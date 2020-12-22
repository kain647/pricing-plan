import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import {
    Container,
    Title,
    Specification,
    Price,
    DownloadsContainer,
    TitleDownloads,
    IconContainer,
    Number,
    Button,
    PriceTable,
} from './styles'

export const PricePlan = props => {
    const {
        title,
        specific,
        price,
        numberScore,
        numberScoreVideo,
        numberScoreSystem,
        buttonName,
        clickHandler,
        theme,
    } = props
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title>{title}</Title>
                <Specification>{specific}</Specification>
                <Price>{`$${price}/m`}</Price>

                <DownloadsContainer>
                    <TitleDownloads>Number of downloads</TitleDownloads>
                    <IconContainer>
                        <i className="fas fa-download" />
                        <Number>{numberScore || '--'}</Number>
                    </IconContainer>
                </DownloadsContainer>

                <DownloadsContainer>
                    <TitleDownloads>Video Support</TitleDownloads>
                    <IconContainer>
                        <i className="fas fa-video" />
                        <Number>{numberScoreVideo || '--'}</Number>
                    </IconContainer>
                </DownloadsContainer>

                <DownloadsContainer>
                    <TitleDownloads>Operating System</TitleDownloads>
                    <IconContainer>
                        <i className="fab fa-android" />
                        <Number>{numberScoreSystem || '--'}</Number>
                    </IconContainer>
                </DownloadsContainer>

                <Button onClick={clickHandler}>{buttonName}</Button>
            </Container>
        </ThemeProvider>
    )
}

PricePlan.propTypes = {
    title: PropTypes.string,
    specific: PropTypes.string,
    price: PropTypes.number,
    numberScore: PropTypes.number,
    numberScoreVideo: PropTypes.string,
    numberScoreSystem: PropTypes.string,
    buttonName: PropTypes.string,
}

export class PricePlanContainer extends Component {
    state = {
        active: this.props.plans[1].title,
    }

    setActive = active => {
        if (active !== this.state.active) {
            this.setState({
                active,
            })
        }
    }

    render() {
        const { active } = this.state
        const { plans, theme } = this.props
        const { blue, normal } = theme
        console.log(active)
        return (
            <PriceTable>
                {plans.map(plan => (
                    <PricePlan
                        {...plan}
                        clickHandler={() => this.setActive(plan.title)}
                        theme={active === plan.title ? blue : normal}
                    />
                ))}
            </PriceTable>
        )
    }
}
