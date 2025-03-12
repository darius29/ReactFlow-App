import React from "react";
import { Node, NodeProps, Handle, Position, NodeResizer } from "@xyflow/react";

export default function DefaultNode({
  id,
  data,
  selected,
}: NodeProps<Node<any>>) {
  return (
    <div
      style={{
        padding: "10px 50px",
        border: selected ? "2px solid #007bff" : "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#fff",
        position: "relative",
        cursor: "move",
      }}
    >
      {selected && (
        <NodeResizer
          nodeId={id}
          isVisible={selected}
          minWidth={80}
          minHeight={40}
        />
      )}
      <div style={{ color: data?.color || "#000", fontWeight: "bold" }}>
        {data?.label || "Default Node"}
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
