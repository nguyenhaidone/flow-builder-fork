---
order: 8
---

# API

## FlowBuilder

| 参数                      | 说明                                                                                                                                                                                                                 | 类型                                                                 | 必须 | 默认值     | 版本  |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- | :--- | :--------- | :---- |
| backgroundColor           | 背景颜色                                                                                                                                                                                                             | `string`                                                             |      | #F7F7F7    |       |
| className                 | 外层容器的类名                                                                                                                                                                                                       | `string`                                                             |      | -          |       |
| draggable                 | 是否启用 drag 能力                                                                                                                                                                                                   | `boolean`                                                            |      | false      | 1.0.0 |
| DragComponent             | 自定义 drag 组件                                                                                                                                                                                                     | `React.FC`\<[DragComponent](#dragcomponent)\>                        |      | -          | 1.0.0 |
| DropComponent             | 自定义放置组件                                                                                                                                                                                                       | `React.FC`\<[DropComponent](#dropcomponent)\>                        |      | -          | 1.0.0 |
| drawerProps               | 配置节点时 Drawer 组件额外的 [props](https://ant.design/components/drawer/#API)。流程引擎内置了 `visible` 和 `onClose，以及` {`title`: "Configuration", `width`: 480, `destroyOnClose`: true, `maskClosable`: false} | `DrawerProps`                                                        |      | -          |       |
| drawerVisibleWhenAddNode  | 增加节点时打开抽屉                                                                                                                                                                                                   | `boolean`                                                            |      | false      |       |
| historyTool               | Undo，redo                                                                                                                                                                                                           | `boolean` \| [HistoryToolConfig](#historytoolconfig)                 |      | false      |       |
| layout                    | 垂直/水平布局                                                                                                                                                                                                        | `vertical` \| `horizontal`                                           |      | `vertical` |       |
| lineColor                 | 连线的颜色                                                                                                                                                                                                           | `string`                                                             |      | #999999    |       |
| nodes                     | 流程引擎的节点                                                                                                                                                                                                       | [Node](#node)[]                                                      | ✓    | -          |       |
| readonly                  | 只读模式，不能进行节点的增加、删除、配置                                                                                                                                                                             | `boolean`                                                            |      | false      |       |
| registerNodes             | 注册节点                                                                                                                                                                                                             | [RegisterNode](#registernode)[]                                      | ✓    | -          |       |
| registerRemoteNodes       | 注册远程节点                                                                                                                                                                                                         | [RegisterRemoteNode](#registerremotenode)[]                          |      | -          | 1.3.0 |
| showPracticalBranchNode   | -                                                                                                                                                                                                                    | `boolean`                                                            |      | false      | 1.1.0 |
| showPracticalBranchRemove | -                                                                                                                                                                                                                    | `boolean`                                                            |      | false      | 1.1.0 |
| sortable                  | Condition node 在分支内可 dragSort                                                                                                                                                                                   | `boolean`                                                            |      | false      | 1.4.0 |
| sortableAnchor            | 自定义 dragSort 的锚点序                                                                                                                                                                                             | `ReactNode`                                                          |      | -          | 1.4.0 |
| spaceX                    | 节点之间水平方向的间距                                                                                                                                                                                               | `number`                                                             |      | 16         |       |
| spaceY                    | 节点之间垂直方向的间距                                                                                                                                                                                               | `number`                                                             |      | 16         |       |
| zoomTool                  | Zoom                                                                                                                                                                                                                 | `boolean` \| [ZoomToolConfig](#zoomtoolconfig)                       |      | false      |       |
| onChange                  | 节点数据改变时的回调函数                                                                                                                                                                                             | (nodes: [Node](#node)[], changeEvent?: string) => void               | ✓    | -          |       |
| onHistoryChange           | 历史状态变化之后的回调，两个参数分别代表是否需要禁用 Undo 和 redo                                                                                                                                                    | `(undoDisabled: boolean, redoDisabled: boolean) => void`             |      | -          |       |
| onZoomChange              | Zoom 变化之后的回调，三个参数分别代表是否需要禁用缩小、当前的 Zoom 值、是否需要禁用放大                                                                                                                              | `(outDisabled: boolean, value: number, inDisabled: boolean) => void` |      | -          |       |

### HistoryToolConfig

| 参数   | 说明                     | 类型      | 默认值 |
| :----- | :----------------------- | :-------- | :----- |
| hidden | 是否隐藏默认的历史工具栏 | `boolean` | false  |
| max    | 最多保存的数量           | `number`  | 10     |

### ZoomToolConfig

| 参数         | 说明                       | 类型      | 默认值 |
| :----------- | :------------------------- | :-------- | :----- |
| hidden       | 是否隐藏默认的 Zoom 工具栏 | `boolean` | false  |
| initialValue | 初始值                     | `number`  | 100    |
| min          | 最小值                     | `number`  | 10     |
| max          | 最大值                     | `number`  | 200    |
| step         | 每次 Zoom 比例的变化大小   | `number`  | 10     |

### DragComponent

| 参数        | 说明                                                                                                        | 类型                         | 版本  |
| :---------- | :---------------------------------------------------------------------------------------------------------- | :--------------------------- | :---- |
| onDragStart | 自定义 drag 组件的 dragStart 事件需要调用此方法，设置正在 drag 的节点类型（ BuilderContext 中的 dragType ） | `(nodeType: string) => void` | 1.0.0 |
| onDragEnd   | 自定义 drag 组件的 dragEnd 事件需要调用此方法，清空正在 drag 的节点类型（ BuilderContext 中的 dragType ）   | `() => void`                 | 1.0.0 |

### DropComponent

| 参数   | 说明                                                                 | 类型         | 版本  |
| :----- | :------------------------------------------------------------------- | :----------- | :---- |
| onDrop | 自定义放置组件的 drop 事件需要调用此方法，完成放置动作增加对应的节点 | `() => void` | 1.0.0 |

## FlowBuilderInstance

| 名称        | 说明               | 类型                                                                            | 版本  |
| :---------- | :----------------- | :------------------------------------------------------------------------------ | :---- |
| add         | 增加节点           | `(node: INode, newNodeType: string) => void` \| `(newNodeType: string) => void` |
| history     | Undo、redo         | `(type: 'undo' \| 'redo') => void`                                              |
| remove      | 删除一个或多个节点 | `(nodes: INode \| INode[] = useContext(NodeContext)) => void`                   |
| zoom        | Zoom               | `(type: 'out' \| 'in' \| number) => void`                                       |
| closeDrawer | 关闭抽屉           | `() => void`                                                                    |
| context     | BuilderContext     | [BuilderContext](#buildercontext)                                               | 1.3.5 |

### Formatter

| 名称           | 说明           | 类型                                                                    |
| :------------- | :------------- | :---------------------------------------------------------------------- |
| buildFlatNodes | 转换成扁平结构 | `(params: {registerNodes: IRegisterNode[], nodes: INode[]}) => INode[]` |
| buildTreeNodes | 转换成树形结构 | `(params: {nodes: INode[]}) => INode[]`                                 |
| createUuid     | 创建 uuid      | `(prefix?: string) => string`                                           |

## RegisterNode

| 参数                      | 说明                                                                                                | 类型                                                  | 必须 | 默认值                            | 版本  |
| :------------------------ | :-------------------------------------------------------------------------------------------------- | :---------------------------------------------------- | :--- | :-------------------------------- | :---- |
| addableComponent          | 节点下方点击加号展开的内容                                                                          | `React.FC`\<[AddableComponent](#addablecomponent)\>   |      | -                                 |
| addableNodeTypes          | 指定节点下方的可添加节点列表                                                                        | `string[]`                                            |      | -                                 |
| addIcon                   | 在可添加节点列表中的图标（已经内置了一些图标）                                                      | `ReactNode`                                           |      | -                                 |
| addConditionIcon          | Branch node 添加条件时的图标（已有默认图标）                                                        | `ReactNode`                                           |      | -                                 | 1.3.3 |
| className                 | 节点外层的类名                                                                                      | `string`                                              |      | -                                 | 1.3.4 |
| conditionMinNum           | 对应的 Condition node 最小数量                                                                      | `number`                                              |      | 1                                 |
| conditionMaxNum           | 对应的 Condition node 最大数量                                                                      | `number`                                              |      | -                                 |
| conditionNodeType         | 对应的 Condition node 类型                                                                          | `string`                                              |      | -                                 |
| configComponent           | 节点的配置表单组件                                                                                  | `React.FC`\<[ConfigComponent](#configcomponent)\>     |      | -                                 |
| configTitle               | 节点对应的抽屉标题                                                                                  | `string \| ((node: INode, nodes: INode[]) => string)` |      | -                                 |
| customRemove              | 自定义删除按钮                                                                                      | `boolean`                                             |      | false                             |
| displayComponent          | 节点的展示组件                                                                                      | `React.FC`\<[DisplayComponent](#displaycomponent)\>   |      | -                                 |
| initialNodeData           | 增加节点时初始化数据                                                                                | `Record<string, any>`                                 |      | -                                 |
| isStart                   | 是否为开始节点                                                                                      | `boolean`                                             |      | false                             |
| isEnd                     | 是否为结束节点                                                                                      | `boolean`                                             |      | false                             |
| name                      | 节点名称                                                                                            | `string`                                              | ✓    | -                                 |
| removeConfirmTitle        | 删除节点前的提示信息。Popconfirm 组件的 [title](https://ant.design/components/popconfirm/#API) 属性 | `string` \| `ReactNode`                               |      | Are you sure to remove this node? |
| showPracticalBranchNode   | -                                                                                                   | `boolean`                                             |      | false                             | 1.1.0 |
| showPracticalBranchRemove | -                                                                                                   | `boolean`                                             |      | false                             | 1.1.0 |
| type                      | 节点类型                                                                                            | `string`                                              | ✓    | -                                 |

## RegisterRemoteNode

| 参数   | 说明               | 类型     | 必须 | 默认值 | 版本  |
| :----- | :----------------- | :------- | :--- | :----- | :---- |
| url    | 节点的远程地址     | `string` | ✓    | -      | 1.3.0 |
| cssUrl | 节点样式的远程地址 | `string` |      | -      | 1.3.0 |

### DisplayComponent

| 参数     | 说明                                                                                       | 类型                                 |
| :------- | :----------------------------------------------------------------------------------------- | :----------------------------------- |
| node     | 节点信息（V1 版本开始推荐使用 NodeContext 获取）                                           | [Node](#node)                        |
| nodes    | （V1 版本开始推荐使用 BuilderContext 获取）                                                | [Node](#node)[]                      |
| readonly | 继承 FlowBuilder 的 readonly（V1 版本开始推荐使用 BuilderContext 获取）                    | `boolean`                            |
| remove   | 删除一个或多个节点，默认删除当前节点（V1 版本开始推荐使用 useAction 中的 removeNode 方法） | `(nodes?: INode \| INode[]) => void` |

### ConfigComponent

| 参数   | 说明                                                                                                                                                                               | 类型                                                   |
| :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| cancel | Cancel 时调用，用来关闭抽屉（V1 版本开始推荐使用 useDrawer 中的 closeDrawer 方法）                                                                                                 | `() => void`                                           |
| node   | 节点信息（V1 版本开始推荐使用 BuilderContext 获取 selectedNode ）                                                                                                                  | [Node](#node)                                          |
| nodes  | （V1 版本开始推荐使用 BuilderContext 获取）                                                                                                                                        | [Node](#node)[]                                        |
| save   | 保存节点数据时调用（自动关闭抽屉，无需再执行 cancel），流程引擎会根据第二个参数的布尔值设置节点的 `validateStatusError` 属性（V1 版本开始推荐使用 useDrawer 中的 saveDrawer 方法） | `(values: any, validateStatusError?: boolean) => void` |

### AddableComponent

| 参数  | 说明                                             | 类型                     |
| :---- | :----------------------------------------------- | :----------------------- |
| add   | 增加节点时调用，会自动关闭 popover               | `(type: string) => void` |
| node  | 节点信息（V1 版本开始推荐使用 NodeContext 获取） | [Node](#node)            |
| nodes | （V1 版本开始推荐使用 BuilderContext 获取）      | [Node](#node)[]          |

## Node

| 参数                | 说明                                                                  | 类型            |
| :------------------ | :-------------------------------------------------------------------- | :-------------- |
| children            | Branch node 对应的 Condition node 数组 或 Condition node 对应的子流程 | [Node](#node)[] |
| configuring         | 节点是否正在配置，节点的展示组件可根据此属性高亮节点                  | `boolean`       |
| data                | 节点的数据                                                            | `any`           |
| id                  | 节点的唯一 id                                                         | `string`        |
| name                | 节点名称，同 Node registration 时的 name                              | `string`        |
| path                | 节点在流程引擎中的路径                                                | `string[]`      |
| type                | 节点类型，同 Node registration 时的 `type`                            | `string`        |
| validateStatusError | 节点的表单校验失败，节点的展示组件可根据此属性高亮节点                | `boolean`       |

## Context

**V1 版本新增**

在 FlowBuilder 组件的上下文环境中，可以使用以下 context

### BuilderContext

获取到包含 [props](#flowbuilder) 和内部 state 的数据，在 FlowBuilder 任何子组件下都可调用。以下为内部 state

| 属性                        | 说明                          | 类型                                 |
| :-------------------------- | :---------------------------- | :----------------------------------- |
| zoomValue                   | 当前 Zoom 比例                | `number`                             |
| setZoomValue                | 设置 zoomValue                | `(zoomValue: number) => void`        |
| historyRecords              | 历史数据                      | `INode[][]`                          |
| setHistoryRecords           | 设置 historyRecords           | `(records: INode[][]) => void`       |
| activeHistoryRecordIndex    | 当前状态在历史数据中的序号    | `number`                             |
| setActiveHistoryRecordIndex | 设置 activeHistoryRecordIndex | `(index: number) => void`            |
| selectedNode                | 当前选中的节点                | `INode \| undefined`                 |
| setSelectedNode             | 设置 selectedNode             | `(node: INode \| undefined) => void` |
| drawerTitle                 | 抽屉标题                      | `string`                             |
| setDrawerTitle              | 设置 drawerTitle              | `(title: string) => void`            |
| dragType                    | 正在 drag 的节点类型          | `string`                             |
| setDragType                 | 设置 dragType                 | `(type: string) => void`             |

### NodeContext

在调用的地方，获取到所在节点的数据。具体内容见 [Node](#node)

## Hooks

**V1 版本新增**

在 FlowBuilder 组件的上下文环境中，可以使用以下 hooks

### useAction

| 属性       | 说明                                                                        | 类型                                                                            |
| :--------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| clickNode  | 点击一个节点                                                                | `(node: INode = useContext(NodeContext)) => void`                               |
| addNode    | 增加一个节点，不指定操作节点时，内部通过 NodeContext 获取到当前所在节点实现 | `(node: INode, newNodeType: string) => void` \| `(newNodeType: string) => void` |
| removeNode | 删除一个/多个节点                                                           | `(targetNode: INode \| INode[] = useContext(NodeContext)) => void`              |

### useDrawer

| 属性        | 说明                                                                        | 类型                                                   |
| :---------- | :-------------------------------------------------------------------------- | :----------------------------------------------------- |
| closeDrawer | 关闭抽屉，并将 selectedNode 置空                                            | `() => void`                                           |
| saveDrawer  | 保存抽屉的内容（同 [ConfigComponent](#configcomponent) 中提供的 save 方法） | `(values: any, validateStatusError?: boolean) => void` |

### useZoom

| 属性    | 说明                                                                                 | 类型                                      |
| :------ | :----------------------------------------------------------------------------------- | :---------------------------------------- |
| minZoom | 最小 Zoom 比例                                                                       | `number`                                  |
| maxZoom | 最大 Zoom 比例                                                                       | `number`                                  |
| zoom    | 改变 Zoom 比例（同 [FlowBuilderInstance](#flowbuilderinstance) 中提供的 zoom 方法 ） | `(type: 'out' \| 'in' \| number) => void` |

### useHistory

| 属性        | 说明                                                                              | 类型                                                            |
| :---------- | :-------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| maxLength   | 最多保存的数量                                                                    | `number`                                                        |
| pushHistory | 增加历史记录                                                                      | `(record?: INode[] = useContext(BuilderContext).nodes) => void` |
| history     | Undo/redo（同 [FlowBuilderInstance](#flowbuilderinstance) 中提供的 history 方法） | `(type: 'undo' \| 'redo') => void`                              |

### useSort

| 属性     | 说明          | 类型                                              | 版本  |
| :------- | :------------ | :------------------------------------------------ | :---- |
| backward | 向后 Sort     | `(node: INode = useContext(NodeContext)) => void` | 1.4.3 |
| forward  | 向前 Sort     | `(node: INode = useContext(NodeContext)) => void` | 1.4.3 |
| end      | Sort 到最末尾 | `(node: INode = useContext(NodeContext)) => void` | 1.4.3 |
| start    | Sort 到最前面 | `(node: INode = useContext(NodeContext)) => void` | 1.4.3 |
