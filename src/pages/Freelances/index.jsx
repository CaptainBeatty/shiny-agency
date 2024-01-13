import Card from '../../components/Card'
import { styled }from 'styled-components'

 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
    
]

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

function Freelances() {
    return (
        <AllPageContainer>
            <h1>Trouvez votre prestataire</h1>
            <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
            <CardsContainer>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardsContainer>
        </AllPageContainer>
    )
}
export default Freelances