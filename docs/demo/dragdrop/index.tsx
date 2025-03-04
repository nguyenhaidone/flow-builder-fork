import React, { useState, useContext } from 'react';
import FlowBuilder, {
  NodeContext,
  INode,
  IRegisterNode,
} from 'react-flow-builder';

import './index.css';

const StartNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};

const EndNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

const NodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="other-node">{node.name}</div>;
};

const ConditionNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="condition-node">{node.name}</div>;
};

const registerNodes: IRegisterNode[] = [
  {
    type: 'start',
    name: '开始节点',
    displayComponent: StartNodeDisplay,
    isStart: true,
  },
  {
    type: 'end',
    name: '结束节点',
    displayComponent: EndNodeDisplay,
    isEnd: true,
  },
  {
    type: 'node',
    name: 'Normal node',
    displayComponent: NodeDisplay,
  },
  {
    type: 'condition',
    name: 'Condition node',
    displayComponent: ConditionNodeDisplay,
  },
  {
    type: 'branch',
    name: 'Branch node',
    conditionNodeType: 'condition',
  },
];

const defaultNodes = [
  {
    id: 'node-0d9d4733-e48c-41fd-a41f-d93cc4718d97',
    type: 'start',
    name: 'start',
    path: ['0'],
  },
  {
    id: 'node-b2ffe834-c7c2-4f29-a370-305adc03c010',
    type: 'branch',
    name: 'Branch node',
    children: [
      {
        id: 'node-cf9c8f7e-26dd-446c-b3fa-b2406fc7821a',
        type: 'condition',
        name: 'Condition node',
        children: [
          {
            id: 'node-f227cd08-a503-48b7-babf-b4047fc9dfa5',
            type: 'node',
            name: 'Normal node',
            path: ['1', 'children', '0', 'children', '0'],
          },
        ],
        path: ['1', 'children', '0'],
      },
      {
        id: 'node-9d393627-24c0-469f-818a-319d9a678707',
        type: 'condition',
        name: 'Condition node',
        children: [],
        path: ['1', 'children', '1'],
      },
    ],
    path: ['1'],
  },
  {
    id: 'node-972401ca-c4db-4268-8780-5607876d8372',
    type: 'node',
    name: 'Normal node',
    path: ['2'],
  },
  {
    id: 'node-b106675a-5148-4a2e-aa86-8e06abd692d1',
    type: 'end',
    name: 'end',
    path: ['3'],
  },
];

const Dragdrop = () => {
  const [nodes, setNodes] = useState<INode[]>(defaultNodes);

  const handleChange = (nodes: INode[]) => {
    console.log('nodes change', nodes);
    setNodes(nodes);
  };

  return (
    <FlowBuilder
      draggable
      nodes={nodes}
      onChange={handleChange}
      registerNodes={registerNodes}
    />
  );
};

export default Dragdrop;
