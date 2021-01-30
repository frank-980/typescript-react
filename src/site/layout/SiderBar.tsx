import React from 'react';
import {ISideProps,ISideData} from '../interface/sideBar'
import {NavLink} from 'react-router-dom'
const SideBar:React.FC<ISideProps> = (props:ISideProps)=>{
  console.log(props)
  const {changeToAny, width} = props
    const sidebar:ISideData[]=[
        {
          text:"通用",
          children:[
            {
              id:1,
              text:"button 按钮",
              path:"/button",
            },
            {
              id:2,
              text:"Icon 图标",
              path:"/icon",
            },
          ]
        },
        {
          text:"布局",
          children:[
            {
              id:34,
              text:"Divider 分割线",
              path:"/divider",
            },
            {
              id:4,
              text:"Grid 栅格",
              path:"/grid",
            }
          ]
        },
        {
          text:"数据录入",
          children:[
            {
              id:5,
              text:"Select 选择器",
              path:"/select",
              
            },
            {
              id:6,
              text:"Checkbox 多选框",
              path:"/checkbox",
            },

            {
              id:7,
              text:"Input 输入框",
              path:"/input",
            },
           
          ]
        },
        {
          text:"数据展示",
          children:[
            {
              id:9,
              text:"Table 表格",
              path:"/table",
            }
          ]
        },
    ]
    return (
        <div className="sidebar" style={{width:width}}>
            <ul className="firstUl">
                {sidebar.map((item,index)=>{
                    return (
                        <li className="firstLi" key={index}>
                            <div className="firstTit">{item.text}</div>
                            {item.children.map(item2=>{
                                return (
                                    <div key={item2.id}>
                                      <NavLink
                                        className="thirdTit"
                                        to={item2.path}
                                        onClick={()=>changeToAny("changeToFalse")}>
                                        {item2.text}
                                      </NavLink>
                                    </div>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
/*布局
<div className="sidebar">
  <ul>
    <li> 
      <div>蔬菜组件</div>
      <div>青菜</div>
      <div>茄子</div>
    </li>
    <li>
      ...
    </li>
  </ul>
</div>
const sidebar = [
  {
    text:"蔬菜组件",
    children:[
      {
        id:1,
        text:"青菜",
        path:"/qc",
      },
      {
        id:2,
        text:"茄子",
        path:"/qz",
      }
    ]
  }
]
*/
// 基础功能
//切换组件时，使url能切换到对应的路由。引入react-router-dom的link组件，传入path即可。
//当前选中项的字体颜色要和未选中的区分开。 在点击组件时，为其添加active样式
// 可选附加功能 
//切换组件时，希望右边的content出现和隐藏能有一个动画效果。 引入第三方组件 react-transition-group
//屏幕过小时，收起SideBar。屏幕宽度足够时，展开SideBar。毫无疑问 在某个布局组件里需要监听屏幕宽度
export default SideBar