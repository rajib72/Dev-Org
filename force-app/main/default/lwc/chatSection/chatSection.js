import { LightningElement,track } from 'lwc';

export default class ChatSection extends LightningElement {
    @track messages = [
        { id: 1, content: 'Hi there!', sender: 'User1', timestamp: '1:00pm' },
        { id: 2, content: 'Hey, how are you?', sender: 'User2', timestamp: '1:05pm' },
        { id: 3, content: "I'm good, How about you?", sender: 'User1', timestamp: '1:07pm' },
        { id: 4, content: "I'm doing well too", sender: 'User2', timestamp: '1:10pm' }
      ];
      @track messageInput = '';
    
      handleInputChange(event) {
        this.messageInput = event.target.value;
      }
    
      handleSendMessage() {
        if (this.messageInput) {
          this.messages.push({
            id: this.messages.length + 1,
            content: this.messageInput,
            sender: 'User1',
            timestamp: new Date().toLocaleTimeString()
          });
          this.messageInput = '';
        }
      }
}