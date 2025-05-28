import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-10">
          <h1 className="text-white text-2xl font-bold">Memory Smash</h1>

          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/Docs"
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/Pricing"
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-3">
          <Link href="/login" className="no-underline">
            <Button className="bg-gray text-white border-white hover:bg-white hover:text-black">
              Login
            </Button>
          </Link>
          <Link href="/register" className="no-underline">
            <Button className="bg-white text-black hover:bg-gray-200">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
