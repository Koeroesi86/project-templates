import React from 'react'
import {Router} from 'react-router'
import {mount} from 'enzyme'
import assert from 'assert'
import {App} from './App'
import history from "../../configurations/history";

describe('The App component', () => {
    it('renders', () => {
        const result = mount(<Router history={history}><App /></Router>);

        assert.equal(result.find('.App').length, 1);
    });
});
