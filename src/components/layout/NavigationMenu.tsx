import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export const NavigationMenu = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <button className="font-bold opacity-80" type="button">
          Menu
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "absolute -top-full w-full h-full data-[state=open]:top-0",
          "data-[state=open]:animate-in data-[state=open]:slide-in-from-top-0",
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-0",
          "duration-500",
        )}
      >
        <span>huh</span>
      </CollapsibleContent>
    </Collapsible>
  );
};
