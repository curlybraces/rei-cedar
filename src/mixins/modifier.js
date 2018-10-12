/**
 * @mixin
 */
export default {
  props: {
    /**
     * Space separated list of modifiers. See above for possible values
     */
    modifier: String,
    contentPriority: {
      type: String,
      default: 'primary',
      validator: value =>
        ['primary', 'secondary', 'tertiary'].indexOf(value) >= 0 || false,
    },
  },
  computed: {
    contentPriorityClass() {
      const base = this.baseClass;
      const contentPriorityArr = this.contentPriority
        ? this.contentPriority.split(' ')
        : [];
      let final = [];

      if (!this.$style) {
        final.push(`${base}`);
        final = final.concat(contentPriorityArr.map(mod => this.modifyClassName(base, mod)));
      } else {
        final.push(this.moduleClass(base));
        final = final.concat(contentPriorityArr.map(mod => this.modifyClassName(base, mod)));
      }

      return final.join(' ');
    },
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = [];

      if (!this.$style) {
        final.push(`${base}`);
        final = final.concat(modifierArr.map(mod => this.modifyClassName(base, mod)));
      } else {
        final.push(this.moduleClass(base));
        final = final.concat(modifierArr.map(mod => this.modifyClassName(base, mod)));
      }

      return final.join(' ');
    },
  },
  methods: {
    /**
     * Returns a css module class
     */
    moduleClass(className) {
      return this.$style[`${className}`];
    },
    /**
     * Returns a modified base class
     */
    modifyClassName(base, modifier) {
      return this.$style
        ? this.moduleClass(`${base}--${modifier}`)
        : `${base}--${modifier}`;
    },
  },
};
