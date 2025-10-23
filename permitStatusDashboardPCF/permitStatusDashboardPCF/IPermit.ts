
export interface IPermit {
    permitId: string;
    status:string;
    statusReason: string;
    expirationDate: Date;
    facility:{
        id:string; 
        name:string;
    };
}