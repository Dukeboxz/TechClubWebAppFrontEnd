import { Badge } from "./Badge";

export interface Member {
    id: number;
    name: string; 
    avatarImageUrl: string; 
    badges : Array<Badge>; 
    coins : number;
    isAdmin: boolean;

}