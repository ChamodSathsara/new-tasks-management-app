"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";

export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
}
