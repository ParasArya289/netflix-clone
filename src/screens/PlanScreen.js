import "./PlanScreen.css";

const PlanScreen = () => {
  return (
    <div className="planScreen__plan">
      <div className="planScreen__info">
        <div className="planScreen__net">
          <h5>Netflix Basics</h5>
          <h6>720p</h6>
        </div>
        <div className="planScreen__net">
          <h5>Netflix Standard</h5>
          <h6>1080p</h6>
        </div>
        <div className="planScreen__net">
          <h5>Netflix Premium</h5>
          <h6>4k + HDR</h6>
        </div>
      </div>
      <div className="planScreen__button">
        <button>Subscribe</button>
        <button>Subscribe</button>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default PlanScreen;
