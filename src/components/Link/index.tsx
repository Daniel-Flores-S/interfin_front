import NextLink from "next/link";

interface LinkProps {
	href: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	color?:
	| "inherit"
	| "primary"
	| "secondary";
	fontSize?:
	| "inherit"
	| "small"
	| "medium"
	| "large";
	underline?:
	| "none"
	| "always"
	| "hover"
	| "focus";
	size?: "small" | "medium" | "large";
}

export const Link = (
	props: LinkProps,
) => {
	const { href, children, color, } = props;
	return (
		<NextLink
			href={href}
			color={color}
			style={{
				textDecoration: "none",
			}}
		>
			{children}
		</NextLink>
	);
};
