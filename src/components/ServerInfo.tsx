import React from 'react';
import { Server, Copy } from 'lucide-react';
import { Card } from './Card';
import { toast } from './Toast';

interface ServerDetailProps {
  label: string;
  value: string;
}

function ServerDetail({ label, value }: ServerDetailProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="flex items-center gap-3 group">
      <Server className="text-green-400 transform group-hover:rotate-12 transition-transform duration-300" />
      <div className="flex-grow">
        <p className="font-semibold">{label}:</p>
        <div className="flex items-center gap-2">
          <code className="bg-gray-700 px-2 py-1 rounded">
            {value}
          </code>
          <button
            onClick={copyToClipboard}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
            title="Copy to clipboard"
          >
            <Copy size={16} className="opacity-50 hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ServerInfo() {
  return (
    <Card className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h2 className="text-2xl font-bold mb-4">Server Information</h2>
      <div className="space-y-4">
        <ServerDetail label="Java Edition IP" value="Coming Soon!" />
        <ServerDetail label="Bedrock Edition Port" value="19132" />
      </div>
    </Card>
  );
}