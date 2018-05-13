import React from 'react'
import {expect} from 'code'
import {shallow} from 'enzyme'
import ToDoForm from '../../../views/todoform'
import sinon from 'sinon'

describe('Given ToDoForm', () => {
    let component
 

    beforeEach( () => {
        component = shallow(<ToDoForm/>)
    })

    it('should exist with a specifying class', () => {
        expect(component.is('.todoform')).to.be.true()
    })

    it('should exist with a form', () => {
        expect(component.find('form').length).to.equal(1);
    })

    describe('when form is rendered', () => {

        it('should contain input element', () => {
            expect(component.find('input').length).to.be.equal(1)
        })
    
        it('should contain button element', () => {
            expect(component.find('button').length).to.be.equal(1)
        })

        describe('when input element has text', () => {

            beforeEach (() => {
                component.find('input').simulate('change', {target:{value:'any text'}})
            })
    
            it('should update `inputText` in state ', () => {
                
                expect(component.state().inputText).to.equal("any text")
            })

            describe('and form is submitted button click or enter on input field', () => {
                let component, handleSubmitStub, sandbox, input
                beforeEach(() => {
                    sandbox = sinon.createSandbox()
                    handleSubmitStub = sandbox.stub()
                    component = shallow(<ToDoForm handleSubmit={handleSubmitStub}/>)
                    component.find('form').simulate('submit', {preventDefault:() => {}})
                    input = component.find('input')
                })
            
                afterEach(() => {
                    sandbox.restore()
                })

                   
                it('should call function to handle submit', () => {
                    
                    sinon.assert.calledOnce(component.instance().props.handleSubmit)
    
                })

                it('should call function to handle submit', () => {
                    let mockText = "Hello"
                    input.simulate('change', {target:{value:mockText}})  
                    expect(component.state().inputText).to.equal(mockText)
                   // sinon.assert.calledOnce(component.instance().props.handleSubmit)
    
                })
            })
       
        })
    })

})