({
    getWords : function(count) {
        if(count >100) return;
        //build an array
        let wordsArray = ["Word",
                        "Cat",
                        "Dog",
                        "Umbrella",
                        "Rain",
                        "Rajib",
                        "Laptop",
                        "Salesforce",
                        "NoteBook",
                        "Course",
                        "Developer",
                        "Rule",
                        "Frantic",
                        "Farm",
                        "Possess",
                        "Men",
                        "Pleasant",
                        "Zoom",
                        "Sidewalk",
                        "Reply"]
        
        
        //randomize the word array
        wordsArray = this.rendomizeArray(wordsArray)
        //return requested words
        return wordsArray.slice(0,count)                
    },

    rendomizeArray : function(arr){
        const randomArr = arr
        for(let i = randomArr.length - 1;i>0;i--){
            const j = Math.floor(Math.random() * i)
            const temp  = randomArr[i]
            randomArr[i]=randomArr[j]
            randomArr[j]=temp
        }
        return randomArr;
    },
    
    getWinWord : function(arr){
        const randomIndex=Math.floor(Math.random() * arr.length);
        return arr[randomIndex]
    },
    disableBaord :  function(component){
        component.set("v.boardDisabled",true)
    },
    enableBaord :  function(component){
        component.set("v.boardDisabled",false)
    }
})