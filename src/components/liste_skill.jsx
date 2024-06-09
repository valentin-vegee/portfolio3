import React from "react";
import Skill from "./Skill";

const Liste = () => {
  return (
    <div className="Skill_contente">
      <div className="Skill_content_1">
        <h2>Langues</h2>
        <Skill
          text="Français"
          img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEEbJuA2-4bVeG1D9KqZCPlaqtMQZAhtXPspmB0CNLffG-CdEF3SYTDrbXcpaqKqb5yyX8GJ8HDqxsjUInEH29DjMwhroaXwIi8IOYhH_KOyC6LhboTycTW1iqE38h1aFDk7rS&usqp=CAc"
        />
        <Skill
          text="Anglais (B2)"
          img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmiYnJHimA-5LlYdbtqKvCab7p4KDtwkBiXJhlj9hj2VQVjJ6s0RLMytolXcm5PuIoya7-CW9isXmRCZY_YPX1EGrvRKAk7kYRx8Uw12IC5Zoz-pIgr2Rb2obEZp1fjl2gNYPPDg8&usqp=CAc"
        />
        <Skill
          text="Espagnol (Basic)"
          img="data:image/png;base64,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"
        />
      </div>
      <div className="Skill_content_1">
        <h2>Expertise</h2>
        <Skill
          text="HTML/CSS"
          img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEEbJuA2-4bVeG1D9KqZCPlaqtMQZAhtXPspmB0CNLffG-CdEF3SYTDrbXcpaqKqb5yyX8GJ8HDqxsjUInEH29DjMwhroaXwIi8IOYhH_KOyC6LhboTycTW1iqE38h1aFDk7rS&usqp=CAc"
        />
        <Skill
          text="C"
          img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEEbJuA2-4bVeG1D9KqZCPlaqtMQZAhtXPspmB0CNLffG-CdEF3SYTDrbXcpaqKqb5yyX8GJ8HDqxsjUInEH29DjMwhroaXwIi8IOYhH_KOyC6LhboTycTW1iqE38h1aFDk7rS&usqp=CAc"
        />
        <Skill
          text="PHP"
          img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmiYnJHimA-5LlYdbtqKvCab7p4KDtwkBiXJhlj9hj2VQVjJ6s0RLMytolXcm5PuIoya7-CW9isXmRCZY_YPX1EGrvRKAk7kYRx8Uw12IC5Zoz-pIgr2Rb2obEZp1fjl2gNYPPDg8&usqp=CAc"
        />
        <Skill
          text="Java"
          img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmiYnJHimA-5LlYdbtqKvCab7p4KDtwkBiXJhlj9hj2VQVjJ6s0RLMytolXcm5PuIoya7-CW9isXmRCZY_YPX1EGrvRKAk7kYRx8Uw12IC5Zoz-pIgr2Rb2obEZp1fjl2gNYPPDg8&usqp=CAc"
        />
        <Skill
          text="WLangage"
          img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmiYnJHimA-5LlYdbtqKvCab7p4KDtwkBiXJhlj9hj2VQVjJ6s0RLMytolXcm5PuIoya7-CW9isXmRCZY_YPX1EGrvRKAk7kYRx8Uw12IC5Zoz-pIgr2Rb2obEZp1fjl2gNYPPDg8&usqp=CAc"
        />
      </div>
    </div>
  );
};
export default Liste;
