import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 单独引入各个组件
// import YmButton from '@ym-plus/components/button'
// import YmCard from "@ym-plus/components/card"

// 引入所有组件
import YmPlusPlugin from '@ym-plus/components'

// 引入组件样式
import "@ym-plus/theme-chalk/src/index.scss"


const app = createApp(App)

// app.use(YmButton)
// app.use(YmCard)
app.use(YmPlusPlugin)
app.use(router)


app.mount('#app')
