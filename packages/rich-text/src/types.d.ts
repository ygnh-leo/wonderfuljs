import type { FC, HTMLAttributes, ReactNode } from "react"
/*
 * s -> start (开始)
 * m -> middle (中间)
 * e -> end (结束)
 * a -> alone (单独)
 * */
export type PositionWithSelf = "s" | "m" | "e" | "a"

export type RichTextModuleArgs = (string | number)[]
/*
 * 0: string                -> 模块关键字
 * 1: PositionForSelf       -> 模块位于自身的位置
 * ...: string | number     -> 传递给模块的参数
 * */
export type RichTextModuleData = [
	string,
	PositionWithSelf,
	...RichTextModuleArgs
]

/*
 * 0: string         -> 文本内容
 * 1: ModuleData[]   -> 模块列表
 * */
export type RichTextItemData = [string, RichTextModuleData[]] | [string]

export type RichTextData = RichTextItemData[]

export type RichTextRender = FC<{
	attr?: HTMLAttributes<HTMLSpanElement>
	children: ReactNode
}>

export type RichTextHOC = (richRender: RichTextRender) => RichTextRender

export type RichTextModule = {
	hoc: (se: PositionWithSelf, args: (string | number)[]) => RichTextHOC
	activeFn: (val: string) => string | void
	// TODO: 增加字段？
}
export type RichTextModules = Record<string, RichTextModule>
