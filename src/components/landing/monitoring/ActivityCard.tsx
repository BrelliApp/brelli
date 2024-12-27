import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ActivityCardProps {
  icon: LucideIcon;
  username: string;
  platform: string;
  alertType: string;
  timestamp: string;
  delay: number;
  initialX: number;
  isNew?: boolean;
}

const getAlertColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'violence':
      return 'bg-red-500/10 text-red-700 border border-red-200';
    case 'cyberbullying':
      return 'bg-yellow-500/10 text-yellow-700 border border-yellow-200';
    case 'sexual content':
      return 'bg-red-500/10 text-red-700 border border-red-200';
    case 'risky app / site usage':
      return 'bg-blue-500/10 text-blue-700 border border-blue-200';
    case 'drug/alcohol-related content':
      return 'bg-orange-500/10 text-orange-700 border border-orange-200';
    default:
      return 'bg-gray-500/10 text-gray-700 border border-gray-200';
  }
};

const ActivityCard = ({ 
  icon: Icon, 
  username, 
  platform, 
  alertType, 
  timestamp, 
  delay, 
  initialX,
  isNew = true 
}: ActivityCardProps) => {
  return (
    <motion.div 
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <Avatar className="h-10 w-10 ring-2 ring-offset-2 ring-gray-100">
        <AvatarImage src="/placeholder.svg" alt={username} />
        <AvatarFallback className="bg-gray-100">
          <Icon className="h-5 w-5 text-gray-500" />
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">{username}</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">{timestamp}</span>
            {isNew && (
              <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                NEW
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-sm text-gray-600 font-medium">{platform}</span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAlertColor(alertType)}`}>
            {alertType}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;