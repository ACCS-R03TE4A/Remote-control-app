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

it('設定画面にappbarが表示される。', () => {
  render(
    <MemoryRouter initialEntries={["/Settings"]}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByTestId("appbar")).toBeDefined();
})

it('設定画面のappbarのタイトルが設定である。', () => {
  render(
    <MemoryRouter initialEntries={["/Settings"]}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByTestId("appbartitle")).toHaveTextContent("設定");
})

it('設定画面のappbarの左側に戻るボタンがある。', () => {
  render(
    <MemoryRouter initialEntries={["/Settings"]}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByTestId("setting_backbutton")).toBeDefined();
})

it('設定画面の郵便番号入力欄が表示される。', () => {
  render(
    <MemoryRouter initialEntries={["/Settings"]}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByTestId("postNumberField")).toBeDefined();
  expect(screen.getByPlaceholderText("郵便番号")).toBeDefined();
})