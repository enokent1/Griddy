<template>
    <label class="switch">
        <input class="switch__input" type="checkbox">
        <span class="switch__track"></span>
    </label>
</template>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 30px;
}

.switch__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

.switch__track {
    position: absolute;
    inset: 0;
    border-radius: 100px;
    background-color: rgb(163, 163, 163);
    transition: background 0.2s ease;
}

.switch__track::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
    transition: transform 0.2s ease;
}

.switch__input:checked + .switch__track {
    background-color: #34c759;
}

.switch__input:checked + .switch__track::before {
    transform: translateX(20px);
}
</style>