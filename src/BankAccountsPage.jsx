import React from 'react';
import BankAccounts from './components/BankAccounts';
import {connect} from 'react-redux';
import { deleteAccount } from './Actions/accountAction';


const BankAccountsPage = ({state, deleteAccount}) => {
  
    return (
        <div>
            <BankAccounts accounts={state.accounts} deleteAccount={deleteAccount}/>
        </div>
    );
}

const mapStateToProps = (state) => { return {state:state} }

const mapDispatchToProps = {deleteAccount}

export default connect(mapStateToProps,mapDispatchToProps)(BankAccountsPage);
