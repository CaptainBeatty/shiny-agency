import { Link } from 'react-router-dom'
import { styled }from 'styled-components'
import  colors  from '../../utils/style/colors'
import DarkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
    padding: 15px;
    text-decoration: none;
    font-size: 20px;
    ${(props) =>
        props.$isFullLink &&
        `color: #8186A0; border-radius: 30px; &:hover {
            background-color: ${colors.primary};
            color: #FFFFFF;
        }`}
`
const HomeLogo = styled.img`
    display: flex;
    flex-direction: column;
    width: 260px;
    &:hover {
        cursor: pointer;
    }
`
const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &:hover {
    cursor: pointer;
}
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:425px
}
`
function Header() {
    return (
        <NavContainer>
        <Link to="/">
            <HomeLogo src={DarkLogo}/>
        </Link>
        <LinkContainer>
            <StyledLink to="/" $isFullLink>Accueil</StyledLink>
            <StyledLink to="/freelances" $isFullLink>Profils</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </LinkContainer>  
        </NavContainer>
    )
}

export default Header