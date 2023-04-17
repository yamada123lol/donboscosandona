import Logos from '/components/Logos'
import Footer from '/components/Footer'
import Dropdown from '@/components/Dropdown'

export const siteName = "Dream island"
export const siteTitle = "Dream Island - gli acchiappasogni lo rendono possibile"
export const siteDescription = "Rendiamo i tuoi sogni realtà"

export const menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
] 

const menuFooter = [
    { title: '', url: '/' },
]

const socials = [
    { title: '', imageUrl: '', url: '' },

]

let images = [
    { title: '', imageUrl: '', },

]

export const footer = <Footer
    imageUrl=""
    color="#000000"
    opacitycolor="1"
    opacity={1}
    title1="About Us"
    description1=""
    title2="Social"
    socials={socials}
    title3="I Settori"
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>
