export interface ISiteProps{
    children:any;
    isShow:boolean;
    width:number;
    changeToAny:any;
    setWidth:any;
    location:any;
    history:any;
    match:any;
}

export interface ISiteState{
    routeInfo:{isShow:boolean;};
    screenWidth:{width:number;};
}