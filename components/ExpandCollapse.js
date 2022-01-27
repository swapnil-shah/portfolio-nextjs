import React, { useState } from "react";
import useCollapse from "react-collapsed";

export default function ExpandCollapse() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded
  });

  return (
    <div>
      <section {...getCollapseProps()}>
        <ul className="pt-4">
          <li className="my-2 list-none">
            Lorem ipsum dolor sit amet, id brute atomorum duo, meis commodo
            percipit te nec. Vim sale ubique invidunt ei,
          </li>
          <li className="my-2 list-none">
            in mei reque feugiat patrioque. Et novum option elaboraret usu, has
            corpora luptatum an, laboramus assueverit vis id.
          </li>
          <li className="my-2 list-none">
            eros elitr possit vim an, ex quem atomorum senserit quo. Mel magna
            noluisse dissentias ex. Iudico primis ad pri.
            <a
              href="http://frontstuff.io"
              target="_blank"
              rel="noopener"
              className="underline text-neutral-900 dark:text-neutral-50"
            >
              Inermis
            </a>
            , menandri ex mel. No velit dictas pri, ex eum tempor integre
            docendi.
          </li>
        </ul>
      </section>
      <button
        className="underline text-neutral-900 dark:text-neutral-50"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded)
        })}
      >
        {isExpanded ? "Close" : "Read more"}
      </button>
    </div>
  );
}
