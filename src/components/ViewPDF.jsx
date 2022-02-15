import React from 'react'
import jsPDF from 'jspdf'
import Generator from '../pages/Generator'


const ViewPDF = () => {

  const jspdf = ()=>{
    var doc = new jsPDF("p","pt", "A4");

    doc.text(20,20, "documento de prueba")
    doc.html(document.querySelector('#content'),{
      callback:function(doc){
        doc.save("docprueba.pdf");
      }
    })
  }

  return (
    <div>
      <Generator id='content'/>
      <button onClick={jspdf}>generar documento</button>
    </div>
  )
}

export default ViewPDF