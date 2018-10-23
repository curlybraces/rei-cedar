/**
 * #Size Mixin/Interface
 *
 * Functionality for handling/standardizing component sizing.
 *
 *  :Values
 *    :small
 *    :medium (default)
 *    :large
 *
 * @mixin
 */
import BuildClass from './buildClass';

const sizes = ['small', 'medium', 'large'];

export default {
  mixins: [BuildClass],
  props: {
    /**
     * Size state
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => (sizes.indexOf(value) >= 0) || false,
    },
  },
  computed: {
    sizeClass() {
      const returnClass = this.buildClass('size');
      console.log('Size Class = ', returnClass);
      return returnClass;
    },
  },
  methods: {
    /**
     * Changes the component Size Prop
     */
    setSize(newSize) {
      this.size = newSize;
    },
    /**
     * Changes the component Size Prop
     */
    getSize() {
      return this.size;
    },
  },
};
