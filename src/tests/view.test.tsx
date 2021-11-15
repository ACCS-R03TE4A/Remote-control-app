import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter, Router } from 'react-router-dom'
import App from '../App';

let container:HTMLDivElement = document.createElement("div");
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = document.createElement("div");
});

it('landing on a bad page', () => {
  render(
    <MemoryRouter initialEntries={["/Settings"]}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getAllByTestId("postNumberField")).not.toBeUndefined();
})