import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 animate-fade-in" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
        "w-[95vw] max-w-7xl bg-white shadow-lg animate-fade-in",
        "focus:outline-none h-[90vh] flex flex-col overflow-y-auto",
        className
      )}
      aria-describedby="dialog-description"
      role="dialog"
      aria-modal="true"
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

DialogContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

DialogContent.displayName = "DialogContent";

export { Dialog, DialogContent, DialogTrigger };
