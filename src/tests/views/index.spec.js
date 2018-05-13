import React from 'react'
import {expect} from 'code'
import {shallow} from 'enzyme'
import App from '../../views'


describe('Given App', () => {
    let component
 
    beforeEach( () => {
        component = shallow(<App/>)
    })

    it('should exist with a specifying class', () => {
        expect(component.is('.app')).to.be.true()
    })

    it('should exist with a ToDoForm', () => {
        expect(component.find('ToDoForm').length).to.equal(1)
    })

    it('should exist with a ToDoList', () => {
        expect(component.find('ToDoList').length).to.equal(1)
    })
     

})