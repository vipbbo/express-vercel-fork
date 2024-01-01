<script setup lang="ts">
import { NAvatar, NButton, NCard, NIcon, NLayout, NLayoutContent, NLayoutHeader, NSpace, NImage } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const iconColor = ref('black')
const router = useRouter();

const handleShareClick = () => {
	router.push({ name: 'Share' });
}
const handlePayClick = () => {
	router.push({ name: 'Pay' });
}
const handleClick = () => {
	iconColor.value = iconColor.value === 'black' ? 'gold' : 'black'
}
</script>

<template>
	<NSpace vertical size="large">
		<NLayout>
			<NLayoutHeader :bordered="false" inverted>
				<NCard title="">
					<NAvatar
						position="relative"
						round
						:size="48"
						src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
						class="top-52 left-30 transform -translate-x-10"
					/>
					<NIcon :color="iconColor" size="15" class="absolute top-52 left-100">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48z" fill="currentColor" /></svg>
					</NIcon>
					<span class="absolute top-25 left-120">
            w
            <br>普通用户
          </span>
				</NCard>
			</NLayoutHeader>

			<NLayoutContent content-style="padding: 24px;">
				<div class="flex flex-col h-full">
					<main class="flex flex-col flex-1 min-h-0">
						<div class="p-4">
							<NButton block class="h-50 border-radius-12" @click="handlePayClick">
								<div class="flex items-center"> <!-- 添加外层的 flex 容器 -->
									<NIcon color="gold" size="20">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512">
											<path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48z" fill="currentColor" />
										</svg>
									</NIcon>
									<span class="ml-3">加入VIP</span> <!-- 使用 margin-left 来添加间距 -->
								</div>
							</NButton>
						</div>
					</main>
				</div>
				<div class="flex flex-col h-full">
					<main class="flex flex-col flex-1 min-h-0">
						<div class="p-4">
							<NButton block class="h-50 border-radius-12" @click="handleShareClick">
								<div class="flex items-center"> <!-- 添加外层的 flex 容器 -->
									<NIcon color="blue" size="20">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M17 5.5a2.5 2.5 0 0 1-4.467 1.543L7.915 9.352a2.503 2.503 0 0 1 0 1.297l4.618 2.308a2.5 2.5 0 1 1-.448.894l-4.618-2.308a2.5 2.5 0 1 1 0-3.085l4.618-2.31A2.504 2.504 0 0 1 14.5 3A2.5 2.5 0 0 1 17 5.5z" fill="currentColor"></path></g></svg>
										</svg>
									</NIcon>
									<span class="ml-3">分享有奖</span> <!-- 使用 margin-left 来添加间距 -->
								</div>
							</NButton>
						</div>
					</main>
				</div>
				<div class="flex flex-col h-full">
					<main class="flex flex-col flex-1 min-h-0">
						<div class="p-4">
							<NButton block class="h-50 border-radius-12">
								<div class="flex items-center"> <!-- 添加外层的 flex 容器 -->
									<NIcon color="blue" size="20">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384z" fill="currentColor"></path></svg>
										</svg>
									</NIcon>
									<span class="ml-3">联系客服</span> <!-- 使用 margin-left 来添加间距 -->
								</div>
							</NButton>
						</div>
					</main>
				</div>
				<div class="flex flex-col h-full">
					<main class="flex flex-col flex-1 min-h-0">
						<div class="p-4">
							<NButton block class="h-50 border-radius-12">
								<div class="flex items-center"> <!-- 添加外层的 flex 容器 -->
									<NIcon color="blue" size="20">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.8-1.7-203.2 89.2-203.2 200c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c-.1 34.2-13.4 66.3-37.6 90.5z" fill="currentColor"></path></svg>
									</NIcon>
									<span class="ml-3">加入群聊</span> <!-- 使用 margin-left 来添加间距 -->
								</div>
							</NButton>
						</div>
					</main>
				</div>

				<!-- 其他按钮的部分省略 -->
			</NLayoutContent>
		</NLayout>
	</NSpace>
</template>
