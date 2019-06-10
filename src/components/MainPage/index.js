import React, {Component} from 'react'
import EnterName from '../EnterName'
import CurrenciesPage from '../CurrenciesPage'

class MainPage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        }
    }

    componentDidMount() {
        this.getUserNameFromLocalStorage();
    }

    render() {
        const block = this.state.userName ? <CurrenciesPage name={this.state.userName} /> : <EnterName onEnter={this.handleEnterName} />;

        return (
            <div className='container'>
                {block}
            </div>
        )
    }

    getUserNameFromLocalStorage = () => {
        const userName = localStorage.getItem('bitCoinUserName');

        this.setState(() => ({
            userName: userName || ''
        }))
    };

    handleEnterName = (value) => {
        localStorage.setItem('bitCoinUserName', value);

        this.setState({
            userName: value
        })
    }
}

export default MainPage
