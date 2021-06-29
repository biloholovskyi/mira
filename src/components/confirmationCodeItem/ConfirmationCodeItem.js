import React, {Component} from "react";

import {CodeItem, Border, CodeBlock} from './styled';

class ConfirmationCodeItem extends Component {

  focusNextField(nextField) {
    this.refs[nextField - 1].value && this.refs[nextField].focus();
    this.props.update(this.refs[nextField - 1].value)
  }

  render() {
    return (
      <CodeBlock>
        <CodeItem ref="1" onChange={() => this.focusNextField('2')} type={'text'} name={'code'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="2" onChange={() => this.focusNextField('3')} type={'text'} name={'code2'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="3" onChange={() => this.focusNextField('4')} type={'text'} name={'code3'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <Border/>
        <CodeItem ref="4" onChange={() => this.focusNextField('5')} type={'text'} name={'code4'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="5" onChange={() => this.focusNextField('6')} type={'text'} name={'code5'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="6" onChange={() => this.focusNextField('6')} type={'text'} name={'code'} maxLength={'1'} required autoComplete={'off'}/>
      </CodeBlock>
    )
  }
}

export default ConfirmationCodeItem;