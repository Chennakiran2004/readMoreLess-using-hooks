import {useState} from 'react'

import {
  AppContainer,
  HeadingContainer,
  Heading,
  Text,
  Image,
  PageDescription,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMoreActive, setIsReadMoreActive] = useState(false)

  const buttonText = isReadMoreActive ? 'Read Less' : 'Read More'

  const pageDescription = isReadMoreActive
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const onClickButton = () => {
    setIsReadMoreActive(prevState => !prevState)
  }

  return (
    <AppContainer>
      <HeadingContainer>
        <Heading>React Hooks</Heading>
        <Text>Hooks are a new addition to React</Text>
      </HeadingContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <PageDescription>{pageDescription}</PageDescription>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}

export default ReadMore
