import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  FormAndMemeContainer,
  Heading,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
  TextContent,
  MemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    fontSizeOptionalId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontText = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSizeOptionalId: fontSizeInput,
    })
  }

  renderGeneratorMemeForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="image-url">Image URL</CustomLabel>
        <CustomInput
          id="image-url"
          type="text"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="top-text">Top Text</CustomLabel>
        <CustomInput
          id="top-text"
          type="text"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="bottom-text">Bottom Text</CustomLabel>
        <CustomInput
          id="bottom-text"
          type="text"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="font-text">Font Size</CustomLabel>
        <CustomSelect
          id="font-text"
          value={fontSizeInput}
          onChange={this.onChangeFontText}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="Submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      fontSizeOptionalId,
    } = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent fontSizeOptionalId={fontSizeOptionalId}>
          {topText}
        </TextContent>
        <TextContent fontSizeOptionalId={fontSizeOptionalId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderGeneratorMemeForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
