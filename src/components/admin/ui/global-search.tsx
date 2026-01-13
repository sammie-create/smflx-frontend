// components/admin/global-search.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Calendar, Users, CreditCard, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

// ---- TYPES ----
export type GlobalSearchEntity = {
  id: string;
  type: "event" | "user" | "payment";
  title: string;
  href: string;
};

// ---- TEMP MOCK (replace with API / server action) ----
const MOCK_RESULTS: GlobalSearchEntity[] = [
  {
    id: "evt_1",
    type: "event",
    title: "SMFLX Annual Camp 2026",
    href: "/events/evt_1",
  },
  {
    id: "usr_1",
    type: "user",
    title: "John Doe",
    href: "/registrations/usr_1",
  },
  {
    id: "pay_1",
    type: "payment",
    title: "Payment #10231",
    href: "/payments/pay_1",
  },
];

function GlobalSearch({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  // Keyboard shortcut ⌘K / Ctrl+K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(open => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function onSelect(item: GlobalSearchEntity) {
    setOpen(false);
    router.push(item.href);
  }

  return (
    <>
      {/* Trigger (navbar) */}
      <Button
        variant="outline"
        className={`hidden ${className} items-center gap-2 sm:flex bg-inherit cursor-pointer`}
        onClick={() => setOpen(true)}
      >
        <Search className="text-muted-foreground size-6 " />
        {/* <span className="text-sm text-muted-foreground">
          Search events, users…
        </span>
        <kbd className="ml-auto text-xs text-muted-foreground">⌘K</kbd> */}
      </Button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search events, users, payments…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Events">
            {MOCK_RESULTS.filter(r => r.type === "event").map(item => (
              <CommandItem key={item.id} onSelect={() => onSelect(item)}>
                <Calendar className="mr-2 h-4 w-4" />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Users">
            {MOCK_RESULTS.filter(r => r.type === "user").map(item => (
              <CommandItem key={item.id} onSelect={() => onSelect(item)}>
                <Users className="mr-2 h-4 w-4" />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Payments">
            {MOCK_RESULTS.filter(r => r.type === "payment").map(item => (
              <CommandItem key={item.id} onSelect={() => onSelect(item)}>
                <CreditCard className="mr-2 h-4 w-4" />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export { GlobalSearch };
