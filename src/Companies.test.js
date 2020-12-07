import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import Companies from './Companies'

//server must be running to make correct calls

//mock inner components
jest.mock('./Search', () => () => 'Search')
jest.mock('./CardList', () => () => 'CardList')
jest.mock('./PageButtons', () => () => 'PageButtons')

it("renders without crashing", function () {
    render(<MemoryRouter>
        <Companies />
    </MemoryRouter>)
});

it("matches the snapshot", function () {
    const { asFragment } = render(<MemoryRouter>
        <Companies />
    </MemoryRouter>)

    expect(asFragment).toMatchSnapshot();
});