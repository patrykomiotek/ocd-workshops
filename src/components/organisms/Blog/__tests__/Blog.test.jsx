import { render } from '@testing-library/react';

import { Blog } from '../Blog';

describe("Blog component", () => {
  test("Should display two posts", async () => {
    const { debug, findByText } = render(<Blog />);

    await findByText("Post 1");

    debug();
  });
});