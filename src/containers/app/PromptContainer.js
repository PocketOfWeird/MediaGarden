import React from 'react'
import { connect } from 'react-redux'
import Prompt from '../../components/Prompt'

const mapStateToProps = state => ({
  question: state.prompt.question,
  yesAction: state.prompt.yesAction,
  noAction: state.prompt.noAction
})

const mapDispatchToProps = dispatch => ({
  handleYes: yesAction => e => dispatch(yesAction()),
  handleNo: noAction => e => dispatch(noAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prompt)
