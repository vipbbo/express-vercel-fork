<script setup lang="ts">
import { NLayoutContent } from 'naive-ui'
// import { ref } from 'vue'
import { useRouter } from 'vue-router';
import User from '@/views/user/index.vue'

// const iconColor = ref('black')
const router = useRouter();

const handleTabSwitch = (tab: string) => {
	// currentTab.value = tab
	router.push({ name: tab });
}

// const handleShareClick = () => {
// 	router.push({ name: 'Share' });
// }
// const handlePayClick = () => {
// 	router.push({ name: 'Pay' });
// }
// const handleClick = () => {
// 	iconColor.value = iconColor.value === 'black' ? 'gold' : 'black'
// }
</script>

<template>
	<NLayoutContent
		:collapsed-width="0"
		:width="260"
		collapse-mode="transform"
		position="absolute"
		bordered
	>
		<div class="flex flex-col h-full">
			<main class="flex flex-col flex-1 min-h-0">
				<User/>
			</main>
			<footer class="flex items-center justify-center min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
				<div class="flex-1 flex-shrink-0 overflow-hidden">
					<div class="h-10 flex justify-center space-x-4">
						<div
							class="flex items-center cursor-pointer"
							:class="{ 'text-green-600': $route.name === 'Chat' }"
							@click="handleTabSwitch('Chat')"
						>
							<div class="emoji-container">
								<span class="emoji">&#x1F4AC;</span>
								<span class="text">聊天</span>
							</div>
						</div>
						<div
							class="flex items-center cursor-pointer"
							:class="{ 'text-green-600': $route.name === 'User' }"
							@click="handleTabSwitch('User')"
						>

							<div class="emoji-container">
								<span class="me-icon">&#x1F464;</span>
								<span class="text">我的</span>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</div>
	</NLayoutContent>
</template>
