import { motion } from "framer-motion";
import { Trophy, Star, Clock, Heart, Smile, Gift, PartyPopper } from "lucide-react";

const PositiveExperiencesPhone = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-4 relative overflow-hidden">
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
          <Trophy className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Positive Moments</h3>
        </div>
        <div className="mt-2 text-sm text-white/80">Today's Highlights</div>
      </div>
      
      <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-green-50 to-white overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-4 shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Star className="h-5 w-5 text-green-600" />
              </div>
              <span className="font-medium">Educational Achievement</span>
            </div>
            <Trophy className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-sm text-gray-600">Completed an online learning course</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <Clock className="h-4 w-4" />
            <span>2 hours ago</span>
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
              <div className="bg-pink-100 p-2 rounded-lg">
                <Heart className="h-5 w-5 text-pink-600" />
              </div>
              <span className="font-medium">Kind Interaction</span>
            </div>
            <Smile className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-sm text-gray-600">Sent encouraging messages to friends</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <Clock className="h-4 w-4" />
            <span>1 hour ago</span>
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
              <div className="bg-purple-100 p-2 rounded-lg">
                <Gift className="h-5 w-5 text-purple-600" />
              </div>
              <span className="font-medium">Digital Achievement</span>
            </div>
            <PartyPopper className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-sm text-gray-600">Earned responsible usage badge</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <Clock className="h-4 w-4" />
            <span>30 minutes ago</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PositiveExperiencesPhone;