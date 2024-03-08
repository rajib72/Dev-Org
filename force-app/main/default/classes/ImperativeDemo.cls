public class ImperativeDemo {
	
    @AuraEnabled
    public static List<Players__c> getPlayerList(){
        List<Players__c> PlayerListForLWC=[select Id,Name from Players__c ];
        return playerListForLWC;
    }
}