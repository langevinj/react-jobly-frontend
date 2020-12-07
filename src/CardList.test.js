import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { jobPages } from './_testCommon'
import CardList from './CardList'

//mock components and functions
jest.mock('./Card', () => () => 'Card');
const toggleJob = () => { return ""}

it("renders without crashing", function() {
    render(<MemoryRouter>
        <CardList title='jobs' items={jobPages} toggleJob={toggleJob} pageNum={0} />
    </MemoryRouter>)
});

it("matches the snapshot", function (){
    const { asFragment } = render(<MemoryRouter>
        <CardList title='jobs' items={jobPages} toggleJob={toggleJob} pageNum={0} />
    </MemoryRouter>)

    expect(asFragment).toMatchSnapshot();
})