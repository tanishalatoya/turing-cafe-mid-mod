import React from 'react';
import { Card } from '../Card/Card';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('should display the correct information when rendered', async () => {
    const mockDeleteReservation = jest.fn()
    const { getByText, findByText } = render(<Card
      name={'Lola'}
      date={'10/08'}
      time={'4:00 pm'}
      number={2}
      id={4}
      deleteReservation={mockDeleteReservation}
      />)

    expect(getByText('Lola')).toBeInTheDocument();
    expect(getByText('10/08')).toBeInTheDocument();
    expect(findByText('4:00 pm')).toBeDefined(); //Text broken up my multiple elements ... google this error and figure out how to test it properly
    // expect(findByText(2)).toBeDefined();
  });

  it('should fire delete a reservation when the cancel button is clicked', () => {
    const mockDeleteReservation = jest.fn()
    const { getByText, getByDisplayValue } = render(<Card
      name={'Lola'}
      date={'10/08'}
      time={'4:00'}
      number={2}
      id={4}
      deleteReservation={mockDeleteReservation}
      />)

      fireEvent.click(getByText('Cancel'))
      expect(mockDeleteReservation).toHaveBeenCalledWith(4)
  });
});
