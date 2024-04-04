public with sharing class googleBlogRss {
    public class BlogPost {
        public String title;
        public String link;
        public String imgUrl;

        public BlogPost(String title, String link, String imgUrl) {
            this.title = title;
            this.link = link;
            this.imgUrl = imgUrl;
        }
    }
    @AuraEnabled(cacheable=true)
	public static String parseXMLFromURL(){
        String imgUrl;
        List<BlogPost> blogPosts = new List<BlogPost>();
        
        String url = 'https://blog.google/technology/developers/rss/';
        
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');
        HttpResponse response = new Http().send(request);

        if (response.getStatusCode() == 200) {
            // Create a new Dom.Document instance and load the XML content
            Dom.Document xmlDoc = new Dom.Document();
            xmlDoc.load(response.getBody());
          // Get the root element of the XML (usually <rss>)
            Dom.XmlNode rootNode = xmlDoc.getRootElement();
            
            // Get the <channel> element that contains the blog post items
            Dom.XmlNode channelNode = null;
            for (Dom.XmlNode child : rootNode.getChildElements()) {
                if (child.getName() == 'channel') {
                    channelNode = child;
                    break;
                }
            }

            if (channelNode != null) {
                // Get all <item> elements under the <channel> element
                List<Dom.XmlNode> itemNodes = new List<Dom.XmlNode>();
				List<Dom.XmlNode> imageNodes = new List<Dom.XmlNode>();                
                for (Dom.XmlNode child : channelNode.getChildElements()) {
                    if(child.getName() == 'image'){
                        imageNodes.add(child);
                    }
                    else if (child.getName() == 'item') {
                        itemNodes.add(child);
                    }
                }
                
                for (Dom.XmlNode imageNode : imageNodes){
                    for (Dom.XmlNode child : imageNode.getChildElements()){
                        if (child.getName() == 'url'){
                            imgUrl = child.getText();
                        }
                    }
                }

                // Loop through each <item> element and extract the data
                for (Dom.XmlNode itemNode : itemNodes) {
                    String title = '';
                    String link = '';
                    
                    for (Dom.XmlNode child : itemNode.getChildElements()) {
                        if (child.getName() == 'title') {
                            title = child.getText();
                        } else if (child.getName() == 'link') {
                            link = child.getText();
                        } 
                    }
                    //System.debug(title+' '+' '+link+' '+imgUrl);
                    blogPosts.add(new BlogPost(title, link, imgUrl));
                }
            }
            System.debug(JSON.serialize(blogPosts));
    }
        return JSON.serialize(blogPosts);
	}
}