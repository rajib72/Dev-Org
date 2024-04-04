import { LightningElement } from 'lwc';
import Image_URL from '@salesforce/resourceUrl/PortfolioImages'

export default class QuickLinks extends LightningElement {

    data=[
        {
            id:1,
            image:Image_URL + '/portfolioImages/project1.jpg',
            text:'Projects',
        },
        {
            id:2,
            image:Image_URL + '/portfolioImages/project2.webp',
            text:'Skills',
        },
        {
            id:3,
            image:Image_URL + '/portfolioImages/certification.jpg',
            text:'Certificates',
        },
    ]
}