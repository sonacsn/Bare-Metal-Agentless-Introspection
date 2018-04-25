import React, { Component } from 'react';
// import $ from 'jquery';
import {LoginPage} from "./components/LoginPage";
import {ReportPage} from "./components/ReportPage";
import {AppPage} from "./styled-components/commonComponents";
import axios from 'axios';
import qs from 'qs';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: false,
            result: null
        }

        this.updateLoggedIn = this.updateLoggedIn.bind(this);

    }

    updateLoggedIn(){
        this.setState({
            isLoggedIn: true
        });
    }


    componentDidMount () {

        // let d = {'project' : 'bmi-introspect', 'node' : 'dell-15'};
        let d = {'project' : 'bmi-introspect'};
        axios({

            url: 'http://10.20.30.1:1513/list_db_images/',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            },

            auth: {
                username: 'admin',
                password: 'bashrcpotatoes'
            },
            data: qs.stringify(d)
        }).then(result => {

            this.setState({result: result.data});
        }).catch(error => {
            console.log("error", error);
        });

    }


  render() {
    return (
        <AppPage login={!this.state.isLoggedIn}>
            {
                this.state.result == null &&
                <div style={{textAlign: "center"}}>
                Fetching Results

                </div>

            }
            {
                !this.state.isLoggedIn &&
                    <LoginPage update={this.updateLoggedIn}/>
            }
            {
                this.state.isLoggedIn && this.state.result != null &&
                <ReportPage images={this.state.result}/>
            }
        </AppPage>
    );
  }
}

export default App;
