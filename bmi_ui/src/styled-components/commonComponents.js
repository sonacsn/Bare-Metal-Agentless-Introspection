import styled from 'styled-components';


export const AppPage = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 45px;
    background: ${props => props.login === true ? 'black' : 'white'};
    `;

export const LoginPanel = styled.div`
    width: 70%;
    min-width: 480px;
    margin: 10% auto;
    background: transparent;
    `;

export const LoginHeader = styled.div`
    width: 90%;
    height: 45px;
    margin: 0 auto;
    min-width: 320px;
    color: #707979;
    text-align: center;
    font-size: 27px;`;

export const InputContainers = styled.div`
    width: 90%;
    margin: 30px auto;`;

export const InputBox = styled.input`
    width: 40%;
    height: 45px;
    margin: 0 auto;
    min-width: 320px;
    color: #707979;
    font-size: 18px;
    display: block;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #797979;
    `;

export const SubmitButton = styled.input`
    width: 40%;
    height: 45px;
    min-width: 320px;
    color: black;
    font-size: 18px;
    border-radius: 3px;
    border: 1px solid #797979;
    background: #797979;
    display: block;
    margin: 0 auto;
    `;
export const ErrorMessage = styled.div`
    width: 40%;
    height: 45px;
    min-width: 320px;
    color: red;
    font-size: 12px;
    margin: 0 auto;`;

export const TopPanel = styled.div`
    width: 90%;
    margin: 0 auto;
    background: transparent;
    display: flex;`;

export const LogoContainer = styled.div`
    width: 20%;
    height: 45px;
    float: left;
    background: white;`;

export const TextContainer = styled.div`
    width: 80%;
    height: 45px;
    margin-top: 9px;
    color: #797979
    font-size: 21px;
    font-weight: normal;
    float: right;
    padding-left: 15px;
    text-align: left;`;

export const InfoContainer = styled.div`
    width: 50%;
    height: 45px;
    float: left;
    display: flex;
    `;

export const AuthContainer = styled.div`
    width: 50%;
    float: right;
    height: 45px;
    float: right;
    padding-right: 15px;`;

export const AuthButton = styled.button`
    width: 90px;
    height: 45px;
    font-size: 12px;
    font-weight: normal;
    margin-top: 6px;
    background: transparent;
    border: none
    color: #797979;
    float: right;`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;`;

export const DescBox = styled.div`
    width: 50%;
    margin: 10% auto;
    text-align: left;
    padding: 12px 6px 12px;
    `;
//components for Reports page:

export const ReportApp = styled.div`
    width: 90%;
    margin: 45px auto;
    background: transparent;`;

export const DiskButtonContainer = styled.div`
    width: 90%;
    margin: 12px auto;`;

export const DiskButton = styled.button`
    width: 100%;
    height: 60px;
    background: transparent;
    border: 0;
    color: #797979;
    margin: 12px auto;`;

export const DiskListContainer = styled.div`
    width: 100%;
    padding-left: 25px;`;

export const ReportContainer = styled.div`
    width: 100%;`;

export const ReportBox = styled.div`
    width: 100%;`;

export const ReportColumnHeader = styled.div`
    width: 90%;
    margin: 15px auto;
    text-align: center;`;

// Vulnerability report section

export const Vtable = styled.table`
    border-collapse: collapse;
    width: 70%;
    margin: 0 auto;
    
    & > tbody > tr:nth-child(even){
    background-color: #f2f2f2;
    }
    
    & > tbody > tr:hover {
    background-color: #ddd;
    }
    
    `;

export const Vtd = styled.td`
    border: 1px solid #ddd;
    text-align: center;
    `;
export const Vth = styled.th`
    border: 1px solid #ddd;
    padding: 12px 8px 12px;
    text-align: left;
    background-color: #797979;
    color: white;
    text-align: center;`;

export const ChartBox = styled.div`
    width: 50%;
    height: 90px;
    margin: 5px auto;`;

