import { RichTextRender } from "~/types"

const RichTextBasicsRender: RichTextRender = ({ attr, children }) => (
	<span {...attr}>{children}</span>
)

export default RichTextBasicsRender
