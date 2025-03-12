import { Node } from "@xyflow/react";

export const initialNodes: Node<any>[] = [
  {
    id: "group-1",
    type: "groupNode",
    data: {
      label: "Main Group Node",
      childNodeIds: ["node-2", "node-3", "node-7"],
    },
    position: { x: 250, y: 30 },
  },
  {
    id: "node-2",
    type: "customNode",
    data: { label: "Node 2", color: "#ff5733", childNodeIds: ["node-4"] },
    position: { x: 80, y: 200 },
  },
  {
    id: "node-3",
    type: "customNode",
    data: {
      label: "Node 3",
      color: "#33ff57",
      childNodeIds: ["node-5"],
    },
    position: { x: 420, y: 200 },
  },
  {
    id: "node-4",
    type: "customNode",
    data: { label: "Node 4", color: "#3357ff", childNodeIds: ["node-9"] },
    position: { x: 420, y: 300 },
  },
  {
    id: "node-5",
    type: "customNode",
    data: { label: "Node 5", color: "#ff33a8", childNodeIds: ["node-9"] },
    position: { x: 600, y: 100 },
  },
  {
    id: "node-6",
    type: "customNode",
    data: { label: "Node 6", color: "#33fff0" },
    position: { x: 100, y: 400 },
  },
  {
    id: "node-7",
    type: "customNode",
    data: { label: "Node 7", color: "#f0ff33" },
    position: { x: 300, y: 400 },
  },
  {
    id: "node-8",
    type: "customNode",
    data: { label: "Node 8", color: "#f033ff" },
    position: { x: 500, y: 400 },
  },
  {
    id: "node-9",
    type: "customNode",
    data: { label: "Node 9", color: "#33f0ff" },
    position: { x: 700, y: 400 },
  },
];
