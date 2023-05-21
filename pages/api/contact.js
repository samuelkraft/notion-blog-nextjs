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
    const message = `
        Nom: ${fields.lastName}\r\n
        Prénom: ${fields.firstName}\r\n
        Email: ${fields.email}\r\n
        Télephone: ${fields.phone}\r\n
        Intéressé par : ${fields.needs}\r\n	
        Message: ${fields.message}\r\n
    `;

    const data = {
        to: "frederic.lay@efrei.net",
        from: "samuel.sarfati@expand-cpa.com",
        subject: `${fields.lastName} ${fields.firstName} à rempli le formulaire de contact depuis le site Expand CPA`,
        text: message,
        html: message.replace(/\r\n/g, "<br/>"),
    };

    mail.send(data).catch((error) => {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    });
}

async function validateFromData(fields) {
    try {
        await formSchema.validate(fields);
        return true;
    } catch (e) {
        return false;
    }
}

async function handlePostFormReq(req, res) {
    const fields = JSON.parse(req.body);

    const isValid = await validateFromData(fields);
    if (!isValid) {
        res.status(400).send({ status: "invalid submission" });
        return;
    }

    try {
        await sendFormDataToMail(fields);
        res.status(200).send({ status: "submitted" });
    } catch (e) {
        res.status(500).send({ status: "something went wrong" });
    }
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        await handlePostFormReq(req, res);
    } else {
        res.status(405).json({ message: "Method not allowed" }); // 405 Method Not Allowed
    }
}
