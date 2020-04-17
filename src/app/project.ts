import { ProjectStage } from "./projectStage";

export interface Project {
    id: number ;
    title: string; 
    instructions: string; 
    imageUrl : string; 
    moreInfoLink: string; 
    stages: Array<ProjectStage>;
    Reward: number;
}