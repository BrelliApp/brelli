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
      return 'bg-red-500 text-white';
    case 'cyberbullying':
      return 'bg-yellow-500 text-black';
    case 'sexual content':
      return 'bg-red-500 text-white';
    case 'risky app / site usage':
      return 'bg-blue-500 text-white';
    case 'drug/alcohol-related content':
      return 'bg-orange-500 text-white';
    default:
      return 'bg-gray-500 text-white';
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
      className="flex items-center space-x-3 p-3 bg-white rounded-lg border-b border-gray-100"
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src="/placeholder.svg" />
        <AvatarFallback>
          <Icon className="h-5 w-5 text-gray-500" />
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900">{username}</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{timestamp}</span>
            {isNew && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                NEW
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-sm text-gray-500">{platform}</span>
          <span className={`px-2 py-1 text-xs font-medium rounded ${getAlertColor(alertType)}`}>
            {alertType}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;