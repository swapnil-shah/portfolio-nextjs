import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

export default function ExpandCollapse({ description }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded
  });

  return (
    <div>
      <section {...getCollapseProps()}>
        <ul
          className="pt-2"
          dangerouslySetInnerHTML={{ __html: description }}
        ></ul>
      </section>
      <button
        className="underline text-neutral-900 dark:text-neutral-50"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded)
        })}
      >
        {isExpanded ? 'Close' : 'Read more'}
      </button>
    </div>
  );
}
