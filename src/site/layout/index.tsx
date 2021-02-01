import React from 'react';
import { connect } from 'react-redux';
import useScreenWidth from './hooks/useScreenWidth'
import Header from './header'
import SiderBar from './SiderBar'
import Footer from './footer'
import {ISiteProps,ISiteState} from '../interface/site'
const Site:React.FC<ISiteProps> = (props:ISiteProps)=>{
    const {children,width,setWidth} = props
    /* screen size change */
    window.onresize=function(){
        setWidth(window.innerWidth)
    }
    const dynStyle = useScreenWidth(width,[width])
    /* end */
    return (
        <div className="wrapper">
            <Header/>
            <div className="main container">
                <SiderBar width={dynStyle.width}/>
                <div className="contentbar" style={{padding:dynStyle.padding}}>
                    {children}
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state:ISiteState) {
    return {
      width:state.screenWidth.width
    }
  }
function mapDispatchToProps(dispatch:any) {
    return {
        setWidth:(width:number)=>{
            dispatch({type:"setWidth",payload:{width}})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Site)