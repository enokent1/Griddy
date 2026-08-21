<template>
  <div class="logo">
    <div class="logo__box-left"></div>
    <div class="logo__box-middle">
      <span class="logo__letter">Griddy</span>
    </div>
    <div class="logo__box-right"></div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  position: relative;
  perspective: 500px;
  display: inline-flex;

  &__box {
    &-left,
    &-right {
      position: absolute;
      inset: 0;
      padding: 0.75rem;
      border: 1px solid white;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.035);
      transition: transform 0.25s ease;
      z-index: -1;
    }

    &-middle {
      padding: 0.5rem;
      border: 1px solid white;
      border-radius: 8px;
      background-color: rgb(58, 109, 154);
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }
  }

  &__letter {
    font-size: large;
    transition: 0.2s ease;
  }

  &:hover {
    .logo__box-left {
      transform: rotate(-5deg);
    }
    .logo__box-right {
      transform: rotate(-10deg);
    }
    .logo__letter {
      text-shadow: 1px 1px 8px rgba(255, 255, 255);
    }
    .logo__box-middle {
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
