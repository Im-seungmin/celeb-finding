import { useState } from 'react'
import { FORM_DATA } from '../assets/data'
import { Button, Form, Input, ItemDiv, Select, TextDiv } from '../Components/Form'
import { CommentArea, Content, Title, TopArea, Wrap } from '../Components/Wrap'
import { Alert, AlertBox, AlertMessage, MiniMessage, TitleMessage } from '../Components/Function'
import type { FormType, ResultType } from '../assets/type'
import { celebritieScore } from '../../api/api'

type FormItem = (typeof FORM_DATA)[number]

const INIT_DATA: FormType = {
  name: '',
  bloodType: 'A',
  birthday: '',
  MBTI: 'INTJ'
}

const FormField = ({
  item,
  value,
  onChange
}: {
  item: FormItem
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}) => {
  const { name, type, placeholder, options } = item

  return (
    <ItemDiv>
      <TextDiv>{name}</TextDiv>
      {type === 'select' ? (
        <Select value={value} onChange={onChange}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : (
        <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </ItemDiv>
  )
}

const Home = () => {
  const [data, setData] = useState<FormType>(INIT_DATA)
  const [alertType, setAlertType] = useState<null | 'warning' | 'result'>(null)
  const [result, setResult] = useState<ResultType>(null)

  const handleChange =
    (key: keyof FormType) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setData((prev) => ({
        ...prev,
        [key]: e.target.value
      }))
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, birthday, bloodType } = data

    if (!name || !birthday || !bloodType) {
      setAlertType('warning')
      return
    }

    const response = celebritieScore(data)
    setResult(response)
    setAlertType('result')
  }

  const closeAlert = () => {
    setAlertType(null)
  }

  const sameLen = result?.sameDataArr?.length ?? 0

  return (
    <Wrap>
      {/* 알럿 */}
      <Alert display={alertType !== null}>
        <AlertBox
          WIDTH={alertType === 'warning' ? '300px' : '400px'}
          HEIGHT="200px"
        >
          {alertType === 'warning' ? (
            <>
              <AlertMessage>모든 정보를 입력해주세요!</AlertMessage>
              <Button type="button" onClick={closeAlert}>
                닫기
              </Button>
            </>
          ) : (
            <>
              <AlertMessage column={true}>
                <TitleMessage>결과</TitleMessage>
                <div>
                  {data.name}님은 {result?.best.name}님과 제일 비슷합니다!!
                </div>
                <div>
                  {result?.sameDataArr && result.sameDataArr.length > 0
                    ? `${result.sameDataArr.join('(이)랑 ')}이 똑같으십니다 🥰`
                    : '같은 점이 없는 거 같네요 ... 😱'}
                </div>
                <MiniMessage>
                  {sameLen === 1
                    ? '닮은 점이 조금이라도 있을겁니다'
                    : sameLen === 2
                      ? '이 정도면 친구라고 볼 수 있겠죠?'
                      : sameLen === 3
                        ? '사실 둘이 형제가 아닌가요?!'
                        : sameLen === 4
                          ? '과거에 연인이었나봐요~!'
                          : sameLen === 5
                            ? '그냥 본인이라고 하고 다녀도 되겠는데요?!'
                            : ''}
                </MiniMessage>
              </AlertMessage>
              <Button type="button" onClick={closeAlert}>
                닫기
              </Button>
            </>
          )}
        </AlertBox>
      </Alert>

      {/* 상단 영역 */}
      <TopArea>
        <CommentArea>
          <Title>나랑 비슷한 셀럽 찾기</Title>
          <Content>
            이름, 나이, 혈액형, 생일을 입력해주시면
            <br />
            가장 비슷한 셀럽을 찾아드립니다!
          </Content>
        </CommentArea>

        <Form onSubmit={handleSubmit}>
          {FORM_DATA.map((item) => (
            <FormField
              key={item.name}
              item={item}
              value={data[item.dataType as keyof FormType] ?? ''}
              onChange={handleChange(item.dataType as keyof FormType)}
            />
          ))}
          <Button type="submit">찾기</Button>
        </Form>
      </TopArea>
    </Wrap>
  )
}

export default Home
