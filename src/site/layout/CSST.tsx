import React,{useState,useRef,useEffect} from 'react';
import { CSSTransition } from 'react-transition-group'
import {useLocation} from 'react-router-dom'
interface Ic{
    isShow?:any;
    children?:any;
    changeToAny?:any;
}
const Footer:React.FC<Ic> = (props:Ic)=>{
    const { changeToAny, isShow } = props
    let location = useLocation();
    const isFirst = useRef(true)
    useEffect(()=>{
        if(isFirst.current){
            isFirst.current=false
            return
        }
        changeToAny("changeToTrue")
    },[location])
    return (
        <CSSTransition in={isShow} timeout={1000} classNames="star">
            {props.children}
        </CSSTransition>
    )
}
export default Footer