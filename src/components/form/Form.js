import React from 'react';
import './Form.css'

class Form extends React.Component
{
    state =
    {
        lastName:"",
        firstName:"",
        email:""
    }

    update = (event)=>
    {
        this.setState({[event.target.name]:event.target.value});
    }

    render(){
        const{firstName,lastName,email}=this.state;
        return(
            <div>
                <form>
                    <h3>Форма регистрации</h3>
                    <div><input value={firstName} name="firstName" placeholder='Имя'     onChange={this.update}/></div>
                    <div><input value={lastName}  name="lastName"  placeholder='Фамилия' onChange={this.update}/></div>
                    <div><input value={email}     name="email"     placeholder='E-mail'  onChange={this.update}/></div>
                    <hr/>
                    <div>{firstName} </div>
                    <div>{lastName} </div>
                    <div>{email} </div>
                </form>
            </div>
        )
    }
}
export default Form;