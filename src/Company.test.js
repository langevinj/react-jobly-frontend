import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import Company from './Company'
import { joseToDer } from 'ecdsa-sig-formatter';

const toggleJob = () => {return ""}

// const handleParams = jest.spyOn('react-router-dom', "useParams");
// handleParams.mockImplementation(() => {handle: 'jackson-sons'})

it("renders without crashing", function () {
    render(<MemoryRouter initialEntries={['companies/jackson-sons']}>
        <Company toggleJob={toggleJob} />
    </MemoryRouter>)
});

it("matches the snapshot", function () {
    const { asFragment } = render(<MemoryRouter initialEntries={['companies/jackson-sons']}>
        <Company toggleJob={toggleJob} />
    </MemoryRouter>)

    expect(asFragment).toMatchSnapshot();
})