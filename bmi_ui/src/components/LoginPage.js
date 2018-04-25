import {DescBox, TopPanel, InputBox, LoginPanel, AppPage,
    AuthContainer, InfoContainer, TextContainer, LogoContainer,
    AuthButton, Logo, SubmitButton, InputContainers, LoginHeader, ErrorMessage}
    from '../styled-components/commonComponents';
import React, { Component } from 'react';
import "../files/logo.jpg";


export class LoginPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            userId: '',
            password: '',
            isLoggedIn: false,
            error: ''
        }

        this.onUpdate = this.onUpdate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onUpdate(event){

        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        });
    }

    credentials = {
        userid: "moc",
        password: "qwerty"
    }

    onSubmit(e){
        let c = this.credentials;
        let new_c = this.state;
        if(c.userid === new_c.userId && c.password === new_c.password){
            this.setState({
                isLoggedIn: true,
                error: ''
            });

            // let resp = this.handleClick();
            this.props.update();
        }
        else{
            this.setState({
                error: "USER ID or PASSWORD incorrect"
            });
        }
    }



    render() {
        return (
            <div style={{height: "100%"}}>
                <TopPanel>
                    <InfoContainer>
                        <LogoContainer>
                            <Logo src={require("../files/logo.jpg")}/>
                        </LogoContainer>
                        <TextContainer>
                            Agentless Bare Metal introspection
                        </TextContainer>
                    </InfoContainer>
                    <AuthContainer>
                        {/*<AuthButton></AuthButton>*/}
                    </AuthContainer>
                </TopPanel>

                <LoginPanel>
                    <LoginHeader>
                        Welcome, Log into Bare Metal Agent-less Introspection
                    </LoginHeader>

                    <InputContainers>
                        {
                            this.state.error !== '' &&
                                <ErrorMessage>
                                    {this.state.error}
                                </ErrorMessage>
                        }
                    </InputContainers>
                    <InputContainers>
                    <InputBox type="text" placeholder="USER ID" name="userId" onChange={(e) => this.onUpdate(e)}/>
                    </InputContainers>

                    <InputContainers>
                    <InputBox type="password" placeholder="PASSWORD" name="password" onChange={(e) => this.onUpdate(e)}/>
                    </InputContainers>

                    <InputContainers>
                        <SubmitButton type="submit" onClick={(e) => this.onSubmit(e)}/>
                    </InputContainers>
                </LoginPanel>
            </div>
        );
    }
}