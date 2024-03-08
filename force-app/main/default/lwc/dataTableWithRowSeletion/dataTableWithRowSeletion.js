import { LightningElement,track,wire,api } from 'lwc';
import getContactList from '@salesforce/apex/dataTableWithRowSelectionClass.getContactList'

const columns=[
    {label:'Name',fieldName:'Name'},
    {label:'Phone',fieldName:'Phone'}
]

export default class DataTableWithRowSeletion extends LightningElement {
    @track showContacts="Show Contacts"
    @track isVisible=false
    columns=columns
    @track data=[];
    @api recordId;//it stores the current page record id
    @api searchKey=''

    //get related contactlist from apex class
    connectedCallback(){
        //caling apex method
        getContactList({lwcRecordId : this.recordId})
        .then(response=>{
            this.data=response
        })
        .catch(err=>{
            console.log('Error occured'+err);
        })
    }

    //search funtionality
    handleChanged(event){
        this.searchKey=event.target.value
        console.log('serchKey:'+JSON.stringify(this.searchKey));
        //send searchKey and record Id to apex method
        getContactList({searchKeys:this.searchKey,lwcRecordId:this.recordId})
        .then(res=>{
            this.data=res;
        })
        .catch(error=>{
            console.log(error);
        })
    }

    handleClick(event){
        const label = event.target.label;

        if(label === "Show Contacts"){
            this.showContacts="Hide Contacts"
            this.isVisible=true;
        }
        else if(label==="Hide Contacts"){
            this.showContacts="Show Contacts"
            this.isVisible=false
        }
    }
}