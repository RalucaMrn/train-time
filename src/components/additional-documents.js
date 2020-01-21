import React from 'react';
import { Button } from '@material-ui/core'
import pdfIcon from './../assets/png/file-pdf-box.png'
import docIcon from './../assets/png/file-pdf-box.png'

const createDocuments = (documents) => {
  const documentArray = []
  documents.forEach((documentObject, i) => {
    let imgElement = ''
    if (documentObject.type === 'pdf') {
      imgElement = <img src={pdfIcon} />
    } else if (documentObject.type === 'doc') {
      imgElement = <img src={docIcon} />
    }

    documentArray.push(<Button key={i} variant="outlined" href={documentObject.url} style={{ fontSize: "16px",
      lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", border: "1px solid rgba(112, 112, 112, 0.28)", paddingTop:"15px", paddingBottom:"15px", paddingLeft:"20px", marginRight: "18px", textTransform: "capitalize"}}>
        
        <div style={{marginRight: "8px"}}>{imgElement}</div>
        
        {documentObject.name}
        
        </Button>)
  })

  return documentArray
}

export default function AdditionalDocuments(props) {
    return(
      <div>
        <h2 style={{ fontSize: "34px", lineHeight: "40px", color: "rgba(42, 38, 38, 0.87)"}}>Additional information</h2>
        <div style={{ height: "100px" }}> 
          {createDocuments(props.documents)}
        </div>
      </div>
    )
  }