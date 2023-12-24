import dotenv from 'dotenv'
dotenv.config({
    path: '../.env'
})
import React, { FC } from 'react'
import { Html } from '@react-email/html'
import { Container } from '@react-email/container'
import { Button } from '@react-email/button'
import { Img } from '@react-email/img'
import { Section } from '@react-email/section'
import { Heading } from '@react-email/heading'
import * as styles from './style'
import { Head } from '@react-email/head'
import { Font } from '@react-email/font'
import { Text } from '@react-email/text'
import { Preview } from '@react-email/preview'

interface IProps {
    text: string
    title: string
    action: {
        text: string
        link: string
    }
}

const Template: FC<IProps> = ({ title='', text='', action={ link: '', text: '' } }) => {
    return (
        <Html lang="pt-br" dir="ltr">
            <Head>
                <title>{title}</title>
                <Font
                    fontWeight={400}
                    fontStyle="normal"
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        format: 'woff2',
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2'
                    }}
                />
            </Head>
            <Preview>{title}</Preview>
            <Container style={styles.container}>
                <Section style={styles.header}>
                    <Img style={styles.image} src={`${process.env.DOMAIN_ASSETS_EMAIL}/img/email/Logo Josival Penha Full.png`}/>
                </Section>
                <Heading as="h2" style={styles.title}>{title}</Heading>
                <Section style={styles.sectionTexts}>
                    {text.split('\n').map((text, index) => {
                        return (
                            <Text key={index} style={styles.text}>{text}</Text>
                        )
                    })}
                </Section>
                <Section style={styles.sectionButton}>
                    <Button pX={20} pY={15} style={styles.button} href={action.link}>
                        {action.text}
                    </Button>
                </Section>
            </Container>
        </Html>
    )
}

export default Template