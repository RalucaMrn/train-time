import React from 'react';
import { Button } from '@material-ui/core'
import pdfIcon from './../assets/png/file-pdf-box.png'
import docIcon from './../assets/png/file-pdf-box.png'

const createDocuments = (documents) => {
  const documentArray = []
  documents.forEach((documentObject, i) => {
    let imgElement = ''
    if (documentObject.type === 'pdf') {
      imgElement = <img src={pdfIcon} alt=""/>
    } else if (documentObject.type === 'doc') {
      imgElement = <img src={docIcon} alt=""/>
    }

    documentArray.push(
    <Button className="add-document-button" key={i} variant="outlined" href={documentObject.url}>
      <div className="add-document-holder">{imgElement}</div>
      {documentObject.name}    
    </Button>)
  })

  return documentArray
}

export default function AdditionalDocuments(props) {
    return(
      <div className="add-doc">
        <h2>Additional information</h2>
        <div> 
          {createDocuments(props.documents)}
        </div>
      </div>
    )
  }