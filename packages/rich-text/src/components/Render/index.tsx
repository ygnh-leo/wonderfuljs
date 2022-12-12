import { RichTextData, RichTextModules } from "~/types"
import { Dispatch, memo, SetStateAction, useRef } from "react"
import RichTextBasicsRender from "~/components/RichTextBasicsRender"

const Render = ({ state, modules }: RenderProps) => {
	const weekMap = useRef(new WeakMap())
	state.forEach((item) => {
		if (!weekMap.current.has(item)) {
			weekMap.current.set(item, Math.random().toString(36).slice(-8))
		}
	})

	return (
		<>
			{state.map((item, index) => {
				const [value, moduleTypes] = item
				if (!moduleTypes)
					return (
						<span key={weekMap.current.get(item)} data-text-index={index}>
							{value}
						</span>
					)
				// 改为使用 reduce 进行 HOC 组合包裹, 用 HOC 依次对 RichRender 进行包裹，children 为 value 的值
				const Render = moduleTypes.reduce((acc, current) => {
					const [type, se, ...args] = current
					const module = modules[type] // TODO: 开发环境下、测试环境下，对错误边界进行判断
					const hoc = module.hoc(se, args)
					return hoc(acc)
				}, RichTextBasicsRender)
				return <Render key={weekMap.current.get(item)}>{value}</Render>
			})}
		</>
	)
}

export default memo(Render)

type RenderProps = {
	state: RichTextData
	modules: RichTextModules
}
