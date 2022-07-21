import Layout from '@/layout/index.vue';
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 *  静态路由
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export default [
  {
    path: '/',
    component: Layout,
    name: 'Dashboard',
    meta: { title: 'Dashboard', icon: 'dashboard', affix: true },
  },
  {
    path: '/213',
    component: Layout,
    meta: { title: '多级菜单', icon: 'dashboard', affix: true },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard1',
        meta: { title: 'Dashboard1', icon: 'dashboard', affix: true },
      },
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard2',
        meta: { title: 'Dashboard2', icon: 'dashboard', affix: true },
        children: [
          {
            path: 'dashboard11',
            component: () => import('@/views/dashboard/index.vue'),
            name: 'Dashboard11',
            meta: { title: 'Dashboard1', icon: 'dashboard', affix: true },
          },
          {
            path: 'dashboard111',
            component: () => import('@/views/dashboard/index.vue'),
            name: 'Dashboard212',
            meta: { title: 'Dashboard2', icon: 'dashboard', affix: true },
          },
        ],
      },
    ],
  },
  {
    path: '/test',
    component: Layout,
    name: 'test1321',
    meta: { icon: '404', title: 'error' },
    children: [
      {
        path: '/12',
        component: () => import('@/views/test/test.vue'),
        name: 'test1',
        meta: { title: 'test', icon: 'bug', affix: true },
      },
    ],
  },
  {
    name: 'error-404',
    path: '/error/404',
    component: Layout,
    hidden: false,
    meta: { icon: '404', title: 'error' },
    children: [
      {
        path: '',
        component: () => import('@/views/test/test.vue'),
        name: 'test-error',
        meta: { title: 'test-404', icon: 'bug' },
      },
    ],
  },

  {
    name: '409',
    path: '/409',
    component: () => import('@/views/error/Error404.vue'),
    hidden: false,
  },
  {
    path: '/redirect',
    // component: Layout,
    hidden: true,
    name: 'redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/error/redirect.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/Error404.vue'),
    name: '404',
    hidden: true,
  },
];
