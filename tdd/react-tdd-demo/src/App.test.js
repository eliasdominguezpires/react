import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('renders a header with the id "title"', () => {
    expect(wrapper.find('[id="title"]').length).toBe(1);
  });

  it('should toggle the language of the title on click', () => {
    const title = wrapper.find('[id="title"]');
    const englishTitle = 'Hello, Paraguay!'
    const spanishTitle = '¡Hola, Paraguay!';

    expect(wrapper.state().title).toBe(englishTitle);
    title.simulate('click');
    expect(wrapper.state().title).toBe(spanishTitle);
  });
});
