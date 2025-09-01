import React from "react";
import "./OrgChart.css";

export default function OrgChart() {
  return (
    <div className="org-chart">
      <div className="org-header">מפקד הפיקוד</div>

      <div className="org-columns">
        {/* טור שמאלי */}
        <div className="org-column">
          <div className="org-box">ב״צ לפיקוד<br/>ומקצועות העורף</div>
          <div className="org-box">בא״פ</div>
          <div className="org-box">4 גדודים</div>
          <div className="org-box">בא״ח העורף</div>
          <div className="org-box">הכשרות</div>
          <div className="org-box">אימוני רשות</div>
          <div className="org-box">מפקדות</div>
        </div>

        {/* טור מרכזי */}
        <div className="org-column">
          <div className="org-box">חטיבת החילוץ<br/>וההדרכה</div>
          <div className="org-box">מחוז צפון</div>
          <div className="org-box">מחוז חיפה</div>
          <div className="org-box">מחוז דן</div>
          <div className="org-box">מחוז ים והמרכז</div>
          <div className="org-box">מחוז דרום</div>
          <div className="org-box">מכללה לאומית<br/>לאיתנות ישראלית</div>
        </div>

        {/* טור ימני */}
        <div className="org-column">
          <div className="org-box">דובר צה״ל</div>
          <div className="org-box">יועץ משפטי</div>
          <div className="org-box">יועץ ארגוני</div>
          <div className="org-box">רמ״ט הפיקוד</div>
          <div className="org-box">תכנון וקש״ח</div>
          <div className="org-box">ארגון</div>
          <div className="org-box">פיתוח</div>
          <div className="org-box">תוה״ד</div>
        </div>
      </div>
    </div>
  );
}
