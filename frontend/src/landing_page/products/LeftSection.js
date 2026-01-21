import React from "react";

function LeftSection({
  imageURL,
  ProductName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row py-5 align-items-center">

        <div className="col-md-6 text-center">
          <img src={imageURL} alt="" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2 className="fw-semibold">{ProductName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div className="mt-2">
            {tryDemo && <a href={tryDemo}>Try Demo</a>}
            {learnMore && <a href={learnMore} className="ms-4">Learn More</a>}
          </div>

          <div className="mt-3">
            {googlePlay && <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>}
            {appStore && <a href={appStore} className="ms-4"><img src="media/images/appstoreBadge.svg" alt="" /></a>}
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
