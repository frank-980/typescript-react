# SXD-UI

create-react-app + typescript 组件库
npx create-react-app my-app --template typescript

## Include

### [开始](https://www.yuque.com/frank980/ygs3ps/ny150b)
1. 通用：
    - button 按钮
    - Icon 图标
2. 布局：
    - Divider分割线
    - Grid 栅格
3. 数据录入：
    - [Select 选择器](https://www.yuque.com/frank980/ygs3ps/ec6x00)
    - Checkbox 多选框
    - Input 输入框
4. 数据展示：
    - 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#Update Log
2021-1-30
优化site目录下文件结构逻辑
1. ContentBar从layout中抽离到components的content中，
2. codePerview拆分成3个组件Preview，Introduce，Code
3. 修改了一些组件和参数的名字
删除layout文件夹下content文件夹，header，leftNav更换文件名siderBar，footer和index
新增component文件夹下content文件夹，新增brief，demoList，params和index文件。
新增demo文件夹，新增Preview，Introduce，Code，index文件

2021-2-1
优化路由和路由入场过渡逻辑
1. switch包裹在layout中，route从render渲染改为component渲染
<Switch>
	 <Route exact path='/button' render={(props)=><Layout {...props}><ButtonPage/></Layout>}/>
</Switch>

<Layout>
	<Switch>
		 <Route exact path='/button' component={ButtonPage}/>
	</Switch>
</Layout>

2.入场动画CSSTransition从layout抽离到router的switch外层，使用TransitionGroup + CSSTransition
3.添加路由表统一管理，侧边栏SiderBar引入路由表
4.删除redux中管理入场动画的Reducer和State