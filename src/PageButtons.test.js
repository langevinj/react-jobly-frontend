import React from 'react'
import { render } from '@testing-library/react'
import PageButtons from './PageButtons'
import { MemoryRouter } from 'react-router-dom'

it("renders without crashing", function() {
    render(<PageButtons />);
});

it("matches the snapshot", function() {
    const { asFragment } = render(<PageButtons />);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when on the last page", function() {
    const { asFragment } = render(<PageButtons numPages={5} pageNum={4}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("matches the snapshot when on the first page", function() {
    const { asFragment } = render(<PageButtons numPages={5} pageNum={0}/>);
    expect(asFragment()).toMatchSnapshot();
});