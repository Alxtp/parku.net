import { DefaultAzureCredential } from "@azure/identity";
import { EmailClient } from "@azure/communication-email";

const endpoint = "https://acs-parku-prod.communication.azure.com";

export default defineEventHandler(async (event) => {
  const origin = getHeader(event, 'origin')
  const allowedOrigins = ['http://localhost:3000', 'https://parku.net']

  if (!origin || !allowedOrigins.some(allowed => origin.startsWith(allowed))) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  let credential = new DefaultAzureCredential();
  const client = new EmailClient(endpoint, credential);

  const message = {
    senderAddress: "DoNotReply@parku.net",
    content: {
      subject: "This is the subject",
      plainText: "This is the body",
    },
    recipients: {
      to: [
        {
          address: "customer@domain.com",
          displayName: "Customer Name",
        },
      ],
    },
  };

  const poller = await client.beginSend(message);
  const response = await poller.pollUntilDone();
}