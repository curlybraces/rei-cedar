
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconQuestionFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 22C6.4771525 22 2 17.5228475 2 12S6.4771525 2 12 2s10 4.4771525 10 10-4.4771525 10-10 10zm0-4c.6903559 0 1.25-.5596441 1.25-1.25S12.6903559 15.5 12 15.5s-1.25.5596441-1.25 1.25S11.3096441 18 12 18zm1.5-8.5c0 .8156433-.8814065 1.1187314-1.5 1.75-.6185935.6312686-1 1.2963475-1 2.2569623 0 .5522848.4477153 1 1 1S13 14.0592471 13 13.5c0-.2535169.0628924-.4923445.1739261-.7017315.1221312-.230315.3025079-.4250102.5214988-.5644547C13.9279228 12.0857687 15.5 11.296114 15.5 9.5 15.5 7.56704621 13.9329966 6 12 6S8.5 7.56700338 8.5 9.5c0 .5522847.44771525 1 1 1 .5522847 0 1-.4477153 1-1 0-.82842712.6715729-1.5 1.5-1.5s1.5.67157288 1.5 1.5z"></path>
    </cdr-icon>)
  },
};
