import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

test('displays', () => {
    const wrapper = rtl.render(<Display />)
    
    const element = wrapper.getByTestId(/lock/i)

    const element2 = wrapper.getByTestId(/close/i)

    expect(element).toBeVisible()
    expect(element2).toBeVisible()
});