import React, { Component } from 'react';

import {TopPanel, AuthContainer, InfoContainer, TextContainer, LogoContainer, Logo}
    from '../styled-components/commonComponents';
import {ReportApp, DiskListContainer, DiskButton,
    ReportContainer, ReportColumnHeader, ReportBox, Vtable, Vtd, Vth} from
        '../styled-components/commonComponents';
// import {report} from "../result/result";

import {VulnerabilityReport} from "./VulnerabilityReport";

export class ReportPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            disk: null
        }

        this.onUpdate = this.onUpdate.bind(this);
        this.createButtons = this.createButtons.bind(this);
    }

    onUpdate(event){
        this.setState({
            disk: event.target.name
        });
    }


    createButtons(){
        let buttons = [];

        var report = this.props.images;

        for(var i=0; i< report.length; i++){

            buttons.push(
                        <tr key={"row"+i}>

                            <Vtd key={"td1"+i}>
                                <DiskButton name={report[i][1]} onClick={(e) => this.onUpdate(e)} key={"button"+i}>
                                    Scan Now
                                </DiskButton>
                            </Vtd>

                            <Vtd key={"td2"+i}>{report[i][1]}</Vtd>

                            <Vtd key={"td3"+i}>{report[i][2]}</Vtd>
                            <Vtd key={"td4"+i}>{report[i][3]}</Vtd>
                        </tr>
            );
        }

        return buttons;
    }

    render() {
        return (
            <div style={{minHeight: "100%"}}>
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

                    </AuthContainer>
                </TopPanel>

                <ReportApp>
                    {this.state.disk === null &&
                    <DiskListContainer>
                        <ReportColumnHeader>
                            Please select disk you want to scan
                            <Vtable>
                                <tbody>
                                <tr>
                                    <Vth> </Vth>
                                    <Vth>Disk Name</Vth>
                                    <Vth>Project</Vth>
                                    <Vth>Ceph Image Name</Vth>
                                </tr>
                                {this.createButtons()}
                                </tbody>
                            </Vtable>
                        </ReportColumnHeader>


                    </DiskListContainer>
                    }

                    {this.state.disk !== null &&
                    <ReportContainer>
                        <ReportBox>
                            <ReportColumnHeader>
                            </ReportColumnHeader>

                            <VulnerabilityReport diskName={this.state.disk}/>
                        </ReportBox>
                    </ReportContainer>
                    }
                </ReportApp>
            </div>
        );
    }
}