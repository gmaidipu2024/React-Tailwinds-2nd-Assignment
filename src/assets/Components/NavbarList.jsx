import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

 function NavbarList() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
    "Solutions",
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-[#002228] text-white py-3">
      <div className="grid grid-cols-3 justify-items-stretch  items-center gap-4 ">
        <div className=" items-start "> 
          <NavbarBrand>
            <img src="Logo.svg" alt="" />
          </NavbarBrand>
        </div>
        <div >
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem >
              <Link  href="#" className="text-white">
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" className="text-white">
                Pricing
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link  href="#" className="text-white">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link  href="#" className="text-white">
                Solutions
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
        <div className=" grid items-end">
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#" className="text-black bg-[#0FF1F6] rounded-full p-2.5 font-bold">Book a Demo</Link>
            </NavbarItem>
            <NavbarItem className="hidden md:block text-white ">
            <Button color="primary" variant="ghost">
              Contact Us
            </Button>  
            </NavbarItem>
          </NavbarContent>
        </div>
      </div>

      <NavbarMenu className=" bg-[#02242ae3] mt-2 ">
        {menuItems.map((item, i) => (
          <NavbarMenuItem key={`${item}-${i}`} className="text-center py-2 mt-2" >
            <Link 
            
              className="w-full"
              href="#"
              size="lg"
              
            >
              {item}
            </Link>
            
          </NavbarMenuItem>
        ))}
            <Button color="primary" variant="ghost">
              Contact Us
            </Button> 
          
      </NavbarMenu>

      <NavbarContent className="text-white ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="block md:hidden   "
        />
      </NavbarContent>
    </Navbar>
  );
}
export default NavbarList;