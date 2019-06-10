import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import Select from 'react-select'
import {connect} from 'react-redux'
import {loadCurrencies, loadTicket} from '../../AC/index'
import Hello from '../Hello'
import Loading from '../Loading'
import Ticket from '../Ticket'

class CurrenciesPage extends Component{

    static propTypes = {
        name: PropTypes.string.isRequired,
        currencies: PropTypes.array.isRequired,
        ticket: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedCurrency: ''
        }
    }

    componentDidMount() {
        const {loadCurrencies, isLoading, isLoaded} = this.props;
        if (!isLoading && !isLoaded) loadCurrencies()
    }

    render() {

        const {name, currencies, isLoading, ticket, isLoadingTicket} = this.props;

        const options = currencies.map(item => ({
            label: item[1].name,
            value: item[0]
        }));

        const ticketBlock = ticket[this.state.selectedCurrency] ? <Ticket data={ticket[this.state.selectedCurrency]}/> : null;

        return (
            <div className="currencies-page">
                <Hello name={name} />

                <div className="currencies-page__select">
                    {isLoading ? <Loading /> : <Select options={options} onChange={this.handleChange}/>}
                </div>

                <div className="currencies-page__ticket">
                    {isLoadingTicket ? <Loading /> : ticketBlock}
                </div>
            </div>
        )
    }

    handleChange = (ev) => {
        const {loadTicket, ticket} = this.props;

        this.setState(() => ({selectedCurrency: ev.value}))
        if (!ticket[ev.value]) loadTicket(ev.value);
    }
}

export default connect((state) => ({
    currencies: state.currencies.entities.entrySeq().toArray(),
    ticket: state.ticket.get('entities').toObject(),
    isLoading: state.currencies.loading,
    isLoadingTicket: state.ticket.loading,
    isLoaded: state.currencies.loaded,
    isError: state.currencies.error
}), {loadCurrencies, loadTicket})(CurrenciesPage)
