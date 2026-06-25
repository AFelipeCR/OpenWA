import { Client, type Message } from 'whatsapp-web.js';

export class BetterClient extends Client {
    async editMessageById(messageId: string, content: string): Promise<Message | null>{
        const msg = await this.getMessageById(messageId);
        
        if(!msg)
            return null;

        return msg.edit(content);
    };
}