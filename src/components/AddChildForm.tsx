import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const AddChildForm = ({ onAddChild }: { onAddChild: (name: string) => void }) => {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim()) {
      toast.error("Please enter a first name");
      return;
    }
    onAddChild(firstName);
    setFirstName("");
    toast.success("Child added successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Child's first name"
        className="max-w-xs"
      />
      <Button type="submit">Add Child</Button>
    </form>
  );
};