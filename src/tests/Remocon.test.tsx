import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
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

it('リモコン画面にappbarが表示される。', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByTestId("appbar")).toBeDefined();
})

it('リモコン画面のappbarのタイトルがリモコンである。', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByTestId("appbartitle")).toHaveTextContent("リモコン");
})

it('リモコン画面のappbarの右側に設定ボタンがある。', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByTestId("setting_button")).toBeDefined();
})

it('リモコン画面にすべての温度感覚ボタンが表示される。', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  )
  let tempSense = ["暑い","少し暑い","ちょうどいい","少し寒い","寒い"];
  expect(screen.getAllByText(tempSense[0])).toBeDefined();
})