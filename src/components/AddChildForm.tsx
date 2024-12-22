import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface AddChildFormProps {
  onAddChild: (name: string, age: number) => void;
  onCancel: () => void;
}

export const AddChildForm = ({ onAddChild, onCancel }: AddChildFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim()) {
      toast.error("Please enter a first name");
      return;
    }
    if (!age.trim() || isNaN(Number(age)) || Number(age) < 0 || Number(age) > 17) {
      toast.error("Please enter a valid age between 0 and 17");
      return;
    }
    onAddChild(firstName, Number(age));
    setFirstName("");
    setAge("");
    toast.success("Child added successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Child's first name"
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Child's age"
          min="0"
          max="17"
          className="w-full"
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Child</Button>
      </div>
    </form>
  );
};