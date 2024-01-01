<template>
	<div>
		<header class="bg-green-500 p-2 text-white">
			<button @click="goBack"><span class="">&lt;</span> 返回</button>
		</header>

		<div class="container mx-auto p-4">
			<div class="flex justify-between">
				<div
					class="card mx-2 mb-4 w-1/4 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
					v-for="menu in menuList"
					:key="menu.id"
					:class="{ 'bg-blue-100': !menu.selected }"
					@click="toggleSelection(menu)"
					:style="{ borderColor: menu.selected ? 'green' : 'transparent' }"
				>
					<h3 class="text-lg font-bold mb-2">{{ menu.name }}</h3>
					<p class="text-gray-600">{{ menu.price }}</p>
				</div>
			</div>

			<!-- Apply Tailwind CSS classes to center the WeChat Pay button -->
			<div class="flex items-center justify-center mt-4">
				<button class="bg-green-500 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105" @click="wechatPay">
					<span class="wechat-icon">&#x1F426;</span> 微信支付
				</button>
			</div>
			<div class="text-center mt-4">
				<p>会员特权</p>
				<p>尊享公众号特权</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

interface MenuItem {
	id: number;
	name: string;
	price: string;
	selected: boolean;
}

const menuList: MenuItem[] = [
	{ id: 1, name: "体验日卡", price: "¥6.6", selected: false },
	{ id: 2, name: "月卡", price: "¥25", selected: false },
	{ id: 3, name: "季卡", price: "¥66", selected: false },
	{ id: 4, name: "年卡", price: "¥168", selected: false },
];

const goBack = () => {
	router.push({ name: 'User', query: { tab: 'user' } });
};


const wechatPay = () => {
	// 实现微信支付逻辑
	alert("微信支付按钮被点击");
};

const toggleSelection = (menu: MenuItem) => {
	menu.selected = !menu.selected;
	console.log(menu);
};
</script>
