import React from "react";
import { Button } from "@mantine/core";
// import Link from "next/client";
import { IconChevronDown } from '@tabler/icons';

const GradientButton = React.forwardRef(
	(
		{ gradientColor, children, marginLeft, marginRight, onClick, href, type, size, width, rightIcon },
		ref
	) => {
		return (
			<Button
				size={width ? undefined : size}
				component={type ? "button" : "a"}
				ref={ref}
				href={href}
				onClick={onClick}
				type={type}
				aria-label={children}
				rightIcon={rightIcon}
				styles={{
					root: {
						background: gradientColor,
						marginLeft: marginLeft || "",
						marginRight: marginRight || "",
						borderRadius: 10,
						color: "white",
						fontFamily: "'Gilroy',sans-serif",
						fontWeight: 600,
						fontSize: "16px",
						boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
						width: width || "",
						height: size === "lg" ? "3.5rem" : "2.5rem",
						'&:hover': {
							backgroundColor: gradientColor,
							textDecoration: "none",
							color: "white",
						},
					},
				}}>
				{children}
			</Button>
		);
	}
);

export default GradientButton;
