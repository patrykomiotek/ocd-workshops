import { Blog } from './Blog';

const Template = (args) => <Blog {...args} />;
export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

export default {
  title: 'Organisms/Blog',
  component: DefaultStory,
};
