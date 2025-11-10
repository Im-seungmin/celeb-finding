import { useEffect, useState } from 'react'
import { FORM_DATA } from '../assets/data'
import { Button, Form, Input, ItemDiv, Select, TextDiv } from '../Components/Form'
import { Content, Title, TopArea, Wrap } from '../Components/Wrap'
import { Alert, AlertBox, AlertMessage } from '../Components/Function'
import type { FormType, ResultType } from '../assets/type'
import {celebritieScore} from '../../api/api'

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
  const [data, setData] = useState(INIT_DATA)
  const [alerts, setAlerts] = useState(false)
  const [result, setResult] = useState<ResultType>(null);
  const [alertType, setAlertType] = useState<null | 'warning' | 'result'>(null)

  const handleChange =
    (key: keyof typeof INIT_DATA) =>
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

    const response = celebritieScore(data);
    setResult(response);
  }

  useEffect(() => {
    if(result === null) {
      // 닫기
    } else {
      console.log(result);
    }
  }, [result]);

  useEffect(() => {
    if(alertType) {
      setAlerts(true);
    } else {
      setAlerts(false);
    }
  }, [alertType])

  return (
    <Wrap>
      <Alert display={alerts}>
        <AlertBox WIDTH={alertType === 'warning' ? '300px' : '500px'} HEIGHT={alertType === 'warning' ? '200px' : '400px'}>
          {
            alertType === 'warning' ? <><AlertMessage>모든 정보를 입력해주세요!</AlertMessage>
          <Button type="button" onClick={() => setAlertType(null)}>
            닫기
          </Button></> : <></>
          }
          
        </AlertBox>
      </Alert>
      <TopArea>
        <div>
          <Title>나랑 닮은 셀럽 찾기</Title>
          <Content>
            이름, 나이, 혈액형, 생일을 입력해주시면
            <br />
            가장 비슷한 셀럽을 찾아드립니다!
          </Content>
        </div>

        <Form onSubmit={handleSubmit}>
          {FORM_DATA.map((item) => (
            <FormField
              key={item.name}
              item={item}
              value={data[item.dataType as keyof typeof INIT_DATA] ?? ''}
              onChange={handleChange(item.dataType as keyof typeof INIT_DATA)}
            />
          ))}
          <Button type="submit">찾기</Button>
        </Form>
      </TopArea>
    </Wrap>
  )
}

export default Home