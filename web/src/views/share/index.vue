<script setup lang="ts">

import { useRouter } from 'vue-router';
import { NAvatar, NButton, NCard, NIcon, NLayout, NLayoutContent, NLayoutHeader, NSpace } from 'naive-ui'
import {computed} from "vue";
import {useBasicLayout} from "@/hooks/useBasicLayout";


const router = useRouter();
const goBack = () => {
	router.push({ name: 'User', query: { tab: 'user' } });
};

const shareWithFriend = () => {
	// 处理分享逻辑，例如弹出分享框或调用分享 API
	console.log('分享给好友');
};
const { isMobile } = useBasicLayout()
const mobileSafeArea = computed(() => {
	if (isMobile.value) {
		return {
			paddingBottom: 'env(safe-area-inset-bottom)',
		}
	}
	return {}
})
</script>

<template>
	<NSpace vertical size="large">
		<NLayout>
			<NLayoutHeader :bordered="false" inverted>
				<NCard title="">
<!--					分享有奖-->
				</NCard>
			</NLayoutHeader>

			<NLayoutContent content-style="padding: 24px;">
				<div class="flex flex-col h-full" :style="mobileSafeArea">
					<main class="flex flex-col flex-1 min-h-0">
						<div class="share-reward-container">
							<div class="header">
								<h2>邀请有奖</h2>
							</div>
							<n-icon  @click="goBack">
								<svg viewBox="0 0 24 24">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><g fill="none"><path d="M7.53 2.22a.75.75 0 0 1 0 1.06L4.81 6l2.72 2.72a.75.75 0 0 1-1.06 1.06L3.22 6.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0z" fill="currentColor"></path></g></svg>
								</svg>
							</n-icon>
							<button @click="goBack">
							</button>
							<div class="content">
								<p>邀请朋友注册，双方均可获得丰厚奖励！</p>
								<div class="share-section">
									<div class="share-button" @click="shareWithFriend">
										<n-icon class="share-icon">
											<!-- 你的分享图标 SVG -->
										</n-icon>
										<span>分享给好友</span>
									</div>
								</div>
								<div class="reward-section">
									<div class="reward-item">
										<n-icon class="reward-icon">
											<!-- 你的奖励图标 SVG -->
										</n-icon>
										<span>邀请好友注册</span>
									</div>
									<div class="reward-item">
										<n-icon class="reward-icon">
											<!-- 你的奖励图标 SVG -->
										</n-icon>
										<span>好友注册成功</span>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>

			</NLayoutContent>
		</NLayout>
	</NSpace>
</template>

<style scoped>
.share-reward-container {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 8px;
}

.header {
	text-align: center;
	margin-bottom: 20px;
}

.content {
	text-align: center;
}

.share-section {
	margin-top: 20px;
}

.share-button {
	cursor: pointer;
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border-radius: 4px;
	display: inline-flex;
	align-items: center;
}

.share-icon {
	margin-right: 8px;
}

.reward-section {
	margin-top: 40px;
	display: flex;
	justify-content: space-around;
}

.reward-item {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.reward-icon {
	margin-bottom: 8px;
}
</style>
