@RESTResource(urlMapping='/CreateLead/')
global class restAPI {
    @HTTPPost
    global static String doPost(){
        String fName,lName,comp;
        String fieldName,fieldValue;
        
        RestRequest req = RestContext.request;
        
        RestResponse res = RestContext.response;
        
        String jsonBody = req.requestBody.toString();
        
        JSONParser parser = JSON.createParser(jsonBody);
        
        while(parser.nextToken()!=null)
            {
                if(parser.getCurrentToken() != JSONToken.END_OBJECT)
                {
                    fieldName = parser.getCurrentName();
                    fieldValue = parser.getText();
                    if(fieldName =='firstName')
                    {
                        fName = fieldValue;
                    }
                    else if (fieldName =='LastName')
                    {
                        lName = fieldValue;
                    }
                    else if (fieldName =='Company')
                    {
                        comp = fieldValue;
                    }    
                }
            }
        
        Lead l=new Lead(firstName = fName,lastName = lname,company = comp);
        insert l;
        
        return l.id;
        
    }
}