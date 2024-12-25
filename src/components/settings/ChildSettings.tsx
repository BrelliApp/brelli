import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, ChevronUp, Shield, Clock } from "lucide-react";
import { toast } from "sonner";

interface ChildSettingsProps {
  child: {
    id: string;
    name: string;
    age: number;
    settings: {
      screen_time_limit_minutes: number;
      content_sensitivity: string;
      flag_inappropriate_language: boolean;
      flag_meeting_requests: boolean;
      flag_images: boolean;
      flag_links: boolean;
    } | null;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

export const ChildSettings = ({ child, isExpanded, onToggle }: ChildSettingsProps) => {
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [settings, setSettings] = useState(child.settings || {
    screen_time_limit_minutes: 120,
    content_sensitivity: 'medium',
    flag_inappropriate_language: true,
    flag_meeting_requests: true,
    flag_images: true,
    flag_links: true
  });

  const handleSaveSettings = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('child_settings')
        .upsert({
          child_id: child.id,
          ...settings
        });

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['children-with-settings'] });
      toast.success("Settings saved successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to save settings");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary rounded-full">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-xl font-semibold">{child.name}</CardTitle>
            <p className="text-sm text-gray-500">{child.age} years old</p>
          </div>
        </div>
        <Button variant="ghost" onClick={onToggle}>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <Label>Screen Time Limit (minutes)</Label>
              </div>
              <Input
                type="number"
                value={settings.screen_time_limit_minutes}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  screen_time_limit_minutes: parseInt(e.target.value)
                }))}
                min={0}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label>Content Sensitivity</Label>
              <Select
                value={settings.content_sensitivity}
                onValueChange={(value) => setSettings(prev => ({
                  ...prev,
                  content_sensitivity: value
                }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Flag Inappropriate Language</Label>
                <Switch
                  checked={settings.flag_inappropriate_language}
                  onCheckedChange={(checked) => setSettings(prev => ({
                    ...prev,
                    flag_inappropriate_language: checked
                  }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>Flag Meeting Requests</Label>
                <Switch
                  checked={settings.flag_meeting_requests}
                  onCheckedChange={(checked) => setSettings(prev => ({
                    ...prev,
                    flag_meeting_requests: checked
                  }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>Flag Images</Label>
                <Switch
                  checked={settings.flag_images}
                  onCheckedChange={(checked) => setSettings(prev => ({
                    ...prev,
                    flag_images: checked
                  }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>Flag Links</Label>
                <Switch
                  checked={settings.flag_links}
                  onCheckedChange={(checked) => setSettings(prev => ({
                    ...prev,
                    flag_links: checked
                  }))}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              onClick={handleSaveSettings}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Settings"}
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};