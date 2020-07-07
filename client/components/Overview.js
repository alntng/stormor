import React from "react";
import "../../public/stylesheets/overview.css";

export default function Overview() {
  return (
    <div>
      <div className="overview-landing">
        <h1>Software to make storage unit management easy</h1>
        <h3>
          Owners shouldn't sweat the small stuff. Let Stormor take care of that.
        </h3>
        <button>Overview</button>
        <button>Tour</button>
        <button>FAQ</button>
      </div>

      <div className="overview-panel-1">
        <img src="https://candysdirt.com/wp-content/uploads/garage-full-of-possessions2-1.jpg" />
        <div className="overview-subpanel-1">
          <h2>Do you feel your storage warehouse looks like this?</h2>
          <p>
            Managing an entire warehouse of storage units is difficult. Too many
            customers, too many units to keep track of, and sometimes they miss
            payments. How can any one person manage all this on their own?
          </p>
        </div>
      </div>

      <div className="overview-panel-2">
        <div className="overview-subpanel-2">
          <h2>Our software and team can help out in every step</h2>
          <p>
            Our team works around the clock ensuring stability and reliability
            for the software you rely on. We promise to do our part in providing
            you the best service, so you can do your part in running your
            business for the community.
          </p>
        </div>
        <img src="https://homebusinessmag.com/wp-content/uploads/2018/04/Depositphotos_151249562_m-2015.jpg" />
      </div>
    </div>
  );
}
