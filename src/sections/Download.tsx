import React from 'react';
import { DownloadCard } from '../components/DownloadCard';
import { Card } from '../components/Card';

export function Download() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Download Minecraft
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <DownloadCard
            title="Minecraft PE (Bedrock)"
            description="Download the official Minecraft Pocket Edition to play on android devices.Version 1.21.51"
            href="https://mcpedl.org/uploads_files/11-12-2024/minecraft-1-21-51.apk"
            buttonText="Download Minecraft PE"
          />
          
          <DownloadCard
            title="TLauncher (Java)"
            description="Download TLauncher to play Minecraft Java Edition."
            href="https://tlauncher.org/en/"
            buttonText="Download TLauncher"
          />
        </div>

        <Card className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Important Notice</h2>
          <p className="text-gray-300">
            Remember to join our Discord server before attempting to connect to the Minecraft server.
            This is required for all players to ensure a safe and friendly gaming environment.
          </p>
        </Card>
      </div>
    </div>
  );
}