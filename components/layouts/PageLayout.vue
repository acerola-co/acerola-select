<script lang="ts" setup></script>
<!-- vertical 기준 작성 레이아웃 -->
<template>
	<section class="page-layout">
		<!-- 상단 위치 -->
		<div v-if="$slots.header" class="page-header">
			<slot name="header"></slot>
		</div>

		<!-- 내용 위치 -->
		<div class="page-content">
			<slot v-if="$slots.content" name="content"></slot>
			<slot v-else></slot>
		</div>

		<!-- 하단 위치 -->
		<div v-if="$slots.footer" class="page-footer">
			<slot name="footer"></slot>
		</div>

		<!-- 숨김 컴포넌트 영역 -->
		<slot v-if="$slots.modal" name="modal"></slot>
	</section>
</template>
