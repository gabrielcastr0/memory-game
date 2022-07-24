import * as Styled from './styled'

type Props = {
  label: string;
  value: string;
}

const InfoLabel = ({label, value}: Props) => {
  return(
    <Styled.WrapperText>
      <Styled.Label>{label}:</Styled.Label>
      <Styled.Value>{value}</Styled.Value>
    </Styled.WrapperText>
  )
}

export default InfoLabel;