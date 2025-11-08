import { Form, Input, ItemDiv, TextDiv } from '../Components/Form'

const Home = () => {
  return (
    <div>
      Home Page
      <Form>
        <ItemDiv>
          <TextDiv>이름</TextDiv>
          <Input type="text" />
        </ItemDiv>
      </Form>
    </div>
  )
}

export default Home
