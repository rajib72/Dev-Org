import { LightningElement,wire,track } from 'lwc';
import getPlayerList from "@salesforce/apex/ForeachDemo.getPlayerList"

export default class ForeachDemo extends LightningElement {
    @track data=[]
    
    @wire(getPlayerList)
    players;

}