public class wireDemo {

    @AuraEnabled(cacheable=true)
    public static List<Players__c> getPlayerList(){
        
        List<Players__c> playerDetails = [Select Id,Name from Players__c];
        system.debug('playerDetails:'+playerDetails);
        return playerDetails;
    }
}