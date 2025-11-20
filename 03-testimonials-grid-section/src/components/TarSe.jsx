import React from 'react'

export const TarSe = () => {
  return (
    <div className= "Card p-4 bg-primay text-white shadow-lg bg-danger" style={{borderRadius: "12px", position: "relative"}}>
      <div className="bg-light rounded-circle me-3" style={{ width: "45px", height: "45px"}}> </div>
      <strong className="">Daniel Clifford</strong>
      <strong className="">verified graduste</strong>

     <p style={{fontSize: "0.3rem",  opacity: "0.3", position: "absolute",  right: "10px", top: "0" }}> " </p>
     
     <div className="card-body">
       <h5 className="card-title fw-bold text-secondary-emphasis"> i received a job offer mid-course, and the sunjects i learned were current, if not more so, in the company I joined. i honestly feel i got every penny´s whorth. </h5>
       <p className="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aut maiores esse similique suscipit eveniet in optio exercitationem quaerat sint, temporibus sed natus necessitatibus tempora non ab assumenda illo totam?</p>
     </div>
    </div>
  )
}
