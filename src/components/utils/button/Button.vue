<template>
    <button
      :class="['custom-button', variantClass, className]"
      @click="handleClick"
    >
      <slot></slot> 
    </button>
  </template>
  
  <script>
  export default {
    name: 'CustomButton',
    props: {
      variant: {
        type: String,
        default: 'primary',
      },
      onClick: {
        type: Function,
        default: () => {},
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      variantClass() {
        switch (this.variant) {
          case 'dark':
            return 'bg-black text-white';
          case 'danger':
            return 'bg-red-500 text-white';
          default:
            return 'bg-primary-blue text-white';
        }
      },
    },
    methods: {
      handleClick() {
        this.onClick();
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-button {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
  </style>
  