import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: #5843E4;`}
`

function Header() {
    return (
        <nav>
            <StyledLink to="/" $isFullLink>Accueil</StyledLink>
            <StyledLink to="/freelances" $isFullLink>Profils</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </nav>
    )
}

export default Header