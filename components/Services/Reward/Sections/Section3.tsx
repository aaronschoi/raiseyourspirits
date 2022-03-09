import styled from 'styled-components'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url('https://picsum.photos/id/210/400/400');
    background-color: #000;
    min-height: 100vh;
    @media only screen and (max-width: 768px) {
        background-image: unset;
        min-height: unset;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
    }
`

const Title = styled.h3`
    color: #fff;
    text-align: center;
    padding-top: 10%;
    @media only screen and (max-width: 768px) {
        padding-top: 0;
        padding-bottom: 50px;
    }
`

const DoubleGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-grow: 1;
    .center-text {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 20%;
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: unset;
        display: flex;
        flex-direction: column;
        /* justify-content: flex-start;
        align-items: flex-start; */
        .center-text {
            padding-bottom: 0;
            justify-content: unset;
            min-height: unset;
            order: 1;
        }
    }
`

const Image = styled.div`
    background-color: #000;
    max-width: 100vw;
    display: none;
    @media only screen and (max-width: 768px) {
        display: inline-block;
        padding-bottom: 20px;
    }
`

const Placeholder = styled.div`
    height: 200px;
    width: auto;
    background-image: url('https://picsum.photos/id/210/400/400');
    background-color: #fff;
`

const Section3 = () => {
    const text =
        'This is an opportunity to purchase exclusive access to taste, select, and own bourbon some of the finest barrels of bourbon available today. Your Select Barrel Series is a selection of single barrels of Knob Creek Kentucky straight bourbon pulled expressly for you to experience and own. Each barrel has its own unique flavor profile and represents bourbon that will never be available again once each barrel is purchased. Each bottle from this barrel will have a custom placard on it with your desired wording and will be signed by Fred Noe (Jim Beam’s Great Great Grandson). Perfect for team or client gifts.'

    return (
        <Container>
            <Title>OWN A BARREL</Title>
            <DoubleGrid>
                <div className="center-text">
                    <YellowLetteringParagraph text={text} />
                </div>
                <Image>
                    <Placeholder />
                </Image>
            </DoubleGrid>
        </Container>
    )
}

export default Section3
