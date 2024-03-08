public class dataTableWithRowSelectionClass {
	@AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(Id lwcRecordId,String searchKeys){
        //if search key is available
        if(searchKeys!=null && searchKeys!='' ){
            String key='%'+searchKeys+'%';
            List<Contact> contactSearchList=[Select Id,Phone,Name,AccountId From Contact
                                            Where AccountId=: lwcRecordId AND Name Like :key];
            return contactSearchList;
        }
        else{
            List<Contact> contactList=[Select id,Name,Phone,AccountId from Contact Where AccountId =:lwcRecordId];
            if(!contactList.isEmpty()){
                return contactList;
            }
            return null;
        }
        
    }
}