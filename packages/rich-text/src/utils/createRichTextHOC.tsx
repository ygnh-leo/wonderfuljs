import React, { FC, HTMLAttributes, ReactNode } from "react"
import { RichTextHOC, RichTextRender } from "~/types"

const createRichTextHOC: CreateRichTextHOC =
	({
		style: defineStyle,
		className: defineClassName,
		attr: defineAttr,
		Component,
	}) =>
	(richRender) => {
		const RichTextHOC: RichTextRender = ({ attr: inheritAttr, children }) => {
			const className =
				[inheritAttr?.className, defineAttr?.className, defineClassName]
					.filter(Boolean)
					.join(" ") || undefined

			const style = {
				...inheritAttr?.style,
				...defineAttr?.style,
				...defineStyle,
			}

			const attr = {
				...inheritAttr,
				...defineAttr,
				className,
				style,
			}

			if (!Component) {
				return richRender({ attr, children })
			}

			return <Component>{richRender({ attr, children })}</Component>
		}
		return RichTextHOC
	}

export default createRichTextHOC

type CreateRichTextHOC = (props: {
	style?: React.CSSProperties
	className?: string
	attr?: HTMLAttributes<HTMLSpanElement>
	Component?: FC<{
		children: ReactNode
	}>
}) => RichTextHOC
