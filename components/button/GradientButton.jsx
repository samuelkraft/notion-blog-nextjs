import React from "react";
import { Button } from "@mantine/core";
// import Link from "next/client";

const GradientButton = React.forwardRef(
	(
		{ gradientColor, children, marginLeft, marginRight, onClick, href, type, size },
		ref
	) => {
		return (
			<Button
				size={size}
				component={type ? "button" : "a"}
				ref={ref}
				href={href}
				onClick={onClick}
				type={type}
				styles={{
					root: {
						background: gradientColor,
						boxShadow: "0px 10.2188px 20.4375px rgba(123, 66, 246, 0.15)",
						marginLeft: marginLeft || "",
						marginRight: marginRight || "",
						borderRadius: 10,
						color: "white",
						fontFamily: "'Gilroy',sans-serif",
						fontWeight: 600,
						filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
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
