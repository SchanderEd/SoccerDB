import * as React from "react";
import { cn } from "../lib/utils";

export const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "p-6 space-y-6 bg-(--secondary) rounded-2xl shadow-sm",
        className
      )}
      {...props}
    />
  );
};

export const CardHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return <div data-slot="card-header" className={cn(className)} {...props} />;
};

export const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-(--muted-foreground) text-sm", className)}
      {...props}
    />
  );
};

export const CardTitle = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return <div data-slot="card-title" className={cn(className)} {...props} />;
};

export const CardContent = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return <div data-slot="card-content" className={cn(className)} {...props} />;
};

export const CardFooter = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 pt-2 border-t border-(--text-muted-foreground)",
        className
      )}
      {...props}
    />
  );
};
