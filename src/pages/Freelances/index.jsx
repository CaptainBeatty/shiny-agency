import Card from '../../components/Card'
import { styled }from 'styled-components'
import { useState, useEffect } from 'react'
import { Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

 


const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
const AllPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
    const [freelancersList, setFreelancesList] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        async function fetchFreelances() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/freelances`)
                const { freelancersList } = await response.json()
                setFreelancesList(freelancersList)
            }
            catch(err) {
                console.log('===== error =====', err)
                setError(true)
            }
            finally {
                setDataLoading(false)
            }
        }
        fetchFreelances()
    }, [])

    if (error) {
        return <span>Oups, il y eu un problème</span>
    }

    return (
        <AllPageContainer>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
            {isDataLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
        ) : (
            <CardsContainer>
            {freelancersList.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.job}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardsContainer>
        )}
            
        </AllPageContainer>
    )
}
export default Freelances