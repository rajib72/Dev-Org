public class ForeachDemo {
    @AuraEnabled(cacheable=true)
    public static List<Players__c> getPlayerList(){
        List<Players__c> playerList=[Select Id,Name from Players__c];
        return playerList;
    }
}