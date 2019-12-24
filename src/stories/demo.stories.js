import { storiesOf } from "@storybook/vue";
import DemoVuerdCore from "../components/DemoVuerdCore.vue";
import DemoVuerd from "../components/DemoVuerd.vue";

const stories = storiesOf("Demo|Live", module);

stories.add("vuerd-core", () => ({
  components: { DemoVuerdCore },
  template: `<DemoVuerdCore/>`
}));

stories.add("vuerd", () => ({
  components: { DemoVuerd },
  template: `<DemoVuerd/>`
}));
