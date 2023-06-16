import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from './components/quote';

describe('Quote component', () => {
  test('renders loading state initially', () => {
    const { container } = render(<Quote />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders error state if fetching quotes fails', async () => {
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
      throw new Error('Fetch error');
    });

    const { container } = render(<Quote />);
    await waitFor(() => {
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  test('renders quotes when fetched successfully', async () => {
    const mockQuotes = [
      {
        author: 'John Doe',
        quote: 'Sample quote',
      },
    ];

    jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(mockQuotes),
    }));

    const { container } = render(<Quote />);
    await act(async () => {
      await waitFor(() => {
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
