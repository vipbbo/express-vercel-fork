import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// import { setupPageGuard } from './permission'
import { ChatLayout } from '@/views/chat/layout'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'Root',
  //   component: ChatLayout,
  //   redirect: '/chat',
  //   children: [
  //     {
  //       path: '/chat/:uuid?',
  //       name: 'Chat',
  //       component: () => import('@/views/chat/tab-chat.vue'),
  //     },
  //   ],
  // },
	{
		path: '/',
		name: 'Root',
		component: ChatLayout,
		redirect: '/chat',
		children: [
			{
				path: '/chat/:uuid?',
				name: 'Chat',
				component: () => import('@/views/tab/tab-chat.vue'),
				props: true
			},
			{
				path: '/user',
				name: 'User', // 给路由起一个名字
				component: () => import('@/views/tab/tab-user.vue'),
			},
		],
	},

	{
		path: '/share/index',
		name: 'Share', // 给路由起一个名字
		component: () => import('@/views/share/index.vue'),
	},
	{
		path: '/user',
		name: 'User', // 给路由起一个名字
		component: () => import('@/views/tab/tab-user.vue'),
	},
	{
		path: '/pay/index',
		name: 'Pay', // 给路由起一个名字
		component: () => import('@/views/pay/index.vue'),
	},
	// 其他路由配置

	{
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
  },

  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/index.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
