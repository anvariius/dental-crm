import { Input } from "@/components/ui/input.tsx";
import { Search } from "lucide-react";

export function SearchInput({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 relative">
      <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
        <Search size="19" />
      </div>
      <Input
        id="search"
        type="search"
        placeholder="Поиск пациентов"
        className="w-full pl-8"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
