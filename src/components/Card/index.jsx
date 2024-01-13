import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import { styled }from 'styled-components'
import  colors  from '../../utils/style/colors'
 
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={150} width={150} />
            <span>{title}</span>
        </CardWrapper>
    )
}
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
}
 
export default Card