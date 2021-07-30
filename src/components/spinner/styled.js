import styled from 'styled-components'
import ReactSpinner from 'react-bootstrap-spinner'


const SpinnerWrap = styled.div`
  position: ${props => props.btnSpinner ? 'relative': 'absolute'};
  left:  ${props => props.btnSpinner ? 'unset': '50%'};
  top:  ${props => props.btnSpinner ? 'unset': '60px'};
  margin-right: 0px!important;
`

export  {
  SpinnerWrap
}