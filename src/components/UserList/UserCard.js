import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "antd"
import PropTypes from "prop-types"
import "antd/dist/antd.css"
import "./UserCard.css"
import { CrownOutlined } from "@ant-design/icons"

const { Title, Text } = Typography
function UserCard(props) {
  // Required props: key, firstName, lastName, major, graduationYear, college, profileImageURL
  const {
    uuid,
    firstName,
    lastName,
    major,
    graduationYear,
    college,
    profileImageURL,
    admin,
  } = props
  return (
    <Link to={`/user/${uuid}`}>
      <div className="user-card-container">
        {admin && <CrownOutlined className="admin-icon" />}
        <div className="user-image-container">
          <img className="user-card-profile-image" src={profileImageURL} alt="user" />
        </div>
        <div className="user-name-container">
          <Title level={4}>
            {firstName} {lastName}
          </Title>
        </div>
        <div className="user-details-container">
          <Text>{major}</Text>
          <Text>{college}</Text>
          <Text>Class of {graduationYear}</Text>
        </div>
      </div>
    </Link>
  )
}
UserCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  graduationYear: PropTypes.number.isRequired,
  college: PropTypes.string.isRequired,
  profileImageURL: PropTypes.string.isRequired,
  admin: PropTypes.bool,
}
UserCard.defaultProps = {
  admin: false,
}

export default UserCard
