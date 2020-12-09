import React from 'react'
import { render } from '@testing-library/react'
import Nav from './Nav'
import { MemoryRouter } from 'react-router-dom'
import { UserProvider } from './testUtils'

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
                <Nav />
            </UserProvider>
        </MemoryRouter>
    )
});

it("matches snapshot when user logged in", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <Nav />
            </UserProvider>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when user logged out", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currUser={null}>
                <Nav />
            </UserProvider>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
});