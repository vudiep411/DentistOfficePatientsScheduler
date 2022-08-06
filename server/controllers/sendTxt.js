import twilio from 'twilio'


export const sendText = async (req, res) => {
    const recipient = req.body.recipient
    const message = req.body.message
    const client = new twilio(process.env.accountSid, process.env.authToken)

    recipient.map((rep) => {
        client.messages.create({
            body: message,
            to: rep.trim(),
            from: '+19855455367'
        }).then((message) => {
            console.log('Sent to: ' + rep.trim())})
    })
}