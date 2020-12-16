import React from 'react'
import Item from '../../components/Item/Item'
import './Tests.css'

class Tests extends React.Component {

    constructor(props){
        super(props)
        this.state = { tests : [] }
    }
    
    componentDidMount(){
        this.setState( prevTest => {
            return {
                tests : [{itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},
                {itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},{itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},{itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"}]
            }
        })
    }
    inputChangeHandler = () => {

    }
    render(){
        return <div>
            <section className="test__search" >
                <form >
                    <div className="input">
                        <input  
                            type="text" 
                            onChange={this.inputChangeHandler}
                            placeholder="Seach any test"
                    />
          </div>
                </form>
            </section>
            <div className="grid">
                {this.state.tests.map( test => {
                    return <Item itemName={test.itemName} labName={test.labName} minPrice={test.minPrice}/>
                })}
            </div>
        </div>
    }
}

export default Tests