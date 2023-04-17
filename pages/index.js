import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import Certifications from '@/components/Certifications'
import Maps from '/components/Maps'
import Paragraph from 'components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'




// I punti di forza
const features = [
    {},
]


// slides per il carousel
let slides = [
    {},
]

// Il nostro team
let members = [
    {},
]


const testimonials = [
    {},
]


let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
]


let prezzi = [
    {
        title:"Epoca",
        description:"Scegli la tua epoca preferita:  Epoca Vittoriana ",
        immagineUrl:"/images/epoca.jpg"
    },
]



export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>
            <LandingHero
                opacity={0.5}
                title="Dream island"
                description="Hai fatto un sogno e vorresti realizzarlo? E chi chiamerai? i DreamBuster!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="/images/isolalh.png"
            />
            <Products 
                title='Prezzi'
                description='Listino'
                cardWidth={4}
                products={prezzi}
            />


        </Layout>
    )
}

export async function getStaticProps() {
    const datiArticoli = getDatiArticoli()
    return {
        props: {
            datiArticoli,
        },
    }
}



