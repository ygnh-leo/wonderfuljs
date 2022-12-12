import type React from "react"
import { PositionWithSelf } from "~/types"

const calculateStyles = (
	styles: StylesType,
	positionWithSelf: PositionWithSelf
) => {
	// 情况划分(仅横向划分) ->
	// 1. 开始，边系 css 为 left,top,bottom     ｜ 角系 css 为 left-top,left-bottom
	// 2. 中间，边系 css 为 top,bottom          ｜ 角系 css 为 none
	// 3. 结束，边系 css 为 right,top,bottom    ｜ 角系 css 为 right-top,right-bottom
	// 4. 单独，完全包括
	switch (positionWithSelf) {
		case "s":
			return calculateStylesWithStart(styles)
		case "m":
			return calculateStylesWithMiddle(styles)
		case "e":
			return calculateStylesWithEnd(styles)
		case "a":
			return calculateStylesWithAlone(styles)
		default:
			return calculateStylesWithAlone(styles)
	}
}

export default calculateStyles

// 会被分段影响的 css 属性 (边系、角系) , key 为 css 属性名，value 为 css 属性值
type StylesType = Partial<
	Record<"border" | "rounded" | "p" | "px" | "py" | "m" | "mx" | "my", string>
>

const calculateStylesWithStart = (styles: StylesType): React.CSSProperties => ({
	borderTop: styles.border,
	borderBottom: styles.border,
	borderLeft: styles.border,
	borderRadius: getCorner("s", styles.rounded),
	padding: getEdge("s", styles.px || styles.p, styles.py),
	margin: getEdge("s", styles.mx || styles.m, styles.my),
})

const calculateStylesWithMiddle = (
	styles: StylesType
): React.CSSProperties => ({
	borderTop: styles.border,
	borderBottom: styles.border,
	borderRadius: getCorner("m", styles.rounded),
	padding: getEdge("m", styles.px || styles.p, styles.py),
	margin: getEdge("m", styles.mx || styles.m, styles.my),
})

const calculateStylesWithEnd = (styles: StylesType): React.CSSProperties => ({
	borderTop: styles.border,
	borderBottom: styles.border,
	borderRight: styles.border,
	borderRadius: getCorner("e", styles.rounded),
	padding: getEdge("e", styles.px || styles.p, styles.py),
	margin: getEdge("e", styles.mx || styles.m, styles.my),
})

const calculateStylesWithAlone = (styles: StylesType): React.CSSProperties => ({
	border: styles.border,
	borderRadius: styles.rounded,
	padding: `${styles.py || styles.p} ${styles.px || styles.p}`,
	margin: `${styles.my || styles.m} ${styles.mx || styles.m}`,
})

const getEdge = (type: "s" | "e" | "m", val?: string, y?: string) => {
	if (!val) return undefined
	const left = type === "s" ? val : 0
	const right = type === "e" ? val : 0
	return `${y || val || 0} ${right} ${y || val || 0} ${left}`
}
const getCorner = (type: "s" | "e" | "m", val?: string) => {
	if (!val) return undefined
	const left = type === "s" ? val : 0
	const right = type === "e" ? val : 0
	return `${left} ${right} ${right} ${left}`
}
