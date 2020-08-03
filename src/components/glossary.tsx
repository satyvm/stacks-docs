import React from 'react';
import { Box, space } from '@blockstack/ui';
import { hydrate } from '@common/data/hydrate-mdx';
import { MDXComponents } from '@components/mdx/mdx-components';
import { slugify } from '@common/utils';
import { css } from '@styled-system/css';
import { TableOfContents } from '@components/toc';

export const Glossary = ({ data }) => {
  return (
    <>
      <TableOfContents
        columns={[2, 2, 3, 3]}
        headings={data.map(entry => ({
          content: entry.term,
          level: 2,
        }))}
      />
      {data.map(entry => (
        <>
          <MDXComponents.h3 pl={space('extra-loose')} id={slugify(entry.term)}>
            {entry.term}
          </MDXComponents.h3>

          <Box
            css={css({
              width: '100%',
              maxWidth: '48ch',
              pl: space(['none', 'none', 'base-loose']),
              '& p': {
                display: 'block',
                wordBreak: 'break-word',
                hyphens: 'auto',
              },
              code: {
                wordBreak: 'break-all',
              },
            })}
          >
            {hydrate(entry.definition, MDXComponents)}
          </Box>
        </>
      ))}
    </>
  );
};
