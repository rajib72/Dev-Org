({
	updateChild : function(component, event, helper) {
		component.set("v.childVar","Updated Child Value");
	},
    onChildVarChange :  function(component, event, helper){
        console.log("Child value  has changed");
        console.log("old value : "+event.getParam("oldValue"));
        console.log("new value : "+event.getParam("value"));
    }
})