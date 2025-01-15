import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function MyAvatar() {
  return (
    <Avatar>
      <AvatarImage src="/icon-face.png" alt="Fabian Montoya" />
      <AvatarFallback>FM</AvatarFallback>
    </Avatar>
  );
}
