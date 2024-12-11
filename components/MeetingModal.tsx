import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MeetingModalProps {
  title: string;
  description?: string;
  date?: Date;
  img?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  title,
  description,
  date,
  img,
  isOpen,
  onClose,
  children,
  handleClick,
  buttonIcon,
  buttonText,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="text-white bg-dark-bg1 w-[500px] rounded-md border-none p-4">
        <DialogHeader>
          <DialogTitle className="text-2xl p-4">{title}</DialogTitle>
          <DialogDescription asChild>
            <div>
              {img && (
                <div className="flex justify-center">
                  <Image src={img} alt="Image" width={50} height={50} />
                </div>
              )}
              {children}
              <Button className="bg-blue-1 rounded-md w-full py-2">
                {buttonIcon && (
                  <div className="flex justify-start">
                    <Image
                      src={buttonIcon}
                      alt="Button Image"
                      width={50}
                      height={50}
                    />
                  </div>
                )}
                {buttonText}
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
