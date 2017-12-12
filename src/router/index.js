import Vue from 'vue'
import Router from 'vue-router'
import basicInformation from '@/view/basicInformation'
import department from '@/view/department'
import uploadDocuments from '@/view/uploadDocuments'

Vue.use(Router)

export default new Router({
  routes: [
    /*{ path: '*', component: NotFoundComponent },//404页面*/
    {//首页
      path: '/',
      name: 'basicInformation',
      component: basicInformation
    },
    {
    	path: '/department',
      name: 'department',
      component: department
    },
    {
    	path: '/uploadDocuments',
      name: 'uploadDocuments',
      component: uploadDocuments
    }
  ]
})
