

export const VideoSec = ({text, buttonText, image}) => {
    return (
       <div className="video-wrapper mx-auto position-relative">
  <img
    src={image}
    alt="Video preview"
    className="img-fluid video-img"
  />

  <div className="play-overlay d-flex justify-content-center align-items-center">
    <i className="bi bi-play-fill video-play-icon"></i>
  </div>
</div> 
    )
}
