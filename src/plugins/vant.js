// 引入有赞的Vant框架
import Vue from 'vue'
import 'vant/lib/index.css'
import {
    Toast,
    ImagePreview,
    Dialog,
    Button,
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem,
    Actionsheet,
    Loading,
    Switch,
    Popup,
    Area,
    Search,
    Tab,
    Tabs,
    PullRefresh,
    Rate,
    Picker,
    RadioGroup,
    Radio,
    Cell,
    CellGroup,
    Lazyload,
    Uploader,
    NavBar,
    Icon,
    Sku,
    List
} from 'vant'
const Plugins = [
    Dialog,
    Button,
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem,
    Actionsheet,
    Loading,
    Switch,
    Popup,
    Area,
    Search,
    Tab,
    Tabs,
    PullRefresh,
    Rate,
    Picker,
    RadioGroup,
    Radio,
    Cell,
    CellGroup,
    Lazyload,
    Uploader,
    NavBar,
    Icon,
    Sku,
    List
]

Vue.prototype.$dialog = Dialog
Vue.prototype.$toast = Toast

Plugins.forEach(_ => {
    Vue.use(_)
})

