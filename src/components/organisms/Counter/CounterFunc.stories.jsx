import { CounterFunc } from './CounterFunc';

const Template = (args) => <CounterFunc {...args} />;
export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

export default {
  title: 'Organisms/CounterFunc',
  component: DefaultStory,
};
