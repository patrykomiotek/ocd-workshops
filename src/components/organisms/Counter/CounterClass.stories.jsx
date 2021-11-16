import { CounterClass } from './CounterClass';

const Template = (args) => <CounterClass {...args} />;
export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

export default {
  title: 'Organisms/CounterClass',
  component: DefaultStory,
};
