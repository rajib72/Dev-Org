({
    blockClickHandler : function(component, event, helper) {
        const open =component.get("v.open")
        if(open === false){
            component.set("v.open",true)
            //get label value
            const label = component.get("v.label")
            //fire the block click event
            let compEvent = component.getEvent("onClick")
            compEvent.setParams({value : label})
            compEvent.fire()
        }
    }
})