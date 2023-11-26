
import React, { useState } from 'react';
import Node from './Node';
import './MindMap.css';

const MindMap = () => {
  const [nodes, setNodes] = useState([]);

  const addNode = () => {
    const newNode = {
      id: nodes.length + 1,
      content: '',
      connections: [],
    };
    setNodes([...nodes, newNode]);
  };

  const updateNodeContent = (id, content) => {
    const updatedNodes = nodes.map((node) =>
      node.id === id ? { ...node, content } : node
    );
    setNodes(updatedNodes);
  };

  const connectNodes = (nodeId, connectedNodeId) => {
    const updatedNodes = nodes.map((node) => {
      if (node.id === nodeId) {
        return {
          ...node,
          connections: [...node.connections, connectedNodeId],
        };
      }
      return node;
    });
    setNodes(updatedNodes);
  };

  return (
    <div className="mind-map">
      <h2>Mind Map</h2>
      <button onClick={addNode}>Add Node</button>
      {nodes.map((node) => (
        <Node
          key={node.id}
          id={node.id}
          content={node.content}
          connections={node.connections}
          updateNodeContent={updateNodeContent}
          connectNodes={connectNodes}
        />
      ))}
    </div>
  );
};

export default MindMap;
