import { LightningElement,track } from 'lwc';
import getPlayerList from '@salesforce/apex/ImperativeDemo.getPlayerList'

const columns=[
    {label:"Player Record Id",fieldName:"Id"},
    {label:"Player Name",fieldName:"Name"},
]

export default class ImperativeDemo extends LightningElement {

    @track columns=columns;
    @track data=[];

    connectedCallback(){
        getPlayerList().then(result=>{
            this.data=result;
        }).catch(error=>{
            console.log("error occcured");
        })
    }
}