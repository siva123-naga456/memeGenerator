// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
min-width100vh
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-left: 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 24px;
  font-family: 'Open Sans';
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSizeOptionalId};
  font-family: 'Open Sans';
  font-weight: 600;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const CustomLabel = styled.label`
  color: #5a7184;
  font-size: 12px;
  font-family: 'Open Sans';
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  height: 40px;
  font-size: 12px;
  font-family: 'Open Sans';
  border: 1px solid #d7dfe9;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
  font-weight: 500;
`

export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  height: 40px;
  font-size: 12px;
  font-family: 'Open Sans';
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
`
export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-size: 14px;
  font-family: 'Open Sans';
  border-radius: 5px;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 15px;
  min-width: 25px;
  max-width: 250px;
  cursor: pointer;
  outline: none;
  font-weight: 500;
`
