import React from "react";
import { Node, NodeProps, Handle, Position } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { GroupNodeData } from "./types/GroupNodeData";

export type GroupNodeType = Node<GroupNodeData>;

export default function GroupNode({
  data,
  selected,
}: NodeProps<GroupNodeType>) {
  return (
    <div
      style={{
        padding: "10px",
        border: selected ? "2px dashed #007bff" : "1px dashed #ccc",
        borderRadius: "4px",
        backgroundColor: "#fff",
        position: "relative",
        cursor: "move",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        {data.label || "Group Node"}
      </div>

      {data?.childNodeIds && data.childNodeIds.length > 0 && (
        <div style={{ marginTop: 8, fontSize: 12, color: "#555" }}>
          <strong>Childrens:</strong>
          {data.childNodeIds.map((childId: string) => (
            <div key={childId}>• {childId}</div>
          ))}
        </div>
      )}

      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#555" }}
      />
    </div>
  );
}
