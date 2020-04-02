import React from 'react';
import Form from '../Form/Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('should have a make Reservation method that is called with the correct argument', () => {
    const mockAddReservation = jest.fn();
    const { getByText, getByPlaceholderValue } = render(<Form
      addReservation={mockAddReservation}
      />)

      //give inputs a value..


    // fireEvent.click(getByText('Make Reservation'))
    // expect(mockAddReservation).toHaveBeenCalledWith(//add details here)

  });
});
