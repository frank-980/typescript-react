export interface ISideProps{
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