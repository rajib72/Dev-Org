({
    startGame : function(component, event, helper) {
        console.log('The start new game button is clicked');
        let gameModeComboBox = component.find("gameMode")
        let selectedValue = gameModeComboBox.get("v.value")

        component.set("v.selectedMode",selectedValue)
        console.log('the game mode is - >',selectedValue);
        // alert('the game mode is - >'+ selectedValue)
    },
    reshuffleBoard : function(component, event, helper) {
        console.log('The reshuffle button is clicked');
    }
})