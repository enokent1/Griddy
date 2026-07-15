<template>
  <div class="avatar">
    <img
      v-if="src"
      :src="src"
      alt="Аватар пользователя"
      class="avatar__image"
    />
    <div v-else class="avatar__fallback">
      {{ userInitials }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  src?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  src: null,
});

const userInitials = computed(() => {
  return props.name.split(' ').map(word => word[0]).join('').toUpperCase();
});
</script>

<style scoped lang="scss">
$avatar-size: 2.5rem;
$avatar-bg: #b45309;
$avatar-text: #ffffff;

.avatar {
  position: relative;
  width: $avatar-size;
  height: $avatar-size;
  border-radius: 9999px;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    background-color: $avatar-bg;
    color: $avatar-text;
  }
}
</style>
