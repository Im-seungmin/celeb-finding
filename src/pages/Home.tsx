import { Form, Input, ItemDiv, TextDiv } from '../Components/Form'

const CONTENT: Array<string> = ['이름', '나이', 'MBTI', '혈액형', '사는 곳']

const Home = () => {
  return (
    <div>
      <Form>
        {CONTENT.map((text) => (
          <ItemDiv key={text}>
            <TextDiv>{text}</TextDiv>
            <Input type="text" />
          </ItemDiv>
        ))}
      </Form>
    </div>
  )
}

export default Home
