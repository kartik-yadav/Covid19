// import React from "react";
// import "./Twitter.css";
// import { FaTwitter } from "react-icons/fa";
// import { TwitterTimelineEmbed } from "react-twitter-embed";

// const Twitter = () => {
//   let Handels = ["WHO", "PMOIndia", "realDonaldTrump"];
//   return (
//     <div className="tfds">
//       <div className="tfdsheading">
//         <p>Latest Feeds</p>
//         <span className="tspan">
//           <FaTwitter />
//         </span>
//       </div>
//       <div className="tlist">
//         {Handels.map((handler) => (
//           <div key={handler}>
//             <TwitterTimelineEmbed
//               sourceType="profile"
//               screenName={handler}
//               options={{ height: 400, tweetLimit: 1 }}
//               noHeader
//               noFooter
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Twitter;
