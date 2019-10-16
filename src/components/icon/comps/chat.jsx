
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconChat',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M18.9980866 17v2c.0006292.5518122-.4466653.9991795-.9986071.9994358-.2321952.0001079-.457191-.0805895-.6363881-.2282479L14 17H3c-.55228475 0-1-.4477153-1-1V5c0-.55228475.44771525-1 1-1h18c.5522847 0 1 .44771525 1 1v11c0 .5522847-.4477153 1-1 1h-2.0019134zM4 6v9h10.7178474l2.2801828 1.878871L16.9971576 15H20V6H4zm8 5.75c-.6903559 0-1.25-.5596441-1.25-1.25 0-.69035594.5596441-1.25 1.25-1.25s1.25.55964406 1.25 1.25c0 .6903559-.5596441 1.25-1.25 1.25zm-4.25 0c-.69035594 0-1.25-.5596441-1.25-1.25 0-.69035594.55964406-1.25 1.25-1.25S9 9.80964406 9 10.5c0 .6903559-.55964406 1.25-1.25 1.25zm8.5 0c-.6903559 0-1.25-.5596441-1.25-1.25 0-.69035594.5596441-1.25 1.25-1.25s1.25.55964406 1.25 1.25c0 .6903559-.5596441 1.25-1.25 1.25z"></path>
    </cdr-icon>)
  },
};
