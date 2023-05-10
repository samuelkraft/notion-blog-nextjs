import formidable from "formidable";
import * as yup from "yup";
import mail from "@sendgrid/mail";
mail.setApiKey(process.env.SENDGRID_API_KEY);
import fs from "fs";

let formSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
    email: yup.string().email().required(),
    file: yup.mixed().required(),
});


async function sendFormDataToMail(fields, files) {
    // save to persistent data store
    console.log("fields: ", fields);
    console.log("files: ", files);
    const message = `
        Nom: ${fields.lastName}\r\n
        Prénom: ${fields.firstName}\r\n
        Email: ${fields.email}\r\n
        Télephone: ${fields.phone}\r\n
        Message: ${fields.message}\r\n
    `;
    console.log("message: ", message);
    console.log("files.file.filepath: ", files.file.filepath);
    const attachement = fs.readFileSync(files.file.filepath).toString("base64");

    console.log("attachement: ", attachement);
    const data = {
        to: "frederic.lay@efrei.net",
        from: "samuel.sarfati@expand-cpa.com",
        subject: `${fields.lastName} ${fields.firstName} à envoyer sa candidature depuis le site Expand CPA`,
        text: message,
        html: message.replace(/\r\n/g, "<br/>"),
        attachments: [
            {
                content: attachement,
                filename: files.file.originalFilename,
                type: "application/pdf",
                disposition: "attachment",
            }
        ],
    };

    mail.send(data).catch((error) => {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    });

}

async function validateFromData(fields, files) {
    try {
        await formSchema.validate({ ...fields, ...files });
        return true;
    } catch (e) {
        return false;
    }
}

async function handlePostFormReq(req, res) {
    const form = formidable({ multiples: true });

    const formData = new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                reject("error");
            }
            resolve({ fields, files });
        });
    });

    try {
        const { fields, files } = await formData;
        const isValid = await validateFromData(fields, files);
        if (!isValid) throw Error("invalid form schema");

        try {
            await sendFormDataToMail(fields, files);
            res.status(200).send({ status: "submitted" });
            return;
        } catch (e) {
            res.status(500).send({ status: "something went wrong" });
            return;
        }
    } catch (e) {
        res.status(400).send({ status: "invalid submission" });
        return;
    }
}




export default async function handler(req, res) {
    if (req.method == "POST") {
        await handlePostFormReq(req, res);
    } else {
        res.status(404).send("method not found");
    }
}

export const config = {
    api: {
        bodyParser: false
    }
};

