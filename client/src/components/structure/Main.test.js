import React from 'react';
import { Main } from './Main';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Main />', () => {
  it('should render <Main />', () => {
    const result = shallow(<Main />);
    const instance = result.props();

    expect(instance.className).toEqual('wrapper');
  });
});
