import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

interface UploadInputProps {
  name: string;
}

const UploadInput: React.FC<UploadInputProps> = ({ name }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
      <Label htmlFor={name}>{name}</Label>
      <Input id={name} type="file" />
    </div>
  );
};

export default UploadInput;
