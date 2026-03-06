<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  details: string
  link?: string
}>()
</script>

<template>
  <a v-if="link" :href="link" class="feature-link">
    <div class="feature-icon">
      <span :class="icon" />
    </div>
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-details">{{ details }}</p>
  </a>
  <div v-else class="feature-item">
    <div class="feature-icon">
      <span :class="icon" />
    </div>
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-details">{{ details }}</p>
  </div>
</template>

<style scoped>
.feature-link,
.feature-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
  background: rgba(0, 98, 255, 0.10);
  border-radius: 8px;
}

.feature-icon span {
  font-size: 24px;
  color: #0062FF;
}

.feature-title {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
}

.feature-details {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.65);
}
</style>
