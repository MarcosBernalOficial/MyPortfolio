import { cn } from "@/lib/utils";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full bg-white dark:bg-black overflow-x-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="aurora-layer"
          style={!showRadialGradient ? { maskImage: "none" } : undefined}
        />
      </div>
      {children}
    </div>
  );
};
