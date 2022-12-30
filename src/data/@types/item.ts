export interface Item {
	Name: string,
	Caption: string,
	contentPosition: "left" | "right" | "middle",
	Items: { Name: string, Image: string }[]
}
