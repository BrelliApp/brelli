import { useState } from "react";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { useAchievements } from "@/hooks/useAchievements";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";

interface AddAchievementFormProps {
  childId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddAchievementForm = ({
  childId,
  open,
  onOpenChange,
}: AddAchievementFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState<Date>();
  const { createAchievement } = useAchievements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return;
    }

    await createAchievement.mutateAsync({
      child_id: childId,
      title: title.trim(),
      description: description.trim() || null,
      target_date: targetDate?.toISOString() || null,
    });

    setTitle("");
    setDescription("");
    setTargetDate(undefined);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Achievement</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter achievement title"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter achievement description"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Target Date (optional)</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    !targetDate && "text-muted-foreground"
                  }`}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {targetDate ? format(targetDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarPicker
                  mode="single"
                  selected={targetDate}
                  onSelect={setTargetDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={createAchievement.isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createAchievement.isPending}>
              {createAchievement.isPending ? "Adding..." : "Add Achievement"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};