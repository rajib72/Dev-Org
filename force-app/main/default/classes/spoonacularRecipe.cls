public with sharing class spoonacularRecipe {
    private static final String SPOONACULAR_API = 'https://api.spoonacular.com';
    private static final String API_KEY = 'd281d2add88542b5b1ac4838e956455b';

    @AuraEnabled
    public static String getRandomReceipe(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR_API+'/recipes/random?apiKey='+API_KEY);
        request.setMethod('GET');

        HttpResponse response = http.send(request);
        System.debug('response code '+response.getStatusCode());
        if(response.getStatusCode()==200){
            System.debug('response '+response.getBody());
            return response.getBody();
        }
        return '';
    }
    @AuraEnabled
    public static String getReceipe(String receipeId){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR_API+'/recipes/'+receipeId+'/information?apiKey='+API_KEY);
        request.setMethod('GET');

        HttpResponse response = http.send(request);
        System.debug('response code '+response.getStatusCode());
        if(response.getStatusCode()==200){
            System.debug('response '+response.getBody());
            return response.getBody();
        }
        return '';
    }
    @AuraEnabled
    public static String getReceipeByIngredient(String ingredients){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR_API+'/recipes/findByIngredients?apiKey='+API_KEY+'&ingredients'+ingredients);
        request.setMethod('GET');
       
        HttpResponse response = http.send(request);
        System.debug('response code '+response.getStatusCode());
        if(response.getStatusCode()==200){
            System.debug('response '+response.getBody());
            return response.getBody();
        }
        return '';
    }
}