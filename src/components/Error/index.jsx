import { styled }from 'styled-components'
import ImgError from '../../assets/404.svg'

const ErrorWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
font-size: 31px
}
`
const ImgWrapper = styled.img`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width:875px
}
`

function Error() {
    return (
        <ErrorWrapper>
            <p>Oups...</p>
            <ImgWrapper src={ImgError}/>
            <p>Il semblerait qu’il y ait un problème</p>
        </ErrorWrapper>
    )
}
 
export default Error