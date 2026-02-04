import { Link } from "react-router";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function HamburgerMenu() {
  return (
    <div className="fixed top-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-1.5 rounded-md hover:bg-white/10 transition-colors outline-none">
          <Menu size={20} className="text-zinc-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[120px]">
          <DropdownMenuItem asChild>
            <Link to="/" className="text-sm font-medium cursor-pointer">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/resume" className="text-sm font-medium cursor-pointer">
              Resume
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default HamburgerMenu;
