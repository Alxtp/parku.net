import { DefaultAzureCredential } from "@azure/identity"
import { EmailClient } from "@azure/communication-email"

const endpoint = "https://acs-mainparku-dev.switzerland.communication.azure.com"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    if (!body.email || !body.name || !body.message) {
      throw createError({
        statusCode: 400,
        message: "Missing required fields"
      })
    }

    let credential = new DefaultAzureCredential()
    const client = new EmailClient(endpoint, credential)

    const message = {
      senderAddress: "DoNotReply@parku.net",
      replyTo: [
        {
          address: body.email,
          displayName: body.name
        }
      ],
      content: {
        subject: `Contact Form: ${body.name}`,
        plainText: `From: ${body.name} (${body.email})\n\nMessage:\n${body.message}`,
      },
      recipients: {
        to: [
          {
            address: "greedthegrape@gmail.com",
            displayName: "Parku Support",
          },
        ],
      },
    }

    const poller = await client.beginSend(message)
    const response = await poller.pollUntilDone()

    return {
      success: true,
      messageId: response.id
    }

  } catch (error) {
    console.error('Email sending failed:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to send email'
    })
  }
})
