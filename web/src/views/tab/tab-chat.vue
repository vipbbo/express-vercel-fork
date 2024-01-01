<script setup lang="ts">
import { NLayoutContent} from 'naive-ui'
import { useRouter } from 'vue-router'
import Chat from '@/views/chat/index.vue';

const router = useRouter()

const handleTabSwitch = (tab: string) => {
	router.push({ name: tab });
}

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
				<Chat />
<!--				<Chat v-show="currentTab === 'chat'" />-->
<!--				<User v-show="currentTab === 'user'" />-->
			</main>
			<footer class="flex items-center justify-center min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
				<div class="flex-1 flex-shrink-0 overflow-hidden">
					<div class="h-10 flex justify-center space-x-4">
						<div
							class="flex items-center cursor-pointer"
							:class="{ 'text-green-600': $route.name === 'Chat' }"
							@click="handleTabSwitch('chat')"
						>
<!--							<n-icon>-->
<!--								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>-->
<!--								</svg>-->
<!--							</n-icon>-->
							<div class="emoji-container">
								<span class="emoji">&#x1F4AC;</span>
								<span class="text">聊天</span>
							</div>
<!--							<span :class="{ 'text-green-600': currentTab === 'chat' }">聊天</span>-->
						</div>
						<div
							class="flex items-center cursor-pointer"
							:class="{ 'text-green-600': $route.name === 'User' }"
							@click="handleTabSwitch('User')"
						>
<!--							<n-icon>-->
<!--								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>-->
<!--								</svg>-->
<!--							</n-icon>-->
<!--							<span class="emoji">&#x1F4AC;我的</span>-->
<!--							<span :class="{ 'text-green-600': currentTab === 'user' }">我的</span>-->
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
