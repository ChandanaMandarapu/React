
import React, { useState } from 'react';
import './Node.css';

const Node = ({ id, content, connections, updateNodeContent, connectNodes }) => {
  const [inputContent, setInputContent] = useState('');

  const handleContentChange = (e) => {
    setInputContent(e.target.value);
  };

  const handleUpdateContent = () => {
    updateNodeContent(id, inputContent);
  };

  const handleConnect = (e) => {
    const connectedNodeId = parseInt(e.target.value, 10);
    connectNodes(id, connectedNodeId);
  };

  return (
    <div className="node">
      <textarea
        value={inputContent}
        onChange={handleContentChange}
        placeholder="Enter content..."
      />
      <button onClick={handleUpdateContent}>Update Content</button>
      <div className="select-container">
        <h4>Connections:</h4>
        <select onChange={handleConnect}>
          <option value="" disabled>
            Connect to:
          </option>
          {connections.map((connectedNodeId) => (
            <option key={connectedNodeId} value={connectedNodeId}>
              Node {connectedNodeId}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Node;

import React, { useState } from 'react';
import './Node.css';

const Node = ({ id, content, connections, updateNodeContent, connectNodes }) => {
  const [inputContent, setInputContent] = useState('');

  const handleContentChange = (e) => {
    setInputContent(e.target.value);
  };

  const handleUpdateContent = () => {
    updateNodeContent(id, inputContent);
  };

  const handleConnect = (e) => {
    const connectedNodeId = parseInt(e.target.value, 10);
    connectNodes(id, connectedNodeId);
  };

  return (
    <div className="node">
      <textarea
        value={inputContent}
        onChange={handleContentChange}
        placeholder="Enter content..."
      />
      <button onClick={handleUpdateContent}>Update Content</button>
      <div className="select-container">
        <h4>Connections:</h4>
        <select onChange={handleConnect}>
          <option value="" disabled>
            Connect to:
          </option>
          {connections.map((connectedNodeId) => (
            <option key={connectedNodeId} value={connectedNodeId}>
              Node {connectedNodeId}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Node;
