import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import CardList from './CardList'

it("renders without crashing", function() {
    render(<CardList />);
});

it("matches the snapshot", function() {
    const { asFragment } = render(<CardList items={["testcard1", "testcard2"]}/>)

    expect(asFragment()).toMatchSnapshot();
});