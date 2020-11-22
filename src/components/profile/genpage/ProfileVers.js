let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Block3 from '../Block3';
import Block2 from '../Block2';
import Avatar from '../Avatar';
import FormBlock from './FormBlock';
import jwt from 'jsonwebtoken';
import Router from 'next/router';
import { useRouter } from 'next/router'


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
     phoneNumberValidErr: false ,
     emailValidErr: false ,
     updateData: false,
   }

    
    this.clickForRedactProfile = this.clickForRedactProfile.bind(this);
    this.checkFieldValidation = this.checkFieldValidation.bind(this);
    this.changeRegim = this.changeRegim.bind(this);
    this.funcOnChange = this.funcOnChange.bind(this);
    this.currentValue = this.currentValue.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.funcSendInfo = this.funcSendInfo.bind(this);
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

 async currentValue(){
   await this.setState({
      name: this.state.nameTemp,
      email: this.state.emailTemp,
      phoneNumber: this.state.phoneNumberTemp,
      updateData: true
    })
    
      console.log('current')
    await this.updateInfo();
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


  async updateInfo(){
     console.log('hello')

      let data = await JSON.parse( sessionStorage.getItem('login') ); 
      let verifyToken; 
         await jwt.verify(data.token, process.env.NEXT_PUBLIC_SECRET_KEY, function(err, decoded) {
           if(!err && decoded){
              //this.funcSendInfo(data.id);
              verifyToken = true;
              console.log('decoded')
           }else{
             console.log(err)
             window.location.href = '/auth/login'

           }
           console.log(err)
      });

   verifyToken ? this.funcSendInfo(data) : console.log('error')

  } 


  
  funcSendInfo(pac){
    console.log(pac)

    let data = {
      id: pac.id,
      name : this.state.name,
      email : this.state.email,
      phoneNumber : this.state.phoneNumber,
    }
    console.log(data)
    
    let token = "Bearer " + pac.token;

    fetch('/api/profileUpdate', {
      method: "POST",
      headers: {
         'Content-Type': 'application/json' ,
        "Authorization": token
      },
      body: JSON.stringify(data)
    })
      .then( response => response.json())
      .then((result) => {
        console.log(result, 'resultOk')
        this.setState({
          login: result.login,
          name: result.name,
          email: result.email,
          phoneNumber: result.phoneNumber
        })
        //console.log(objStore, 'objStore')
      })
      .catch (err => console.log(err))
 
  }


  changeRegim(e){
    e.preventDefault();
    this.setState({regimRedact: !this.state.regimRedact});
  }

  checkFieldValidation(key){
    let nameExp = /^[A-ЯЁA-Z][а-яёa-z]+\s[A-ЯЁA-Z][а-яёa-z]/;
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

    if(this.state.regimRedact){
      idArr.unshift('name');
    }
    console.log(this.state.updateData)

    let data = {
      name: {
        meaning: this.state.name,
        temp: this.state.nameTemp,
        label: "Имя и фамилия",
        isError: this.state.nameValidErr,
        messageErr: 'Вы неверно указали имя',
        className:'nameBlock'
      },
      email: {
        meaning: this.state.email,
        temp: this.state.emailTemp,
        label: "Email",
        isError: this.state.emailValidErr ,
        className: 'infoBlock'
      },
      phoneNumber:{
        meaning: this.state.phoneNumber,
        temp: this.state.phoneNumberTemp,
        label: "Номер телефона",
        isError: this.state.phoneNumberValidErr,
        messageErr: 'Вы неверно указали номер телефона',
        className: 'infoBlock'
      }
      }

    let propsForForm = {data: data,  idArr: idArr, regimRedact: this.state.regimRedact, changeRegim: this.changeRegim, funcOnChange: this.funcOnChange, currentValue: this.currentValue };
    
    return(
    <div>     
      
      <Avatar thisChapter={data.email.meaning}/>
      <Block2 />
      <Block3 fullName={this.state.name} forClick={this.clickForRedactProfile} buttonsName={this.state.regimRedact ? 'Закрыть Х': 'Редактировать'}  />
       <FormBlock  collection={propsForForm} />
    </div>
   )
  }
}




module.exports = ProfileVers;






