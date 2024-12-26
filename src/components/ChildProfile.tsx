import { useState } from "react";
import { User, Instagram, MessageSquare, Ghost, Youtube, Twitter, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ChildProfileProps {
  id: string;
  name: string;
  age: number;
  socialAccounts: {
    instagram?: string;
    tiktok?: string;
    snapchat?: string;
    youtube?: string;
    twitter?: string;
  };
  onUpdate: (id: string, name: string, age: number) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export const ChildProfile = ({ id, name, age, socialAccounts, onUpdate, onDelete }: ChildProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editAge, setEditAge] = useState(age.toString());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const connectedAccounts = Object.keys(socialAccounts).filter(
    (platform) => socialAccounts[platform as keyof typeof socialAccounts]
  );

  const handleUpdate = async () => {
    if (!editName.trim()) {
      toast.error("Please enter a name");
      return;
    }
    if (!editAge.trim() || isNaN(Number(editAge)) || Number(editAge) < 0 || Number(editAge) > 17) {
      toast.error("Please enter a valid age between 0 and 17");
      return;
    }

    setIsSubmitting(true);
    try {
      await onUpdate(id, editName, Number(editAge));
      setIsEditing(false);
      toast.success("Child updated successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to update child");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    setIsSubmitting(true);
    try {
      await onDelete(id);
      toast.success("Child deleted successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete child");
    } finally {
      setIsSubmitting(false);
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Card className="w-full hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 bg-primary rounded-full">
            <User className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold">{name}</CardTitle>
            <p className="text-sm text-gray-500">{age} years old</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {connectedAccounts.length} connected {connectedAccounts.length === 1 ? 'account' : 'accounts'}
            </Badge>
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsDeleting(true)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mt-4">
            {socialAccounts.instagram && (
              <div className="flex items-center gap-2 bg-pink-50 px-3 py-2 rounded-full">
                <Instagram className="h-5 w-5 text-pink-600" />
                <span className="text-sm font-medium text-pink-700">{socialAccounts.instagram}</span>
              </div>
            )}
            {socialAccounts.tiktok && (
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-black" />
                <span className="text-sm font-medium text-gray-700">{socialAccounts.tiktok}</span>
              </div>
            )}
            {socialAccounts.snapchat && (
              <div className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-full">
                <Ghost className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-700">{socialAccounts.snapchat}</span>
              </div>
            )}
            {socialAccounts.youtube && (
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-full">
                <Youtube className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-red-700">{socialAccounts.youtube}</span>
              </div>
            )}
            {socialAccounts.twitter && (
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full">
                <Twitter className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-700">{socialAccounts.twitter}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Child</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Child's name"
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                type="number"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
                placeholder="Child's age"
                min="0"
                max="17"
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button onClick={handleUpdate} disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleting} onOpenChange={setIsDeleting}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Child</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDeleting(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={isSubmitting}>
              {isSubmitting ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};