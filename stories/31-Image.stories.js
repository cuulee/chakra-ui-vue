import { storiesOf } from '@storybook/vue'
import centered from '@storybook/addon-centered/vue'
import { Image as KImage } from '../packages/kiwi-core/src'

storiesOf('UI | Image', module)
  .addDecorator(centered)
  .add('Basic Usage', () => ({
    components: { KImage },
    template: `
      <KImage
        shadow="sm"
        htmlWidth="100px"
        src="https://avatars3.githubusercontent.com/u/37928?s=52&v=4"
      />
    `
  }))
