import React, { Component } from 'react'
import { connect } from 'react-redux'
import FileDialog from '../components/fileDialog'

const mapStateToProps = (state) => {
    return {}
}

const FileDialogContainer = connect(mapStateToProps)(FileDialog)

export default FileDialogContainer