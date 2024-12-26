import { motion } from "framer-motion";
import { Shield, BrainCircuit, Sparkles, Lock, Eye } from "lucide-react";

const ProtectionStatusPhone = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-white/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Protection Status</h3>
        </div>
        <div className="mt-2 text-sm text-white/80">All Systems Active</div>
      </div>
      
      <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-blue-50 to-white overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative bg-white rounded-xl p-4 shadow-lg overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <BrainCircuit className="h-5 w-5 text-cyan-600" />
                </div>
                <span className="font-medium">AI Monitoring</span>
              </div>
              <Sparkles className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="mt-2">
              <div className="h-2 bg-cyan-100 rounded-full">
                <motion.div 
                  className="h-full w-3/4 bg-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">Pattern analysis active</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-4 shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-teal-100 p-2 rounded-lg">
                <Lock className="h-5 w-5 text-teal-600" />
              </div>
              <span className="font-medium">Security Status</span>
            </div>
            <Shield className="h-5 w-5 text-teal-500" />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-teal-50 p-2 rounded-lg text-center">
              <div className="text-sm font-medium text-teal-700">Content</div>
              <div className="text-xs text-teal-600">Protected</div>
            </div>
            <div className="bg-teal-50 p-2 rounded-lg text-center">
              <div className="text-sm font-medium text-teal-700">Privacy</div>
              <div className="text-xs text-teal-600">Secured</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-4 shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Eye className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="font-medium">Content Filter</span>
            </div>
            <BrainCircuit className="h-5 w-5 text-emerald-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Images</span>
              <span className="text-emerald-600">Active</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Messages</span>
              <span className="text-emerald-600">Active</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Links</span>
              <span className="text-emerald-600">Active</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProtectionStatusPhone;