import { Phone, Shield, Bell, Eye } from "lucide-react";
import { motion } from "framer-motion";

const MonitoringSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Brelli Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time monitoring and protection for your children's digital life
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl" />
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              {/* App Interface */}
              <div className="h-full flex flex-col">
                <div className="bg-blue-500 text-white p-4">
                  <h3 className="text-lg font-semibold">Brelli Protection</h3>
                </div>
                
                {/* Activity Feed */}
                <div className="flex-1 p-4 space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-100 rounded-lg animate-pulse">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-green-700">Safe browsing detected</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-100 rounded-lg">
                    <Eye className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-blue-700">Monitoring social media</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-yellow-100 rounded-lg">
                    <Bell className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm text-yellow-700">Screen time alert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Features */}
          <div className="absolute -left-4 top-1/4 bg-white p-4 rounded-lg shadow-lg transform -translate-x-full">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-500" />
              <span className="text-sm font-medium">Real-time Protection</span>
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 bg-white p-4 rounded-lg shadow-lg transform translate-x-full">
            <div className="flex items-center space-x-2">
              <Bell className="h-6 w-6 text-blue-500" />
              <span className="text-sm font-medium">Instant Alerts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;