<script setup lang="ts">
import { ref } from "vue";
import { NIcon } from 'naive-ui';
const currentTab = ref<string>('chat');
const handleTabSwitch = (tab: string) => {
	currentTab.value = tab;
};

</script>
<template>
	<footer class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
		<div class="flex-1 flex-shrink-0 overflow-hidden ">

			<div class="h-10 custom-tabs">
				<div
					class="custom-tab"
					:class="{ 'active-tab': currentTab === 'chat' }"
					@click="handleTabSwitch('chat')"
				>
					<n-icon class="custom-icon" :class="{ 'active-icon': currentTab === 'chat' }">
						<svg viewBox="0 0 24 24">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M16 19a6.99 6.99 0 0 1-5.833-3.129l1.666-1.107a5 5 0 0 0 8.334 0l1.666 1.107A6.99 6.99 0 0 1 16 19z" fill="currentColor"></path><path d="M20 8a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2z" fill="currentColor"></path><path d="M12 8a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2z" fill="currentColor"></path><path d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V6a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v14a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V6a3.999 3.999 0 0 1 4-4h20a3.999 3.999 0 0 1 4 4v14a4 4 0 0 1-4 4h-4.835z" fill="currentColor"></path></svg>
						</svg>
					</n-icon>
					<span class="tab-text" :style="{ color: currentTab === 'chat' ? '#015d01' : '' }">聊天</span>
				</div>
				<div
					class="custom-tab"
					:class="{ 'active-tab': currentTab === 'user' }"
					@click="handleTabSwitch('user')"
				>
					<n-icon class="custom-icon" :class="{ 'active-icon': currentTab === 'user' }">
						<svg viewBox="0 0 24 24">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3z" fill="currentColor"></path><path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z" fill="currentColor"></path></svg>
						</svg>
					</n-icon>
					<span class="tab-text" :style="{ color: currentTab === 'user' ? '#015d01' : '' }">我的</span>
				</div>
			</div>
		</div>
	</footer>
</template>


<style scoped>
.custom-tabs {
	display: flex;
	justify-content: space-evenly;
	position: relative; /* 让 .custom-tabs-border-top 相对于 .custom-tabs 定位 */
}

.custom-tab {
	cursor: pointer;
	/*padding: 10px;*/
	display: flex;
	flex-direction: column; /* 将图标和文字垂直排列 */
	align-items: center;
}

/*.active-tab {*/
/*	background-color: #eee; !* 激活时的背景色 *!*/
/*}*/

.custom-icon {
	color: #000; /* 默认图标颜色 */
}

.active-icon {
	color: #015d01; /* 激活时的图标颜色 */
}

.tab-text {
	margin-top: 8px; /* 调整文字与图标的间距 */
	color: #000; /* 默认文字颜色 */
}
</style>
