"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { VscChromeClose } from "react-icons/vsc"
import CmnButton from "./cmn-button"
import { IoSearchOutline } from "react-icons/io5";
import { Search, SearchX } from "lucide-react"

export function SearchBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("");

  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection={"right"}>
      <DrawerTrigger >
        <IoSearchOutline size={24} />
      </DrawerTrigger>
      <DrawerContent
        className={`w-full rounded-none! sm:w-3/5 md:rounded-lg lg:w-2/6  z-999! `}
      >
        <DrawerHeader className="flex-row items-center justify-between">
          <DrawerTitle className="text-xl text-foreground md:text-2xl">
            Search
          </DrawerTitle>
          <DrawerClose className="cursor-pointer transition-all duration-300 hover:rotate-180">
            <VscChromeClose size={22} className="text-foreground" />
          </DrawerClose>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-4">



          <div
            className={`flex h-14 items-center rounded-full border bg-[#F7F8FA] px-5 transition-colors duration-200 ${value ? "border-black" : "border-transparent"
              } focus-within:border-black`}
          >
            <Search className="size-5 shrink-0 text-black" />

            <input
              type="text"
              placeholder="Search..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="ml-3 flex-1 bg-transparent text-lg text-black placeholder:text-[#9CA3AF] focus:outline-none"
            />

            {value && (
              <button
                type="button"
                onClick={() => setValue("")}
                className="ml-4 text-sm font-medium text-[#6B7280] transition-colors hover:text-black"
              >
                Clear
              </button>
            )}
          </div>



          <div className="flex min-h-[400px] flex-col items-center justify-center px-6 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
              <SearchX className="h-8 w-8 text-black" strokeWidth={1.8} />
            </div>

            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              Lorem ipsum dolor sit amet.
            </h2>

            <p className="max-w-sm text-base leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus quam nemo atque dignissimos vel.
            </p>
          </div>



        </div>
        {/* <DrawerFooter>
 
          
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  )
}
