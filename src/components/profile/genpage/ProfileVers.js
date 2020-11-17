let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Block3 from '../Block3';
import Block2 from '../Block2';
import Avatar from '../Avatar';
import FormBlock from './FormBlock';


class ProfileVers extends React.Component{


 constructor(props){
   super(props);
   this.state = {
     login: '',
     name: '',
     email: '',
     phoneNumber:'',
     nameTemp:'',
     emailTemp: '',
     phoneNumberTemp: '',
     regimRedact: false,
     nameValidErr:false, 
     phoneNumberValidErr: false 
   }

    
    this.clickForRedactProfile = this.clickForRedactProfile.bind(this);
    this.checkFieldValidation = this.checkFieldValidation.bind(this);
    this.changeRegim = this.changeRegim.bind(this);
    this.funcOnChange = this.funcOnChange.bind(this);
    this.currentValue = this.currentValue.bind(this);
  }

  componentDidMount(){
    if(this.props.params != null){
      this.setState({
        login: this.props.params.login,
        name: this.props.params.name,
        email: this.props.params.email,
        phoneNumber: this.props.params.phoneNumber,
      })
    }
  }

  currentValue(){
    this.setState({
      name: this.state.nameTemp,
      email: this.state.emailTemp,
      phoneNumber: this.state.phoneNumberTemp
    })
    
  }
  
  funcOnChange(e){
    e.preventDefault();
    let key = e.target.id + 'Temp';
    
    let value = e.target.value;
    this.checkFieldValidation(e.target.id);
    this.setState((state) => {
      return {[key] : value}
    })
  }

  clickForRedactProfile(e){
    
    e.preventDefault();
    this.setState({regimRedact: !this.state.regimRedact});
    this.setState(state => {
      if(state.buttonsName == 'Редактировать'){
        return{ buttonsName:'Закрыть Х'}
      }else{
        return{ buttonsName:'Редактировать'}
      }
    });
  }
 

  clearFocus(e){
    e.preventDefault();
    e.target.value = '';
  }

 


  changeRegim(e){
    e.preventDefault();
    this.setState({regimRedact: !this.state.regimRedact});
  }

  checkFieldValidation(key){
    let nameExp = /^[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+$/;
    let phoneExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let emailExp = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

   let checkKey = key+'Temp';
    let str = this.state[checkKey];
    let validErr = key + 'ValidErr';

    if(!nameExp.test(str) && !phoneExp.test(str) && !emailExp.test(str)){
      this.setState({[validErr]: true});
    }else{
      this.setState({[validErr]: false});
    }
  }
  
  render(){
    let idArr = ['email', 'phoneNumber'];
    console.log(this.props, 'props')
    console.log(this.state, 'state')

    if(this.state.regimRedact){
      idArr.unshift('name');
    }

    let data = {
      name: {
        meaning: this.state.name,
        temp: this.state.nameTemp,
        label: "Имя и фамилия",
        isError: this.state.nameValidErr,
        messageErr: 'Вы неверно указали имя'
      },
      email: {
        meaning: this.state.email,
        temp: this.state.emailTemp,
        label: "Email",
        isError: false
      },
      phoneNumber:{
        meaning: this.state.phoneNumber,
        temp: this.state.phoneNumberTemp,
        label: "Номер телефона",
        isError: this.state.phoneNumberValidErr,
        messageErr: 'Вы неверно указали номер телефона'
      }
      }

    let propsForForm = {data: data,  idArr: idArr, regimRedact: this.state.regimRedact, changeRegim: this.changeRegim, funcOnChange: this.funcOnChange, currentValue: this.currentValue, funcSendInfo: this.funcSendInfo};
    
    return(
    <div>     
      
      <Avatar thisChapter= {data.email.meaning}/>
      <Block2 />
      <Block3 fullName={this.state.name} forClick={this.clickForRedactProfile} buttonsName={this.state.regimRedact ? 'Закрыть Х': 'Редактировать'}  />
       <FormBlock  collection={propsForForm} />
    </div>
   )
  }
}




module.exports = ProfileVers;






