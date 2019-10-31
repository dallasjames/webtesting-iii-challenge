import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup)

test('Displays gate open unlocked', () => {
    const wrapper = rtl.render(<Display closed={false} locked={false}/>)

    const open = wrapper.getByText(/open/i)
    const unlocked = wrapper.getByText(/unlocked/i)
    
    expect(unlocked).toBeVisible()
    expect(open.classList.contains(`green-led`))
    expect(open).toBeVisible()
    expect(unlocked.classList.contains(`green-led`))
})

test('Displays gate closed locked', () => {
    const wrapper = rtl.render(<Display closed={true} locked={true}/>)
    
    const closed = wrapper.getByText(/closed/i)
    const locked = wrapper.getByText(/locked/i)

    expect(closed).toBeVisible()
    expect(closed.classList.contains(`red-led`))
    expect(locked).toBeVisible()
    expect(locked.classList.contains(`red-led`))
})
