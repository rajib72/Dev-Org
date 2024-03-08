({
    doInit : function(component, event, helper) {
        console.log('Initialiation Conpleate')
        const gameMode =component.get("v.mode")
        let column = 0
        if(gameMode && gameMode ==="hard"){
            column=6
        }
        else if(gameMode === "medium"){
            column=4
        }
        else{
            column=3
        }
        //get number of columns based on game mode
        let blockSize = 12/column;
        component.set("v.blockSize",blockSize)

        //build a list of 100 words
        const words=helper.getWords(column * column)
        component.set("v.words",words);
        console.log("Words = " +words )
        //get win word
        const winWord = helper.getWinWord(words)
        component.set("v.winWord",winWord)
        console.log("Win word = "+helper.getWinWord(words)); 
        console.log("Win word = "+component.get("v.winWord")); 
    },
    doRender : function(component, event, helper) {
        console.log('Render Conpleate')
    },
    blockClickHandler : function(component,event,helper){
        let clickCount = component.get("v.clickCount")  +  1
        //get event value
        const value = event.getParam("value")

        if(value === component.get("v.winWord")){
            //user has won
            component.set("v.result","YOU WIN")
            console.log("You Win");
            helper.disableBaord(component)
        }else if(clickCount===3){
            //user lose
            component.set("v.result","YOU LOSE")
            console.log("You Lose");
            helper.disableBaord(component)
        }
        component.set("v.clickCount",clickCount)
    }
})