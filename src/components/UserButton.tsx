import { useEffect, useState } from "react";
import { User } from "@/api/types";
import { getUser } from "@/hooks/useUser";
import { Button } from "./ui/button";

import {
  Activity,
  CircleHelp,
  Keyboard,
  LogOut,
  Settings,
  Star,
  User2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ConfigurationModal from "@/sections/ConfigurationModal";
import ConfigComponent from "@/sections/Navbar/ConfigComponent";

function UserButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const username = "Davs07";
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(username);
        setUser(userData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant={"none"} className="rounded-xl">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-2">{user.login}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[9] text-primary dark rounded-xl">
        <DropdownMenuLabel>{user.login}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e: Event) => {
                  e.preventDefault();
                }}>
                <User2 className="mr-2 h-4 w-4" />
                <span>Mi perfil</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <ConfigurationModal />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e: Event) => {
                  e.preventDefault();
                }}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configuración</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Configuración</DialogTitle>
                <DialogDescription>
                  Aquí puedes ajustar tu configuración.

                  <ConfigComponent/>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e: Event) => {
                  e.preventDefault();
                }}>
                <Activity className="mr-2 h-4 w-4" />
                <span>Registro de actividad</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Registro de actividad</DialogTitle>
                <DialogDescription>
                  Aquí puedes ver tu registro de actividad.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e: Event) => {
                  e.preventDefault();
                }}>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Atajos de teclado</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Atajos de teclado</DialogTitle>
                <DialogDescription>
                  Aquí puedes ver los atajos de teclado.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e: Event) => {
                  e.preventDefault();
                }}>
                <CircleHelp className="mr-2 h-4 w-4" />
                <span>Centro de ayuda</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Centro de ayuda</DialogTitle>
                <DialogDescription>
                  Aquí puedes obtener ayuda.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e: Event) => {
                e.preventDefault();
              }}>
              <Star className="mr-2 h-4 w-4" />
              <span>Actualizar a Premium</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Actualizar a Premium</DialogTitle>
              <DialogDescription>
                Aquí puedes actualizar tu cuenta a Premium.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <DropdownMenuSeparator />
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e: Event) => {
                e.preventDefault();
              }}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar sesión</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cerrar sesión</DialogTitle>
              <DialogDescription>
                ¿Estás seguro de que deseas cerrar sesión?
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
