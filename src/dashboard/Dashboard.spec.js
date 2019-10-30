import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

test('Dashboard shows controls and display', () => {
    const wrapper = rtl.render(<Dashboard />)
    
    const element = wrapper.getByText(/unlocked/i)

    const element2 = wrapper.getByText(/open/i)

    expect(element).toBeVisible()
    expect(element2).toBeVisible()
});