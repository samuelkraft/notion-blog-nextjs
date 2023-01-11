import React from "react";
import { Button } from "@mantine/core";


const BorderedButton = React.forwardRef(
    (
        { borderColor, children, hoverable, textColor, externalUrl, rightIcon, solidColor, fontSize, compact, href, onClick, type }, ref

    ) => {
        return (
            <Button variant="bordered"
                target={externalUrl ? "_blank" : ""}
                rel={externalUrl ? "noopener noreferrer" : ""}
                component={type ? "button" : "a"}
                href={href}
                onClick={onClick}
                type={type}
                ref={ref}
                rightIcon={rightIcon ? rightIcon : null}
                compact={compact}
                styles={{
                    root: {
                        backgroundColor: solidColor ? solidColor : 'transparent',
                        border: `2px solid ${borderColor}`,
                        height: compact ? 32 : 42,
                        paddingLeft: compact ? 15 : 20,
                        paddingRight: compact ? 15 : 20,
                        borderRadius: compact ? 5 : 12,
                        color: textColor,
                        fontFamily: "'Gilroy',sans-serif",
                        fontWeight: compact ? 500 : 600,
                        fontSize: fontSize,
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                        position: "relative !important",
                        '&:hover': {
                            color: hoverable && "white",
                            background: hoverable && "linear-gradient(117.03deg, #3672F8 0%, #B01EFF 100%)",
                            boxShadow: hoverable && "0px 10.2188px 20.4375px rgba(123, 66, 246, 0.15)",
                            borderRadius: hoverable && "12.2625px",
                            border: hoverable && 0,
                        },

                    },
                }}
            >

                {children}
            </Button >
        )
    })

export default BorderedButton