"use client"

import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";



export const MobileSidebar = () =>{

    const [sheetOpen, setSheetOpen] = useState(false)
    return (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100] " side="left">
                <Sidebar setOpen={setSheetOpen} className=""/>
            </SheetContent>
        </Sheet>
    )
} 