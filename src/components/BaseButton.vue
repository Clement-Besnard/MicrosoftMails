<template>
  <button
    :class="buttonClasses"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isHovered: false,
      isFocused: false,
    };
  },
  computed: {
    buttonClasses() {
      const classes = ['base-button'];

      if (this.primary) {
        classes.push('base-button--primary');
      } else if (this.color === 'warn') {
        classes.push('base-button--warn');
      } else if (this.color === 'danger') {
        classes.push('base-button--danger');
      }

      if (this.isHovered) {
        if (this.color === 'primary') {
          classes.push('base-button--hovered-primary');
        } else if (this.color === 'warn') {
          classes.push('base-button--hovered-warn');
        } else if (this.color === 'danger') {
          classes.push('base-button--hovered-danger');
        }
      }

      if (this.isFocused) {
        classes.push('base-button--focused');
      }

      if (this.disabled) {
        if (this.color === 'primary') {
          classes.push('base-button--disabled-primary');
        } else if (this.color === 'warn') {
          classes.push('base-button--disabled-warn');
        } else if (this.color === 'danger') {
          classes.push('base-button--disabled-danger');
        } else {
          classes.push('base-button--disabled');
        }
      }

      return classes;
    },
  },
  methods: {
    handleFocus() {
      if (!this.disabled) {
        this.isFocused = true;
      }
    },
    handleBlur() {
      this.isFocused = false;
    },
  },
};
</script>

<style scoped>
.base-button {
  background-color: rgb(26, 162, 192);
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease;
}

.base-button--primary {
    background-color: blue; /* Changer la couleur à bleu */
    color: white;
}

.base-button--warn {
  background-color: orange;
  color: white;
}

.base-button--danger {
  background-color: rgb(0, 131, 48);
  color: white;
}

.base-button--disabled {
  color: white;
  cursor: not-allowed;
}

.base-button--disabled-primary {
  background-color: rgb(0, 97, 29);
  color: white;
  cursor: not-allowed;
}

.base-button--hovered-primary {
  background-color: rgb(10, 199, 241);
}

.base-button--hovered-warn {
  background-color: rgb(255, 136, 0);
}

.base-button--disabled-warn {
  background-color: rgb(207, 146, 77);
  color: white;
  cursor: not-allowed;
}

.base-button--hovered-danger {
  background-color: rgb(212, 0, 0);
}

.base-button--disabled-danger {
  background-color: rgb(156, 58, 58);
  color: white;
  cursor: not-allowed;
}

.base-button--focused {
  box-shadow: 0 0 2px 1px lightgreen;
}
</style>
