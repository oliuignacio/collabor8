import { Link} from 'react-router-dom';


function ListedCollab({ owner, name, tracks, _id}) {

  return (

      <div key={_id} className="listedCollab">
        <div className="collabOwner">
        <Link to={"/profile/" + owner}>
        <h6>@{owner}</h6>
        </Link>
        </div>
        <Link to={"/collab/id/" + _id}>
        <div className="collabName">
        <h5>{name}</h5>
        </div>
        </Link>
        <div className="collabTracks">
        {tracks.map(el => {
          if (el.url) return (<img 
          key={el.url} 
          width='80' 
          height='80' 
          alt='' 
          src={el.url[el.url.length-1] === 'm' ? el.url.slice(0,-4)+'jpg' : el.url.slice(0,-3)+'jpg'}></img>)
        })}
        </div>
      </div>
    
  );
}

export default ListedCollab;
