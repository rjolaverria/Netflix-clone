import React, { useState, useContext } from 'react';
import { Header } from '../components';
import { HOME } from '../constants/routes';
import FirebaseContext from '../context/firebase';
import ProfileContainer from './ProfileContainer';
import FooterContainer from './FooterContainer';

const BrowseContainer = () => {
    const { firebase } = useContext(FirebaseContext);
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const user = {
        displayName: 'Karl',
        photoURL: '1',
    };

    return user.displayName ? (
        <>
            <Header src='joker1' smallViewPortHide>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo
                            to={HOME}
                            src='/images/misc/logo.svg'
                            alt='Netflix'
                        />
                        <Header.Link
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.Link>
                        <Header.Link
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.Link>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureHeading>
                        Watch Joker Now
                    </Header.FeatureHeading>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his day
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <FooterContainer />
        </>
    ) : (
        <ProfileContainer />
    );
};

export default BrowseContainer;
