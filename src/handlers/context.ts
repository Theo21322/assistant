import { Message } from "whatsapp-web.js";

export async function createContextFromMessage(message: Message) {
  const contact = await message.getContact();
  const publicUserName = contact.pushname;

  return `${publicUserName}:\n${message.body}`;
}
