import formidable from "formidable";
import * as yup from "yup";
import mail from "@sendgrid/mail";
import fs from "fs";

mail.setApiKey(process.env.SENDGRID_API_KEY);

const HTTP_OK = 200;
const HTTP_BAD_REQUEST = 400;
const HTTP_INTERNAL_SERVER_ERROR = 500;
const HTTP_NOT_FOUND = 404;

let formSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
    email: yup.string().email().required(),
    file: yup.mixed().required(),
});

async function sendFormDataToMail(fields, files) {
    const message = `
        Nom: ${fields.lastName}\r\n
        Prénom: ${fields.firstName}\r\n
        Email: ${fields.email}\r\n
        Télephone: ${fields.phone}\r\n
        Message: ${fields.message}\r\n
    `;

    const attachment = fs.readFileSync(files.file.filepath).toString("base64");

    const htmlMessage = message.replace(/(\S+):/g, "<b>$1:</b>").replace(/\r\n/g, "<br/>");
    const data = {
        to: "samuel.sarfati@expand-cpa.com",
        cc: ["samuel.attali@expand-cpa.com", "benjamin.pik@expand-cpa.com"],
        from: "contact@expand-cpa.com",
        subject: `${fields.lastName} ${fields.firstName} à envoyer sa candidature depuis le site Expand CPA`,
        text: message,
        html: htmlMessage,
        attachments: [
            {
                content: attachment,
                filename: files.file.originalFilename,
                type: "application/pdf",
                disposition: "attachment",
            }
        ],
    };

    return mail.send(data);
}

async function validateFromData(fields, files) {
    return formSchema.validate({ ...fields, ...files });
}

async function handlePostFormReq(req, res) {
    const form = formidable({ multiples: true });

    try {
        const { fields, files } = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    reject(new Error("Error parsing form data."));
                }
                resolve({ fields, files });
            });
        });

        await validateFromData(fields, files);
        await sendFormDataToMail(fields, files);
        res.status(HTTP_OK).send({ status: "success" });

    } catch (error) {
        if (error.message.includes("invalid form schema")) {
            res.status(HTTP_BAD_REQUEST).send({ status: "Invalid form data.", error: error.message });
        } else if (error.message.includes("Error parsing form data")) {
            res.status(HTTP_BAD_REQUEST).send({ status: "Error processing form.", error: error.message });
        } else {
            res.status(HTTP_INTERNAL_SERVER_ERROR).send({ status: "Something went wrong.", error: error.message });
        }
    }
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        await handlePostFormReq(req, res);
    } else {
        res.status(HTTP_NOT_FOUND).send({ status: "Method not found." });
    }
}

export const config = {
    api: {
        bodyParser: false
    }
};
