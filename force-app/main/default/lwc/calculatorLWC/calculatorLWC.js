import { LightningElement,track } from 'lwc';

export default class CalculatorLWC extends LightningElement {
    @track no1
    @track no2
    @track result

    handleChange(event){
        const currentInputName=event.target.name;
        const currentVal=event.target.value;

        if(currentInputName==="number1"){
            this.no1=currentVal;
        }
        else{
            this.no2=currentVal;
        }
    }
    doAdd(){
        this.result=parseInt(this.no1)+parseInt(this.no2)
    }
    doSub(){
        this.result=parseInt(this.no1)-parseInt(this.no2)
    }
    doMul(){
        this.result=parseInt(this.no1)*parseInt(this.no2)
    }
    doDiv(){
        this.result=parseInt(this.no1)/parseInt(this.no2)
    }
}