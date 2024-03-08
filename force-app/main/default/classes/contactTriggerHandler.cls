public with sharing class contactTriggerHandler {
    public static void sendEmailNotification(List<Contact> conList) {

        List<Messaging.Email> emailList=new List<Messaging.Email>();

        for(Contact con:conList){
            if(con.Email !=null){
                Messaging.SingleEmailMessage emailMsg=new Messaging.SingleEmailMessage();
                String[] toAddress = new String[]{con.Email};
                emailMsg.setToAddresses(toAddress);
                String emailSub='Welcome'+con.FirstName;
                emailMsg.setSubject(emailsub);
                String disName='Welcome Notification';
                emailMsg.setSenderDisplayName(disName);

                String content='Hi'+con.FirstName +',<br/><br/>'+
                                'Welcome to Salsforce Ecosystem ! <br/><br/>'+
                                'Begin your Salsforce admin and developer journey <br/><br/>'+
                                'With Rajib <br/><br/>'+
                                'Thank You';
                
                emailMsg.setHtmlBody(content);
                emailList.add(emailMsg);           
            }
        }
        Messaging.sendEmail(emailList);
    }
}