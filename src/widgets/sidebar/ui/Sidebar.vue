<template>
    <div class="w-25%">
        <ul>
            <li v-for="link in points">
                {{ link }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const points = [
    'Задачи', 'Проекты','Дашборд','Календарь',
]
</script>