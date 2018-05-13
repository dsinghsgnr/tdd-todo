import React from 'react'
import {expect} from 'code'
import {shallow} from 'enzyme'
import ToDoListItem from '../../../../views/todolist/todolistitem'


describe('Given ToDoListItem', () => {
    let component
 

    beforeEach( () => {
        component = shallow(<ToDoListItem/>)
    })

    it('should exist with a specifying class', () => {
        expect(component.is('.todolistitem')).to.be.true()
    })

    it('should exist with a span', () => {
        expect(component.find('span').length).to.equal(1);
    })

    it('should exist with a button', () => {
        expect(component.find('button').length).to.equal(1);
    })

    

})