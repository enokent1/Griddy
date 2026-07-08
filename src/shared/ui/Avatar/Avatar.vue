<template>
  <div class="relative w-10 h-10 rounded-full overflow-hidden">
    <img
      v-if="src"
      :src="src"
      alt="Аватар пользователя"
      class="w-full h-full object-cover"
    />
    <div
      v-else
      class="w-full h-full rounded-full flex items-center justify-center font-medium bg-amber-700 text-white"
    >
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
    return props.name.split(' ').map(word => word[0]).join('').toUpperCase()
})
</script>
