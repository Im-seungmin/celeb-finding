import { FORM_DATA } from '../assets/data'
import { Button, Form, Input, ItemDiv, Select, TextDiv } from '../Components/Form'
import { Content, Title, TopArea, Wrap } from '../Components/Wrap'

const Home = () => {
  return (
    <Wrap>
      <TopArea>
        <div>
          <Title>나랑 닮은 셀럽 찾기</Title>
          <Content>
            이름, 나이, 혈액형, MBTI, 사는 곳을 입력해주시면
            <br />
            가장 비슷한 셀럽을 찾아드립니다!
          </Content>
        </div>
        <Form>
          {FORM_DATA.map((item) => (
            <ItemDiv key={item.name}>
              <TextDiv>{item.name}</TextDiv>
              {item.type === 'select' ? (
                <Select>
                  {item.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input type={item.type} placeholder={item.placeholder} />
              )}
            </ItemDiv>
          ))}

          {/* {CONTENT.map((text) => (
            <ItemDiv key={text}>
              <TextDiv>{text}</TextDiv>
              <Input type="text" placeholder={`${text}를 입력해주세요.`} />
            </ItemDiv>
          ))} */}
          <Button type="submit">찾기</Button>
        </Form>
      </TopArea>
    </Wrap>
  )
}

export default Home
