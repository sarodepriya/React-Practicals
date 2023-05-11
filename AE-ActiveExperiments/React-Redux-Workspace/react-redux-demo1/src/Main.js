import React from 'react'
import { connect } from 'react-redux'
import mobileAction from './redux/mobileAction'

const Main = (props) => {
  return (
    <div className='alert alert-danger'>
        Quantity ={props.quan} <hr/>
        <button className='btn btn-primary' onClick={props.buyMobile2} > Buy Mobile</button>
    </div>
  )
}

//this is map state of application(redux) to the props of the application
const mapStateToProps = (state) => ({
    quan : state.quantity
})

const mapDispatchToProps = (dispatch) => {
    return{
        buyMobile2  : () => dispatch(mobileAction())
    }
}

//connect is a function which is going to connect redux store to react components
export default connect(mapStateToProps, mapDispatchToProps)(Main)