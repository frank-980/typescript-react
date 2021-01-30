export interface ISideProps{
    changeToAny:any;
    width:number;
}

export interface ISideData{
    text:string,
    children:{
        id:number,
        text:string,
        path:string,
    }[]
}