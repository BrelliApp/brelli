import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ActivityCardProps {
  icon: LucideIcon;
  username: string;
  platform: string;
  alertType: string;
  timestamp: string;
  delay: number;
  initialX: number;
  isNew?: boolean;
  details?: {
    location?: string;
    device?: string;
    severity?: "low" | "medium" | "high";
    description?: string;
  };
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

const getSeverityColor = (severity?: "low" | "medium" | "high") => {
  switch (severity) {
    case "high":
      return "text-red-600";
    case "medium":
      return "text-yellow-600";
    case "low":
      return "text-blue-600";
    default:
      return "text-gray-600";
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
  isNew = true,
  details = {}
}: ActivityCardProps) => {
  return (
    <motion.div 
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <Accordion type="single" collapsible>
        <AccordionItem value="details" className="border-none">
          <AccordionTrigger className="hover:no-underline px-4 pt-4 pb-2">
            <div className="flex items-center space-x-3 w-full">
              <Avatar className="h-10 w-10 ring-2 ring-offset-2 ring-gray-100">
                <AvatarImage src="/placeholder.svg" alt={username} />
                <AvatarFallback className="bg-gray-100">
                  <Icon className="h-5 w-5 text-gray-500" />
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0 text-left">
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
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-3 pt-2 border-t border-gray-100">
              {details.severity && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Severity Level</span>
                  <span className={`text-sm font-medium ${getSeverityColor(details.severity)}`}>
                    {details.severity.toUpperCase()}
                  </span>
                </div>
              )}
              
              {details.device && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Device</span>
                  <span className="text-sm text-gray-900">{details.device}</span>
                </div>
              )}
              
              {details.location && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Location</span>
                  <span className="text-sm text-gray-900">{details.location}</span>
                </div>
              )}
              
              {details.description && (
                <div className="pt-2">
                  <span className="text-sm text-gray-600 block mb-1">Details</span>
                  <p className="text-sm text-gray-900">{details.description}</p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default ActivityCard;