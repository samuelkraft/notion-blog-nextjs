import { Block, Post } from "./notion";

const REQUIRED_PROPERTIES = ["Name"];
const WARNING_PROPERTIES = ["Tags"];

type PostProperties = Post["properties"];
type TitleTypeProperty = Extract<PostProperties[string], { type: "title" }>;
interface PropertiesTypeDefinition {
    Name: TitleTypeProperty
}

export type ValidatedPost = Omit<Post, "properties"> & { properties: PropertiesTypeDefinition };

export const validatePostProperties = (post: Post): ValidatedPost => {
    WARNING_PROPERTIES.forEach((prop) => {
        if (post.properties[prop] === undefined) {
            console.warn(`WARNING for post with id "${post.id}": ${prop} is undefined`);
        }
    });
    REQUIRED_PROPERTIES.forEach((property) => {
        if (post.properties[property] === undefined) {
            validationError(property, post.id, "is required, but not defined");
        };
    });
    // TODO: add class validator?
    if (post.properties.Name.type !== "title") {
        validationError("Name", post.id, "is not a title");
    }
    const validatedProperties = (post.properties as unknown as PropertiesTypeDefinition);
    // we require the "Name" property to be a simple, plain text, non-empty string
    validatePlainTextTitle(validatedProperties.Name, post.id);
    return post as unknown as ValidatedPost;
}

const validationError = (prop: string, id: string, message: string) => {
    throw new Error(`ERROR for post with id "${id}": property "${prop}" ${message}`);
}

const validatePlainTextTitle = (prop: TitleTypeProperty, postId: string) => {
    const title = prop.title[0];
    if (!title) {
        validationError("Name", postId, "is not set");
    }
    if (title.plain_text.length === 0) {
        validationError("Name", postId, "is empty");
    }
}
type FileOrImage = Extract<Block, { type: "file" }>["file"] | Extract<Block, { type: "image" }>["image"];
export function getFileUrl(blockData: FileOrImage){
    const external = blockData as Extract<FileOrImage, { external: any }>;
    const file = blockData as Extract<FileOrImage, { file: any }>;
    return blockData.type === "external" ? external.external.url : file.file.url;
}