export type IIQDictionary = {[name: string]: IIQObjectInfo};

export enum IIQObjectType{
  Rule = "Rule",
  Task = "Task"
};

export interface IIQObjectInfo{
   type: IIQObjectType;
   path: string;
   name: string;
};

export class IIQObjectInfoImpl implements IIQObjectInfo{
   type: IIQObjectType;
   path: string;
   name: string;
   constructor(path: string){
     this.type = null;
     this.name = null;
     this.path = path;
   }
}