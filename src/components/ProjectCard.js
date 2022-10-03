import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, webUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          
          <a href={webUrl} target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square fa-2x"></i><span>{description}</span></a>
        </div>
      </div>
    </Col>
  )
}
