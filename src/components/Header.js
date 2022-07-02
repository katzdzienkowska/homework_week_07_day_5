import React from 'react';

const Header = ({topicName}) => {
    return ( 
        <section className='results'>
                {topicName ? <h3 className='results'>Results for: {topicName}</h3> : null}
        </section>
    );
};

export default Header;