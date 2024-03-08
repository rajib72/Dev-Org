trigger contactTrigger on Contact (after insert) {
    if(Trigger.isInsert && Trigger.isAfter){
        contactTriggerHandler.sendEmailNotification(Trigger.New);
    }
}