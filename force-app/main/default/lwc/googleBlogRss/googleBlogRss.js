import { LightningElement,track } from 'lwc';
import parseXMLFromURL from '@salesforce/apex/googleBlogRss.parseXMLFromURL';

export default class GoogleBlogRss extends LightningElement {
    @track news;
    
    connectedCallback(){
        console.log('News connectedCallback called');
        parseXMLFromURL()
            .then(result=>{
                this.news=JSON.parse(result);
                console.log('news=>',this.news);
            })
            .catch(err=>{
                console.log(err);
            })
            
    }
}