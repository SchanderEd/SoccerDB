import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className={cn("mb-6 p-3 bg-(--secondary) shadow-sm sticky top-0")}>
      <div
        className={cn(
          "container mx-auto flex justify-between items-center gap-5"
        )}
      >
        <img src="/logo.png" alt="SoccerDB" className="w-35" />
        <Input placeholder="Search league, team..." icon={<Search />} />
      </div>
    </header>
  );
};
