import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';

function Star({ num }) {

    const renderStars = () =>{
        let stars = [];
        let tempN = num;
        for(let i = 0; i <5; i++){
            // console.log("iterazione n: " + i + "del num: " + num +"del temp:" + tempN);
            if(tempN>=1){
                stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />); 
            }else if(tempN >=0.5){
                stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-500" />);
            }else{
                stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-400" />);
            }
            tempN-=1;
        }

        return stars;
    }
    if(num>1)
        renderStars();
    return (
        <>
            <span>{renderStars()}</span>
        </>
    );
}

export default Star;