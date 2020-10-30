
export interface ISliders {
    title:string
    url:string
}

export interface ILessions {
    hsaMore:boolean,
    loading:boolean,
    offset:number,
    limit:number,
    list:iList[]
}

export interface iList {
    title:string
}

export interface IHomeState {
    currentCategory: CATOGORY_TYPES,
    sliders:ISliders[],
    lessions:ILessions,
    
}

export enum CATOGORY_TYPES {
    ALL,
    REACT,
    VUE,
    MORE
}