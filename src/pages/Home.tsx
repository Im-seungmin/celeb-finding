import { FORM_DATA } from '../assets/data'
import { Button, Form, Input, ItemDiv, Select, TextDiv } from '../Components/Form'
import { Content, Title, TopArea, Wrap } from '../Components/Wrap'

type FormItem = (typeof FORM_DATA)[number]

const FormField = ({ item }: { item: FormItem }) => {
  const { name, type } = item

  return (
    <ItemDiv>
      <TextDiv>{name}</TextDiv>
      {type === 'select' ? (
        <Select>
          {item.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : (
        <Input type={type} placeholder={item.placeholder} min={type === 'number' ? 0 : undefined} />
      )}
    </ItemDiv>
  )
}

const Home = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // todo: 입력값 수집 후 /result 이동
  }

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

        <Form onSubmit={handleSubmit}>
          {FORM_DATA.map((item) => (
            <FormField key={item.name} item={item} />
          ))}
          <Button type="submit">찾기</Button>
        </Form>
      </TopArea>
    </Wrap>
  )
}

export default Home
