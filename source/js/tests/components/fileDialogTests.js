import { expect } from 'chai'
import { shallow, configure } from 'enzyme';
import React from 'react';
import FileDialog from '../../components/fileDialog';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let wrapper = shallow(<FileDialog />)

describe('FileDialog', () => {
    
    it('will have one <p> tag', () => {
      expect(wrapper.find('p')).to.have.length(1)
    })
    
    it('<p> tag will have correct user instruction message', () => {
         expect(wrapper.find('p').text()).to.equal("Drag a marc file (.mrc, .dat) file here to import it.")
       })
})
