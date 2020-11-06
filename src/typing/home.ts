
export interface ISliders {
    title:string
    url:string
}

export interface ILessons {
    hsaMore:boolean,
    loading:boolean,
    offset:number,
    limit:number,
    list:iList[]
}

export interface iList {
    title:string,
    price:number
}

export interface IHomeState {
    currentCategory: CATOGORY_TYPES,
    sliders:ISliders[],
    lessons:ILessons,
    
}

export enum CATOGORY_TYPES {
    ALL,
    REACT,
    VUE,
    MORE
}