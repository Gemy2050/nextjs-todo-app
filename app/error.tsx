"use client";

import { Button } from "@/components/ui/button";
import { AlertCircleIcon } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container h-screen flex flex-col justify-center items-center mx-auto p-5">
          <AlertCircleIcon className="h-10 w-10 text-red-500" />
          <h2 className="py-4 text-3xl">Something went wrong!</h2>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </body>
    </html>
  );
}
