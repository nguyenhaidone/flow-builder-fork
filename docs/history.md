---
order: 5
---

# Undo、redo

## 启用

设置 `historyTool` 属性为 `true` 即可启用

### FlowBuilder

| 参数        | 说明       | 类型                                                 | 必须 | 默认值 |
| :---------- | :--------- | :--------------------------------------------------- | :--- | :----- |
| historyTool | Undo、redo | `boolean` \| [HistoryToolConfig](#historytoolconfig) |      | false  |

#### HistoryToolConfig

| 参数   | 说明                     | 类型      | 默认值 |
| :----- | :----------------------- | :-------- | :----- |
| hidden | 是否隐藏默认的历史工具栏 | `boolean` | false  |
| max    | 保留的最多数量           | `number`  | 10     |

<br>

<code src="./demo/history/index.tsx" />

## 自定义历史参数

将 `historyTool` 设置为具体的配置对象。

<code src="./demo/history/config.tsx" />

## 自定义历史工具栏

调用 react-flow-builder 实例中的 `history` 方法也可以进行 Undo、redo，同时监听 `onHistoryChange` 事件。

### FlowBuilder

| 参数            | 说明                                                              | 类型                                                     | 必须 | 默认值 |
| :-------------- | :---------------------------------------------------------------- | :------------------------------------------------------- | :--- | :----- |
| onHistoryChange | 历史状态变化之后的回调，两个参数分别代表是否需要禁用 Undo 和 redo | `(undoDisabled: boolean, redoDisabled: boolean) => void` |      | -      |

### FlowBuilderInstance

| 名称    | 说明       | 类型                               |
| :------ | :--------- | :--------------------------------- |
| history | Undo、redo | `(type: 'undo' \| 'redo') => void` |

<br>

<code src="./demo/history/custom.tsx" />
