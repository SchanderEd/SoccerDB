import { cn } from "../lib/utils";

export const Skeleton = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn("animate-pulse bg-(--input-bg)", className)}
    ></div>
  );
};
