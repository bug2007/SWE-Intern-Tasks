import syltherineImg from './assets/syltherine.png';
import leviosaImg from './assets/leviosa.png';
import lolitoImg from './assets/lolito.png';
import respiraImg from './assets/respira.jpg';
import grifoImg from './assets/grifo.png';
import muggoImg from './assets/muggo.png';
import pingkyImg from './assets/pingky.jpg';
import pottyImg from './assets/potty.jpg';

const newComer = 'New';

export const PRODUCTS = [
    {
        id: 'p1',
        title: 'Syltherine',
        subtitle: 'Stylish cafe chair',
        imgSrc: syltherineImg, 
        originalPrice: 3500,
        discount: 0.3,
    },
    {
        id: 'p2',
        title: 'Leviosa',
        subtitle: 'Stylish cafe chair',
        imgSrc: leviosaImg, 
        originalPrice: 2500
    },
    {
        id: 'p3',
        title: 'Lolito',
        subtitle: 'Luxury big sofa',
        imgSrc: lolitoImg, 
        originalPrice: 14000,
        discount: 0.5
    },
    {
        id: 'p4',
        title: 'Respira',
        subtitle: 'Outdoor bar table and stool',
        imgSrc: respiraImg, 
        originalPrice: 500,
        newComer
    },
    {
        id: 'p5',
        title: 'Grifo',
        subtitle: 'Night lamp',
        imgSrc: grifoImg, 
        originalPrice: 1500
    },
    {
        id: 'p6',
        title: 'Muggo',
        subtitle: 'Small mug',
        imgSrc: muggoImg, 
        originalPrice: 150,
        newComer
    },
    {
        id: 'p7',
        title: 'Pingky',
        subtitle: 'Cute bed set',
        imgSrc: pingkyImg, 
        originalPrice: 14000,
        discount: 0.5
    },
    {
        id: 'p8',
        title: 'Potty',
        subtitle: 'Minimalist flower pot',
        imgSrc: pottyImg, 
        originalPrice: 500,
        newComer
    },
]

export default function formatPrice(price) {
    return price.toLocaleString(undefined, {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  });
}