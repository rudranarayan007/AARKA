import React from "react";
import "./Pricing.css";

import { Edit } from "@mui/icons-material";

export default function Pricing() {
  return (
    <div className="priccointainer">
      <div className="pricingcointainer">
        <div className="pricingtxt">Pricing</div>
        <div className="pricingline"></div>
        <div className="goldmemercard">
          <div className="goldmembertxt">Gold Member</div>
          <div className="editicon">
            <Edit/>
          </div>
          <div className="dot1"></div>
          <div className="bestsportstxt">Best sports curriculum</div>
          <div className="dot2"></div>
          <div className="skilltxt">Skill assessment</div>
          
          <div className="dot3"></div>
          <div className="personalisedtxt">Personalised attention</div>

          <div className="dot4"></div>
          <div className="certifiedtxt">Certified coaches</div>
         
          <div className="dot5"></div>
          <div className="getcompletetxt">Get complete training & gudience</div>
        </div>

        <div className="silvermemercard">
          <div className="silvermembertxt">Silver Member</div>
          <div className="editicon">
            <Edit/>
          </div>
          <div className="dot1"></div>
          <div className="unlimitatedtxt">Unlimited access</div>
          <div className="dot2"></div>
          <div className="playanytimetxt">Play any time & any center</div>
          
          <div className="dot3"></div>
          <div className="getslottxt">Get slot priority</div>

          <div className="dot4"></div>
          <div className="multisportstxt">Multi sports access</div>
         
         
        </div>
      </div>
    </div>
  );
}
