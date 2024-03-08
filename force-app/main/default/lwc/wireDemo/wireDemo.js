import { LightningElement,wire,track } from 'lwc';
import getPlayerList from '@salesforce/apex/wireDemo.getPlayerList'

const columns=[
    {label:"Name",fieldName:"Name"},
    {label:"Player record ID",fieldName:"Id"},
];

export default class WireDemo extends LightningElement {

    @track columns =columns;
    @track data=[];

    @wire(getPlayerList)
    wiredPlayers({data,error}){
        if(data){
            this.data=data;
        }
        else if(error){
            console.log("error occured");
        }
    }
}