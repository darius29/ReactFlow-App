import React, { useCallback } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Node,
  Edge,
  Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import GroupNode from "./nodes/GroupNode";
import DefaultNode from "./nodes/DefaultNode";
import CustomEdge from "./edge/CustomEgde";
import { initialNodes } from "./mockupData/InitialNodes";
import { initialEdges } from "./mockupData/InitialEdges";

const nodeTypes = {
  groupNode: GroupNode,
  customNode: DefaultNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState<Node<any>>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => {
      setEdges((els) => addEdge(params, els));
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === params.source) {
            const childNodeIds = node.data.childNodeIds || [];
            if (!childNodeIds.includes(params.target)) {
              return {
                ...node,
                data: {
                  ...node.data,
                  childNodeIds: [...childNodeIds, params.target],
                },
              };
            }
          }
          return node;
        })
      );
    },
    [setEdges, setNodes]
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={{ backgroundColor: "#F7F9FB" }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
