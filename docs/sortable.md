---
order: 7
---

# Sort

## dragSort

### 启用

设置 `sortable` 属性为 `true` 即可启用

#### FlowBuilder

| 参数     | 说明                               | 类型      | 必须 | 默认值 | 版本  |
| :------- | :--------------------------------- | :-------- | :--- | :----- | :---- |
| sortable | Condition node 在分支内可 dragSort | `boolean` |      | false  | 1.4.0 |

<code src="./demo/sortable/index.tsx" />

### 自定义锚点

#### FlowBuilder

| 参数           | 说明                     | 类型        | 必须 | 默认值 | 版本  |
| :------------- | :----------------------- | :---------- | :--- | :----- | :---- |
| sortableAnchor | 自定义 dragSort 的锚点序 | `ReactNode` |      | -      | 1.4.0 |

<code src="./demo/sortable/anchor.tsx" />

## 自定义 Sort

### useSort

| 属性     | 说明          | 类型                                              | 版本  |
| :------- | :------------ | :------------------------------------------------ | :---- |
| backward | 向后 Sort     | `(node: INode = useContext(NodeContext)) => void` | 1.4.3 |
| forward  | 向前 Sort     | `(node: INode = useContext(NodeContext)) => void` | 1.4.3 |
| end      | Sort 到最末尾 | `(node: INode = useContext(NodeContext)) => void` | 1.4.3 |
| start    | Sort 到最前面 | `(node: INode = useContext(NodeContext)) => void` | 1.4.3 |

<code src="./demo/sortable/hook.tsx" />
