import React from 'react'
import {expect} from 'code'
import {shallow} from 'enzyme'
import ToDoList from '../../../views/todolist'


describe('Given ToDoList', () => {
    let component
 
    beforeEach( () => {
        component = shallow(<ToDoList/>)
    })

    it('should exist with a specifying class', () => {
        expect(component.is('.todolist')).to.be.true()
    })

    it('should contain an unordered list', () => {
    
        expect(component.find('ul').exists()).to.be.true()
    })

    describe('when there are todos in props',() => {
       let mockProps

        beforeEach(() => {
            mockProps = [{completed:false, text: 'Wash the car'}]
            component = shallow (<ToDoList todos={mockProps} />)
        })
        it('should show a TodosListItem', () => {
           
            expect(component.find('TodoListItem').length).to.equal(1)
        })
    })

    describe('when there are no todos in props',() => {
        let mockProps
 
         beforeEach(() => {
             component = shallow (<ToDoList />)
         })
         it('should show a TodosListItem', () => {
            
             expect(component.find('TodoListItem').length).to.equal(0)
         })
     })
    

})