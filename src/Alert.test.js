import React from 'react'
import { render } from '@testing-library/react'
import Alert from './Alert'

it("renders without crashing", function(){
    render(<Alert />);
});

it("matches the snapshot for danger", function() {
    let messages = ["Invalid entry", "Database erased"];
    const { asFragment } = render(<Alert type="danger" messages={messages} />)
    expect(asFragment()).toMatchSnapshot();
});

it("matches the snapshot for success", function() {
    let messages = ["Login Successful"]
    const { asFragment } = render(<Alert type="success" messages={messages}/>)
    expect(asFragment()).toMatchSnapshot();
})