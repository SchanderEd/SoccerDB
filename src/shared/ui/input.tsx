import type { ReactNode } from "react";
import { cn } from "../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const Input: React.FC<InputProps> = (props) => {
  const { icon, className } = props;

  return (
    <div
      className={cn(
        "flex justify-between items-center gap-2 w-full px-4 py-1",
        "text-(--text-muted-foreground) border bg-(--input-bg) border-(--input-bg) rounded-3xl outline-0 shadow-sm"
      )}
    >
      {icon && <span className="text-current">{icon}</span>}
      <input
        {...props}
        className={cn(
          "flex-1",
          "placeholder:text-(--text-muted-foreground) bg-transparent outline-0",
          className
        )}
      />
    </div>
  );
};
