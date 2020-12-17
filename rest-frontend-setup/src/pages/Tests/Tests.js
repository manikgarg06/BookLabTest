import React from 'react'
import Item from '../../components/Item/Item'
import './Tests.css'

class Tests extends React.Component {

    constructor(props) {
        super(props)
        this.state = { tests: [] }
        this.searchref = React.createRef();
    }

    componentDidMount() {
        // this.setState( prevTest => {
        //     return {
        //         tests : [{itemId : "DIANM11", itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},
        //         {itemId : "DIANM12",itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},
        //         {itemId : "DIANM13",itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"},
        //         {itemId : "DIANM14" ,itemName : "COVID-19 Test",labName:"Metropolis",minPrice:"4500"}]
        //     }
        // })
        this.fetchTests('');
    }

    fetchTests = (keyword) => {
        fetch('http://localhost:3001/labtests')
            .then(response => response.json())
            .then(data => {
                let testsData = data.tests.map( test => {
                    return {...test.testdata ,rowid : test.rowid}
                } )
                testsData = testsData.filter( data => {
                    return data.Keyword.toUpperCase().includes(keyword.toUpperCase());
                } )
                this.setState({tests : testsData})
            })
            .catch(err => {
                console.log(err)
            })
    }

    searchHandler = (event) => {
        event.preventDefault();
        const keyword = this.searchref.current.value ? this.searchref.current.value : '';
        this.fetchTests(keyword);
    }


    render() {
        return <div>
            <section className="test__search" >
                <form >
                    <div className="input">
                        <input
                            type="text"
                            ref={this.searchref}
                            placeholder="Enter keyword"
                            onChange={(e) => {this.searchHandler(e)}}
                        />
                    </div>
                </form>
            </section>
            <div className="grid">
                {this.state.tests.map(test => {
                    return <Item key={test.rowid}
                        cartHandler={this.props.cartHandler}
                        test={test}
                    />
                })}
            </div>
        </div>
    }
}

export default Tests