import React, {Component} from "react";

import {CodeItem, Border, CodeBlock} from './styled';

class ConfirmationCodeItem extends Component {

  focusNextField(nextField, event) {
    this.refs[nextField - 1].value && this.refs[nextField].focus();
    this.props.update(event.target.value);
  }

  render() {
    return (
      <CodeBlock>
        <CodeItem ref="1" onChange={(e) => this.focusNextField('2', e)} type={'text'} name={'code'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="2" onChange={(e) => this.focusNextField('3', e)} type={'text'} name={'code2'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="3" onChange={(e) => this.focusNextField('4', e)} type={'text'} name={'code3'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <Border/>
        <CodeItem ref="4" onChange={(e) => this.focusNextField('5', e)} type={'text'} name={'code4'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="5" onChange={(e) => this.focusNextField('6', e)} type={'text'} name={'code5'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="6"  onChange={(e) => this.focusNextField('7', e)} type={'text'} name={'code6'} maxLength={'1'} required
                  autoComplete={'off'}/>
        <CodeItem ref="7"  type={'hidden'} name={'hidden'}/>
      </CodeBlock>
    )
  }
}

export default ConfirmationCodeItem;