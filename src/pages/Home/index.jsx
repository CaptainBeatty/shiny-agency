import { styled }from 'styled-components'
import ImgHome from '../../assets/home-illustration.svg'
import  colors  from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const HomeWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: #F9F9FC;

}
`
const TxtBtnWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
}
`

const ImgWrapper = styled.img`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
}
`
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
function Home() {
    return (
        <HomeWrapper>
            <TxtBtnWrapper>
            <h1>Repérez vos besoins,<br />
                on s'occupe du reste,<br />
                avec les meilleurs talents
            </h1>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </TxtBtnWrapper>
            <ImgWrapper src={ImgHome}/>
        </HomeWrapper>
    )
}

export default Home