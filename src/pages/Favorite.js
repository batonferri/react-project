import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import Meetupslist from '../comps/meetups/MeetupsList';

function FavoritePage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
      content = <p>You got no favorites yet</p>
    }else {
      content = <Meetupslist meetups={favoritesCtx.favorites}/>
    }

    return <section>
      <h1>Favorites</h1>
      {content}
    </section>
  }
  
  export default FavoritePage;
  