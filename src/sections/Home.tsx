import React from 'react';
import { Users, Server, MessageSquare } from 'lucide-react';
import { Card } from '../components/Card';
import { ServerInfo } from '../components/ServerInfo';
import { FeatureCard } from '../components/FeatureCard';
import { GradientText } from '../components/GradientText';
import { ParallaxBackground } from '../components/ParallaxBackground';
import { FloatingCubes } from '../components/FloatingCubes';

export function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-24 relative">
      <ParallaxBackground />
      <FloatingCubes />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6">
            Welcome to <GradientText>XeeMC</GradientText>
          </h1>
          <p className="text-xl text-gray-300">Experience Minecraft like never before!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ServerInfo />
          
          <Card className="group transform transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              To play on our server, you need to join our Discord community first!
            </p>
            <a
              href="https://discord.gg/wd3YDx8Uem"
              className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#5865F2]/20"
            >
              <MessageSquare size={20} className="animate-bounce" />
              Join Discord
            </a>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden">
            <FeatureCard
              icon={<Server className="w-full h-full text-indigo-500" />}
              title="Beta Server Access"
              description="Get exclusive access to our server while it's still in beta. Help us shape the future!"
            />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
              BETA
            </span>
          </div>
          {[
            {
              icon: <Users className="w-full h-full" />,
              title: "Cross-Play",
              description: "Play with friends on both Java and Bedrock editions"
            },
            {
              icon: <Server className="w-full h-full" />,
              title: "24/7 Uptime",
              description: "Server is always online and ready to play"
            },
            {
              icon: <MessageSquare className="w-full h-full" />,
              title: "Active Community",
              description: "Join our friendly community of players"
            }
          ].map((feature, index) => (
            <div key={index} className="transform transition-all duration-300 hover:scale-105">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
