import "./RecCard.css";
// import mern from '../Assests/mern.png'
import star from '../Assests/fibrstar.svg'
import clock from '../Assests/clock.png'
import play from '../Assests/play.svg'
import eye from '../Assests/eye.svg'

const RecCard = ({
    slug,
    recItem,
}) => {



  
  const imgs= {
    "mernstack":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/mern.png",
    "webdevelopment":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/webdev.png",
    "appdevelopment":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/Appdev.png",
    "ethicalhacking":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/ethical+hacking.png",
    "java":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/java.png",
    "python":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/python.png",
    "cpp":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/cpp.png",
    "datastructure":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/dsa.png",
    "competitiveprogramming":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/cp.png",
    "aftereffects":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/AE.png",
    "photoshop":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/photoshop.png",
    "premierepro":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/premierpro.png",
    "digitalmarketing":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/digital+marketing.png",
    "fundamentalanalysis":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/fma.png",
    "technicalanalysis":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/TechAna.png",
    "illustrator":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/ai.png",
    "financialmodelling":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/fmv.png",
    "datascience":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/datascience.png",
    "uiux":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/uiux.png",
    "reactnative":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/reactNative.png",
    "riskmanagement":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/TechAna.png",
    "dbms":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/dbms.png",
    "devops":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/devops.png",
    "reactjs":"https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/react.png"
}


  // console.log(recItem)
  return (
    <div className="frame-parent" onClick={()=>window.open(`https://tutedude.com/category/${slug}`,'_blank')}>
      <img className="frame-child" alt="" src={imgs[slug]} />
      <div className="frame-group">
        <div className="web-development-parent">
          <div className="web-development">{recItem.name}</div>
          <div className="fi-br-star-parent">
            <img className="fi-br-star-icon" alt="" src={star} />
            <div className="div">{recItem.ratings}</div>
          </div>
        </div>
        <div className="frame-container fcc">
          <div className="fi-br-play-alt-parent">
            <img
              className="fi-br-play-alt-icon"
              alt=""
              src={play}
            />
            <div className="div d1">{recItem.lectures}</div>
          </div>
          <div className="fi-br-play-alt-parent">
            <img className="fi-br-play-alt-icon" alt="" src={clock} />
            <div className="div d1">{recItem.duration}</div>
          </div>
        </div>
        <div className="frame-item" />
        <div className="desktopsecondary" >
          <div className="sec-btn-var1" >
            <img className="fi-br-eye-icon" alt="" src={eye} />
            
            <div className="secondary-button">View curriculum</div>
            <div className="sec-btn-var1-child" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
