import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../../lib/notion";
import Link from "next/link";
import { databaseId } from "../index.js";
import styles from "../../post.module.css";
import { getI18nProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { IconArrowLeft } from "@tabler/icons";
import { Skeleton } from "@mantine/core";
import { useRouter } from "next/router";

export const Text = ({ text }) => {
	if (!text) {
		return null;
	}
	return text.map((value) => {
		const {
			annotations: { bold, code, color, italic, strikethrough, underline },
			text,
		} = value;
		return (
			<span
				className={[
					bold ? styles.bold : "",
					code ? styles.code : "",
					italic ? styles.italic : "",
					strikethrough ? styles.strikethrough : "",
					underline ? styles.underline : "",
				].join(" ")}
				style={color !== "default" ? { color } : {}}>
				{text.link ? (
					<Link href={text.link.url}>{text.content}</Link>
				) : (
					text.content
				)}
			</span>
		);
	});
};

const renderNestedList = (block) => {
	const { type } = block;
	const value = block[type];
	if (!value) return null;

	const isNumberedList = value.children[0].type === "numbered_list_item";

	if (isNumberedList) {
		return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
	}
	return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
};

const renderBlock = (block) => {
	const { type, id } = block;
	const value = block[type];

	switch (type) {
		case "paragraph":
			return (
				<p>
					<Text text={value.rich_text} />
				</p>
			);
		case "heading_1":
			return (
				<h1>
					<Text text={value.rich_text} />
				</h1>
			);
		case "heading_2":
			return (
				<h2>
					<Text text={value.rich_text} />
				</h2>
			);
		case "heading_3":
			return (
				<h3>
					<Text text={value.rich_text} />
				</h3>
			);
		case "bulleted_list_item":
		case "numbered_list_item":
			return (
				<li>
					<Text text={value.rich_text} />
					{!!value.children && renderNestedList(block)}
				</li>
			);
		case "to_do":
			return (
				<div>
					<label htmlFor={id}>
						<input type='checkbox' id={id} defaultChecked={value.checked} />{" "}
						<Text text={value.rich_text} />
					</label>
				</div>
			);
		case "toggle":
			return (
				<details>
					<summary>
						<Text text={value.rich_text} />
					</summary>
					{value.children?.map((block) => (
						<Fragment key={block.id}>{renderBlock(block)}</Fragment>
					))}
				</details>
			);
		case "child_page":
			return <p>{value.title}</p>;
		case "image":
			const src =
				value.type === "external" ? value.external.url : value.file.url;
			const caption = value.caption ? value.caption[0]?.plain_text : "";
			return (
				<figure>
					<img src={src} alt={caption} />
					{caption && <figcaption>{caption}</figcaption>}
				</figure>
			);
		case "divider":
			return <hr key={id} />;
		case "quote":
			return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
		case "code":
			return (
				<pre className={styles.pre}>
					<code className={styles.code_block} key={id}>
						{value.rich_text[0].plain_text}
					</code>
				</pre>
			);
		case "file":
			const src_file =
				value.type === "external" ? value.external.url : value.file.url;
			const splitSourceArray = src_file.split("/");
			const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
			const caption_file = value.caption ? value.caption[0]?.plain_text : "";
			return (
				<figure>
					<div className={styles.file}>
						📎{" "}
						<Link href={src_file} passHref>
							{lastElementInArray.split("?")[0]}
						</Link>
					</div>
					{caption_file && <figcaption>{caption_file}</figcaption>}
				</figure>
			);
		case "bookmark":
			const href = value.url;
			return (
				<Link href={href} target='_brank' className={styles.bookmark}>
					{href}
				</Link>
			);
		default:
			return `❌ Unsupported block (${
				type === "unsupported" ? "unsupported by Notion API" : type
			})`;
	}
};

export default function Post({ page, blocks }) {
	const { t } = useTranslation("common");
	if (!page || !blocks) {
		return <div />;
	}

	const router = useRouter();
	if (router.isFallback) {
		return (
			<>
				<Skeleton height={50} circle mb='xl' />
				<Skeleton height={8} radius='xl' />
				<Skeleton height={8} mt={6} radius='xl' />
				<Skeleton height={8} mt={6} width='70%' radius='xl' />
			</>
		);
	}
	return (
		<div>
			<Head>
				<title>
					{page.properties.Name.title[0]?.plain_text || "New Article"}
				</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Thumbnail
				src={
					page?.cover?.external?.url ||
					"https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"
				}></Thumbnail>
			<article className={styles.container}>
				<h1 className={styles.name}>
					<Text text={page.properties.Name?.title || "Title"} />
				</h1>
				<section>
					{blocks.map((block) => (
						<Fragment key={block.id}>{renderBlock(block)}</Fragment>
					))}
					<Link href='/blog' className={styles.back}>
						<IconArrowLeft /> {t("goBack")}
					</Link>
				</section>
			</article>
		</div>
	);
}

export const getStaticPaths = async () => {
	const database = await getDatabase(databaseId);
	const paths = database.map((page) => ({
		params: { id: page.id, locale: "fr" },
	}));
	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async (context) => {
	const { id } = context.params;
	const page = await getPage(id);
	const blocks = await getBlocks(id);

	// Retrieve block children for nested blocks (one level deep), for example toggle blocks
	// https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
	const childBlocks = await Promise.all(
		blocks
			.filter((block) => block.has_children)
			.map(async (block) => {
				return {
					id: block.id,
					children: await getBlocks(block.id),
				};
			})
	);
	const blocksWithChildren = blocks.map((block) => {
		// Add child blocks if the block should contain children but none exists
		if (block.has_children && !block[block.type].children) {
			block[block.type]["children"] = childBlocks.find(
				(x) => x.id === block.id
			)?.children;
		}
		return block;
	});

	return {
		props: {
			page,
			blocks: blocksWithChildren,
			...(await getI18nProps(context, ["common", "home"])),
		},
		revalidate: 60,
	};
};

const Thumbnail = styled.img`
	width: 100%;
	height: 40vh;
	object-fit: cover;
	margin-top: -2.5rem;
	margin-bottom: 4rem;
`;
