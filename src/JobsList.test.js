import React from 'react'
import { render } from '@testing-library/react'
import JobsList from './JobsList'
import { UserProvider } from './testUtils'
import { MemoryRouter } from 'react-router-dom'

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
                <JobsList />
            </UserProvider>
        </MemoryRouter>
    )
});

it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
        <UserProvider>
            <JobsList />
        </UserProvider>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})