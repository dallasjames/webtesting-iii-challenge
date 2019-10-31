import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

test('buttons are there', () => {
    const wrapper = rtl.render(<Controls />)

    const lockButton = wrapper.getByText(/lock gate/i)
    const closeButton = wrapper.getByText(/close gate/i)

    expect(lockButton).toBeVisible()
    expect(closeButton).toBeVisible()
})

describe('buttons change onClick', () => {
    let closed, locked, toggleLocked, toggleClosed, rendered;
    beforeEach(() => {
      closed = true;
      locked = false;
      toggleLocked = jest.fn(() => (locked = !locked));
      toggleClosed = jest.fn(() => (closed = !closed));

      rendered = rtl.render(
        <Controls
          locked={locked}
          closed={closed}
          toggleClosed={toggleClosed}
          toggleLocked={toggleLocked}
        />
      );
    });
    
    test("should toggle 'locked' state", () => {
        const { getByText } = rendered;
        const button = getByText(/lock gate/i);
        rtl.fireEvent.click(button);
        expect(locked).toEqual(true);
      });

    test("should toggle the 'closed' state", () => {
        const { getByText } = rendered;
        const button = getByText(/Open Gate/i);
        rtl.fireEvent.click(button);
        expect(closed).toEqual(false);
      });
})

describe("Blocked functionality", () => {
    test("should not toggle the 'locked' state when gate is open", () => {
      let closed = false;
      let locked = false;
      let toggleLocked = jest.fn(() => (locked = !locked));
      let toggleClosed = jest.fn(() => (closed = !closed));

      const { getByText } = rtl.render(
        <Controls
          locked={locked}
          closed={closed}
          toggleClosed={toggleClosed}
          toggleLocked={toggleLocked}
        />
      );
      const lockButton = getByText(/Lock Gate/i);

      rtl.fireEvent.click(lockButton);
      expect(locked).toEqual(false);
    });

    test("should not open the gate when locked", () => {
      let closed = true;
      let locked = true;
      let toggleLocked = jest.fn(() => (locked = !locked));
      let toggleClosed = jest.fn(() => (closed = !closed));

      const { getByText } = rtl.render(
        <Controls
          locked={locked}
          closed={closed}
          toggleClosed={toggleClosed}
          toggleLocked={toggleLocked}
        />
      );
      const closeButton = getByText(/Open Gate/i);

      rtl.fireEvent.click(closeButton);
      expect(closed).toEqual(true);
    });
});