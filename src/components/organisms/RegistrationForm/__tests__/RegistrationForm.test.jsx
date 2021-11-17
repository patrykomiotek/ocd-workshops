import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { RegistrationForm } from '../RegistrationForm';

describe('Registration form', () => {
  test('should not pass validation', () => {
    const { debug, getByRole, getByText } = render(<RegistrationForm />);

    const emailField = getByRole('textbox', { name: /e\-mail:/i });
    userEvent.type(emailField, "ala ma kota");

    getByText(/email is invalid/i);

    debug();
  });
});