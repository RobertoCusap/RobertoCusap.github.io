"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Car, BookOpen, Phone } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Car className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LTMS</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">E-Learning</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/elearning/traffic-rules"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Traffic Rules</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about traffic regulations and road safety
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/elearning/vehicle-safety"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Vehicle Safety</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vehicle maintenance and safety guidelines
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/elearning/licensing"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Licensing Guide</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Step-by-step licensing process and requirements
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Register Now</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    E-Learning
                  </h3>
                  <div className="pl-6 space-y-2">
                    <Link href="/elearning/traffic-rules" className="block text-gray-600 hover:text-blue-600">
                      Traffic Rules
                    </Link>
                    <Link href="/elearning/vehicle-safety" className="block text-gray-600 hover:text-blue-600">
                      Vehicle Safety
                    </Link>
                    <Link href="/elearning/licensing" className="block text-gray-600 hover:text-blue-600">
                      Licensing Guide
                    </Link>
                  </div>
                </div>

                <Link href="/contact" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Link>

                <div className="border-t pt-4 space-y-2">
                  <Link href="/login" className="block">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register" className="block">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Register Now</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
