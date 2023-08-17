import mail from "@sendgrid/mail";
import * as yup from "yup";
mail.setApiKey(process.env.SENDGRID_API_KEY);

let formSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    needs: yup.string().required(),
    message: yup.string(),
});

async function sendFormDataToMail(fields) {
    // Make the word before : bold

    const message = `
        Nom: ${fields.lastName}\r\n
        Prénom: ${fields.firstName}\r\n
        Email: ${fields.email}\r\n
        Télephone: ${fields.phone}\r\n
        Besoin: ${fields.needs}\r\n	
        Message: ${fields.message}\r\n
    `;

    // Prepare the message for HTML
    let htmlMessage = message.replace(/(\S+):/g, "<b>$1:</b>").replace(/\r\n/g, "<br/>");

    // const data = {
    //     to: "contact@expand-cpa.com",
    //     cc: ["samuel.attali@expand-cpa.com", "benjamin.pik@expand-cpa.com"],
    //     from: "samuel.sarfati@expand-cpa.com",
    //     subject: `${fields.lastName} ${fields.firstName} à rempli le formulaire de contact depuis le site Expand CPA`,
    //     text: message,
    //     html: htmlMessage,
    // };

    const data = {
        to: "lay.frederic@yahoo.fr",
        from: "contact@expand-cpa.com",
        subject: `${fields.lastName} ${fields.firstName} à rempli le formulaire de contact depuis le site Expand CPA`,
        text: message,
        html: htmlMessage,
    };



    try {
        await mail.send(data);
        console.log(`Mail successfully sent to contact@expand-cpa.com regarding: ${fields.lastName} ${fields.firstName}`);
        return true; // Indicate success
    } catch (error) {
        console.error("Error occurred while sending mail:", error.message);

        if (error.response) {
            console.error("SendGrid response:", error.response.body);
        }
        return false; // Indicate failure
    }
}

async function validateFromData(fields) {
    try {
        await formSchema.validate(fields);
        return true;
    } catch (e) {
        console.error("Form validation failed:", e.message);
        return false;
    }
}

async function handlePostFormReq(req, res) {
    const fields = JSON.parse(req.body);

    const isValid = await validateFromData(fields);
    if (!isValid) {
        console.error("Invalid form submission received:", fields);
        res.status(400).send({ status: "invalid submission" });
        return;
    }

    const isMailSent = await sendFormDataToMail(fields);
    if (isMailSent) {
        res.status(200).send({ status: "success" });
    } else {
        console.error("Failed to send email for form:", fields);
        res.status(500).send({ status: "something went wrong" });
    }
}

export default async function handler(req, res) {
    console.log(`Received ${req.method} request to form handler.`);

    if (req.method === "POST") {
        await handlePostFormReq(req, res);
    } else {
        console.warn(`Method not allowed: ${req.method}`);
        res.status(405).json({ message: "Method not allowed" });
    }
}
