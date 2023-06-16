import React from 'react';
import { render } from '@testing-library/react';
import Home from './components/Home';

test('renders Home component correctly', () => {
  const { container } = render(<Home />);
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="home"
  >
    <h1
      class="heading"
    >
      Welcome to the our page
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus nunc sed elit convallis, sed tincidunt dui ultricies. Donec ultrices dolor eu ipsum elementum, vitae finibus nulla volutpat. Morbi dignissim vulputate lectus, vel tempor mi. Vivamus semper felis vitae mi egestas, eu semper mi euismod. Nulla vestibulum convallis lacinia. In ullamcorper, metus vel fermentum mattis, metus est auctor arcu, sit amet volutpat neque est a nisi. Pellentesque efficitur urna et elit facilisis consequat. Suspendisse potenti.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus nunc sed elit convallis, sed tincidunt dui ultricies. Donec ultrices dolor eu ipsum elementum, vitae finibus nulla volutpat. Morbi dignissim vulputate lectus, vel tempor mi. Vivamus semper felis vitae mi egestas, eu semper mi euismod. Nulla vestibulum convallis lacinia. In ullamcorper, metus vel fermentum mattis, metus est auctor arcu, sit amet volutpat neque est a nisi . Pellentesque efficitur urna et elit facilisis consequat. Suspendisse potenti.
    </p>
  </div>
</div>
`);
});
