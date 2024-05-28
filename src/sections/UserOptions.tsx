import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon } from "lucide-react"; 

export default function UserOptions() {
  return (
    <div className="flex gap-12">
      <DropdownWithDialogItemsSolution1 />
      <DropdownWithDialogItemsSolution2 />
    </div>
  );
}

function DropdownWithDialogItemsSolution1() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="btn btn-violet">Actions</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="dropdown-menu-content bg-card text-primary" sideOffset={5}>
        <DropdownMenu.Group>
          <DropdownMenu.Label className="dropdown-menu-label">Items with dialog</DropdownMenu.Label>
          <DialogItem triggerChildren="Edit">
            <Dialog.Title className="dialog-title">Edit</Dialog.Title>
            <Dialog.Description className="dialog-description">
              Edit this record below.
            </Dialog.Description>
            <p>…</p>
          </DialogItem>

          <DialogItem triggerChildren="Delete">
            <Dialog.Title className="dialog-title">Delete</Dialog.Title>
            <Dialog.Description className="dialog-description">
              Are you sure you want to delete this record?
            </Dialog.Description>
          </DialogItem>
        </DropdownMenu.Group>

        <DropdownMenu.Separator className="dropdown-menu-separator" />

        <DropdownMenu.Group>
          <DropdownMenu.Label className="dropdown-menu-label">Regular items</DropdownMenu.Label>
          <DropdownMenu.Item className="dropdown-menu-item">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-menu-item">Copy</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-menu-item">Save</DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Arrow className="dropdown-menu-arrow" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function DropdownWithDialogItemsSolution2() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [hasOpenDialog, setHasOpenDialog] = React.useState(false);
  const dropdownTriggerRef = React.useRef<HTMLButtonElement>(null);
  const focusRef = React.useRef<HTMLElement | null>(null);

  function handleDialogItemSelect() {
    focusRef.current = dropdownTriggerRef.current;
  }

  function handleDialogItemOpenChange(open: boolean) {
    setHasOpenDialog(open);
    if (open === false) {
      setDropdownOpen(false);
    }
  }

  return (
    <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="btn btn-violet" ref={dropdownTriggerRef}>
          Actions
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="dropdown-menu-content"
        sideOffset={5}
        hidden={hasOpenDialog}
        onCloseAutoFocus={(event) => {
          if (focusRef.current) {
            focusRef.current.focus();
            focusRef.current = null;
            event.preventDefault();
          }
        }}
      >
        <DropdownMenu.Group>
          <DropdownMenu.Label className="dropdown-menu-label">Items with dialog</DropdownMenu.Label>
          <DialogItem
            triggerChildren="Edit"
            onSelect={handleDialogItemSelect}
            onOpenChange={handleDialogItemOpenChange}
          >
            <Dialog.Title className="dialog-title">Edit</Dialog.Title>
            <Dialog.Description className="dialog-description">
              Edit this record below.
            </Dialog.Description>
            <p>…</p>
          </DialogItem>

          <DialogItem
            triggerChildren="Delete"
            onSelect={handleDialogItemSelect}
            onOpenChange={handleDialogItemOpenChange}
            
          >
            <Dialog.Title className="dialog-title z-[999999]">Delete</Dialog.Title>
            <Dialog.Description className="dialog-description z-[999999]">
              Are you sure you want to delete this record?
            </Dialog.Description>
          </DialogItem>
        </DropdownMenu.Group>

        <DropdownMenu.Separator className="dropdown-menu-separator" />

        <DropdownMenu.Group>
          <DropdownMenu.Label className="dropdown-menu-label">Regular items</DropdownMenu.Label>
          <DropdownMenu.Item className="dropdown-menu-item">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-menu-item">Copy</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-menu-item">Save</DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Arrow className="dropdown-menu-arrow" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

interface DialogItemProps {
  triggerChildren: React.ReactNode;
  children: React.ReactNode;
  onSelect?: () => void;
  onOpenChange?: (open: boolean) => void;
}

const DialogItem = React.forwardRef<HTMLDivElement, DialogItemProps>(
  ({ triggerChildren, children, onSelect, onOpenChange, ...itemProps }, forwardedRef) => {
    return (
      <Dialog.Root onOpenChange={onOpenChange}>
        <Dialog.Trigger asChild>
          <DropdownMenu.Item
            {...itemProps}
            ref={forwardedRef}
            className="dropdown-menu-item z-[999999]"
            onSelect={(event) => {
              event.preventDefault();
              onSelect && onSelect();
            }}
          >
            {triggerChildren}
          </DropdownMenu.Item>
        </Dialog.Trigger>
        <Dialog.Portal >
          <Dialog.Overlay className="dialog-overlay z-[999999]" />
          <Dialog.Content className="dialog-content z-[999999]">
            {children}
            <Dialog.Close asChild>
              <button className="icon-button" aria-label="Close">
                <CrossIcon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

DialogItem.displayName = "DialogItem";
