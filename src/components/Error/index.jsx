import { styled }from 'styled-components'
import ImgError from '../../assets/404.svg'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
font-size: 31px;
background-color: ${colors.backgroundLight};
margin: 30px;
`
const ImgWrapper = styled.img`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
max-width: 800px;
`

function Error() {
    return (
        <ErrorWrapper>
            <p>Oups...</p>
            <ImgWrapper src={ImgError}/>
            <p>Il semblerait qu'il y ait un problème</p>
        </ErrorWrapper>
    )
}
 
export default Error