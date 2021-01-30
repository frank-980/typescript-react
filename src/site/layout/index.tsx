import React,{useState,useRef,useEffect} from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import routeInfo from './hooks/routeInfo'
import useScreenWidth from './hooks/useScreenWidth'
import Header from './header'
import SiderBar from './SiderBar'
import Footer from './footer'
import {ISiteProps,ISiteState} from '../interface/site'
import {useLocation} from 'react-router-dom'
import CSST from "./CSST"
const Site:React.FC = (props:any)=>{
    const {isShow,changeToAny,children,width,setWidth} = props
    let location = useLocation();
    console.log("layout加载了")
    /* screen size change */
        window.onresize=function(){
            setWidth(window.innerWidth)
        }
        const dynStyle = useScreenWidth(width,[width])

    /* css transition change */
        const isFirst = useRef(true)
        useEffect(()=>{
            if(isFirst.current){
                isFirst.current=false
                return
            }
            
            changeToAny("changeToTrue")
        },[children])
    /* end */
    return (
        <div className="wrapper">
            <Header/>
            <div className="main container">
                <SiderBar changeToAny={changeToAny} width={dynStyle.width}/>
                <div className="contentbar" style={{padding:dynStyle.padding}}>
                    <CSST isShow={isShow} changeToAny={changeToAny} children={children}/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state:ISiteState) {
    return {
      isShow: state.routeInfo.isShow,
      width:state.screenWidth.width
    }
  }
function mapDispatchToProps(dispatch:any) {
    return {
        changeToAny: (status:boolean) => {
            dispatch({type:status})
        },
        setWidth:(width:number)=>{
            dispatch({type:"setWidth",payload:{width}})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Site)