
import Db from '@/components/publish/Db.vue'
import Js from '@/components/publish/Js.vue'
import publish from '@/components/publish/publish.vue'
export const publishVue =
{
  path:'/vue',
  component:publish,
  name:'publish',
  children:[
    {
      path:'publish/Db',
        component:Db,
        name:'Db',
    },
    {
      path:'publish/Js',
        component:Js,
        name:'Js',
    }
  ]
}
