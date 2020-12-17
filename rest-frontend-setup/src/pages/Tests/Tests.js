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
                tests : [{itemId : "DIANM11", itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},
                {itemId : "DIANM12",itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},
                {itemId : "DIANM13",itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},
                {itemId : "DIANM14" ,itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"}]
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
                    return <Item key={test.itemId}
                     cartHandler = {this.props.cartHandler} 
                     test={test}
                     />
                })}
            </div>
        </div>
    }
}

export default Tests