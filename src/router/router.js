import ButtonPage from '../site/pages/Button'
import SelectPage from '../site/pages/Select'
import InputPage from '../site/pages/Input'
import IconPage from '../site/pages/Icon'
import GridPage from '../site/pages/Grid'
import DividerPage from '../site/pages/Divider'
import CheckboxPage from '../site/pages/Checkbox'
import RadioPage from '../site/pages/Radio'
import TablePage from '../site/pages/Table'
export default [
    {
      text:"通用",
      children:[
        {
          id:1,
          text:"button 按钮",
          path:"/button",
          component:ButtonPage
        },
        {
          id:2,
          text:"Icon 图标",
          path:"/icon",
          component:IconPage
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
          component:DividerPage
        },
        {
          id:4,
          text:"Grid 栅格",
          path:"/grid",
          component:GridPage
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
          component:SelectPage
        },
        {
          id:6,
          text:"Checkbox 多选框",
          path:"/checkbox",
          component:CheckboxPage
        },

        {
          id:7,
          text:"Input 输入框",
          path:"/input",
          component:InputPage
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
          component:TablePage
        }
      ]
    },
]