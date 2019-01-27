import React from 'react'
import {shallow} from 'enzyme'
import assert from 'assert'
import {Home} from './Home'

describe('The Home component', () => {
    it('renders', () => {
        const result = shallow(<Home/>);

        assert.equal(result.find('.Home').length, 1);
    });
});
