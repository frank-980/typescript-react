export interface ISiteProps{
    children:any;
    width:number;
    setWidth:any;
    location?:any;
    history?:any;
    match?:any;
}

export interface ISiteState{
    screenWidth:{width:number;};
}