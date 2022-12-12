import { useState } from "react"
import createRichTextHOC from "~/utils/createRichTextHOC"
import calculateStyles from "~/utils/calculateStyles"
import { RichTextData, RichTextModules } from "~/types"
import Render from "~/components/Render"

const RichText = () => {
	const [content, setContent] = useState<RichTextData>([
		["hello-world"],
		["hello-world", [["b", "a"]]],
		["code", [["code", "a"]]],
		["code", [["code", "s"]]],
		[
			"-blod",
			[
				["code", "m"],
				["b", "a"],
			],
		],
		["-ok", [["code", "e"]]],
	])
	return (
		<div>
			<Render state={content} modules={modules} />
		</div>
	)
}

export default RichText

const modules: RichTextModules = {
	// 加粗
	b: {
		hoc: () =>
			createRichTextHOC({
				style: {
					fontWeight: "bold",
				},
			}),
		activeFn: (val) => {
			const reg = /\*(.*?)\*/g
			const match = reg.exec(val)
			return match ? match[1] : void 0
		},
	},
	code: {
		hoc: (cn, args) => {
			return createRichTextHOC({
				style: {
					backgroundColor: "rgba(154,127,219,0.3)",
					...calculateStyles(
						{
							rounded: "0.25em",
							px: "0.25em",
							py: "0",
							border: "1px solid #9a7fdb",
							mx: "0.125em",
							my: "0",
						},
						cn
					),
				},
			})
		},
		activeFn: (val) => {
			const reg = /`(.*?)`/g
			const match = reg.exec(val)
			return match ? match[1] : void 0
		},
	},
}
