import React from "react"
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, prevURL, projURL }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="hola" />
        <div className="proj-txtx">

          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-2">
            <a href={projURL} target={NaN} >Github Project</a>
          </div>
          <div>
            <a href={prevURL} target={NaN}  >Preview Project</a>
          </div>

        </div>
      </div>
    </Col>
  )
}
