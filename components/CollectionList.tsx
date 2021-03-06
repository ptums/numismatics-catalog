import react from 'react';
import { CollectionLinkItem } from '../interfaces';
import CollectionListItem from './CollectionListItem';

type Props = {
  collections: CollectionLinkItem[]
  authed: boolean
}

export default function CollectionList({
  collections,
  authed = false,
}: Props): JSX.Element {
  return (
    <section className="collections">
      <h2>
        COLLECTIONS
        {authed && (
          <small>
            {' '}
            Mind you if you delete all collection all the associated coins will
            be deleted as well.
          </small>
        )}
      </h2>
      <ul className="list">
        {collections.map((collection) => (
          <CollectionListItem
            key={collection.id}
            collection={collection}
            authed={authed}
          />
        ))}
      </ul>
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 15px black;
            max-width: 100%;
            padding: 1em;
            border-radius: 37px;
            margin-top: 3em;
          }

          section h2 {
            font-family: 'Tajawal Bold';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
            letter-spacing: -1px;
            margin-left: 1em;
            margin-right: 1em;
          }

          section ul {
            margin: 0;
            padding: 0;
            text-align: left;
            margin-top: 1em;
            margin-left: 2em;
            margin-right: 2em;
          }

          small {
            font-size: 16px;
            font-weight: 500;
            display: inline-block;
          }
        `}
      </style>
    </section>
  );
}
