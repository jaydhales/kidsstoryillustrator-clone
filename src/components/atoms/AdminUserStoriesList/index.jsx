import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { stories } from './StoriesData';
import more from '../../../assets/adminuserdetails/more.svg'
import { useParams } from 'react-router-dom';
import './AdminUserStoriesList.scss';

export const AdminUserStoriesList1 = () => {
    const navigate = useNavigate();
    // const { id } = useParams();
    const data = stories;
 const [ storys, setStorys ] = useState(stories);

 useEffect(() => {
    
      setStorys(stories)
      console.log(storys)
 }, [stories])                                                                                                                                                                                                                                                                                                                                                                                        
 

  return (
     <div className='AdminUserStoriesList'>
       {storys.slice(0,3).map(story => 
        <div key={story.id} className='card_story'>
            <img src={story.image} alt="" className='img_story'/>
            <div className='card_details'>
                <div className='card-detail' onClick={() => 
                    story.id ? (
                        
                        navigate(`/admin/userstory/${story.id}`)
                    ) : (
                        navigate('/error404')
                    )
                }>
                    <p className='card-title'>{story.title}</p>
                    <p className='card-date'>{story.date_created} </p>
                </div>
                <img src={more} alt="" className='img_details'/>
            </div>

        </div>
    )}
  </div>
  );

};

export const AdminUserStoriesList = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const data = stories;
 const [ storys, setStorys ] = useState(stories);

 useEffect(() => {
    
      setStorys(stories)
      console.log(storys)
 }, [stories])
 

  return (
     <div className='AdminUserStoriesList'>
       {storys.map(story => 
        <div key={story.id} className='card_story'>
            <img src={story.image} alt="" className='img_story'/>
            <div className='card_details'>
                <div className='card-detail' onClick={() => 
                    story.id ? (
                        
                        navigate(`/admin/userstory/${story.id}`)
                    ) : (
                        navigate('/error404')
                    )
                }>
                    <p className='card-title'>{story.title}</p>
                    <p className='card-date'>{story.date_created} </p>
                </div>
                <img src={more} alt="" className='img_details'/>
            </div>

        </div>
    )}
  </div>
  );

};


// These are the types of the props that are passed to the component

AdminUserStoriesList.propTypes = {
    storys: propTypes.shape({
        id: propTypes.any.isRequired, 
        image: propTypes.any.isRequired, 
        title: propTypes.string.isRequired, 
        date_created: propTypes.any.isRequired, 
        story: propTypes.any.isRequired})
};

// These are their default values

// AdminUserStoriesList.defaultProps = {
//     storys: storyies
// };

export default AdminUserStoriesList;

