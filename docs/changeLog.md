---
order: 9
---

# Change Log

## 1.1.0

`2022-05-19`

- 增加 `showPracticalBranchNode` 和 `showPracticalBranchRemove` 属性，支持显示实际的 Branch node

## 1.2.0

`2022-05-24`

- 节点的默认 id 从 `node-` 开头修改为 `节点类型-` 开头

## 1.3.0

`2022-06-09`

- 增加 `registerRemoteNodes` 属性，支持远程 Node registration，通过 System.js 加载对应的 js / css 资源

## 1.4.0

`2022-08-04`

- 增加 `sortable` 属性，支持 Condition node 之间进行 dragSort

## 1.4.1

`2022-08-04`

- 优化 dragSort 过程中的虚拟边框

## 1.4.2

`2022-08-11`

- 设置 drawerVisibleWhenAddNode 为 true：增加 Branch node 时，若 Branch node 注册的 showPracticalBranchNode 为 true 且配置了 configComponent，选中 Branch node；否则选中 Branch node 的第一个 Condition node

## 1.4.3

`2022-08-23`

- 增加 `useSort` 方法，灵活对节点进行 Sort
