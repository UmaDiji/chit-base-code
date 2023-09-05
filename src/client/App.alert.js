import React from 'react';
import  AlertSnackBar  from './components/snackbar';
import { SnackBarContext } from './context/SnackbarContext'

class AppAlert extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
            type: '',
            msg: '',
            vertical: 'top',
            horizontal: 'center',   
            className:null        
        }
    }

    close = () =>{
        this.setState({
            open: false,
            type: '',
            msg: '',
            vertical: 'top',
            horizontal: 'center',
            className:null
        })
    }

    set=(props)=>{
        this.setState({...props})
    }
    
    render(){
    return (
        <SnackBarContext.Provider 
        value={{...this.state, onclose: this.close, setSnack:this.set }} >        
            {this.state.open ? <AlertSnackBar {...this.state} onclose={this.close} />: ''}
            {this.props.children}        
        </SnackBarContext.Provider>
    )
    }
}

export default AppAlert;