"use client"

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

type Props = {};
export const StudioUploadModal = ({}: Props) => {
  return (
    <Button variant={"secondary"}>
      <PlusIcon />
      Create
    </Button>
  );
};
