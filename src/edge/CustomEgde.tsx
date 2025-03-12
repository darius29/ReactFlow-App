import React from "react";
import { EdgeProps, getBezierPath, getEdgeCenter } from "@xyflow/react";

export default function CustomEdge(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    label,
    labelStyle = {},
  } = props;

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  const [centerX, centerY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        style={{ ...style, fill: "none" }}
        className="react-flow__edge-path"
        d={edgePath}
      />
      {label && (
        <text x={centerX} y={centerY} textAnchor="middle" style={labelStyle}>
          {label}
        </text>
      )}
    </>
  );
}
