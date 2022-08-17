import React from 'react';
import Map from './components/Map';
import { shallow } from 'enzyme';

describe("rendering components", () => {
    it("renders Map container", () => {
        const wrapper = shallow(<Map />, { disableLifecycleMethods: true });
        const mapContainer = (<div className="map-container" />);

        expect(wrapper.contains(mapContainer)).toEqual(true);
    });
    
    it("renders Map button", () => {
      const wrapper = shallow(<Map />, { disableLifecycleMethods: true })
      const button = wrapper.find('#display_button');

      expect(button.text()).toEqual('Display Coordinates');
  });
})

