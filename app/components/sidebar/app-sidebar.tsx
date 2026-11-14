import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroupAction,
  SidebarMenuButton,

} from "@/components/ui/sidebar"
import { getIconComponent } from "@/lib/icon-map"
import Image from "next/image";

const listmenu = [
  {
    "name": "dasboard",
    "url": "../../admin",
    "icon": " dasboard",
  },

  {
    "name": "user management",
    "url": "../../admin/user-management",
    "icon": "users",
  },

  {
    "name": "category",
    "url": "../../admin/category",
    "icon": "settings",
  },

  {
    "name": "jurusan",
    "url": "../../admin/jurusan",
    "icon": "home",
  },

  {
    "name": "article",
    "url": "../../admin/article",
    "icon": "menu",
  },

  {
    "name": "profile",
    "url": "../../admin/profile",
    "icon": "user",
  }

]
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
