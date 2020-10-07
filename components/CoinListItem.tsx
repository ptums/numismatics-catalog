import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { LinkItem } from '../interfaces';
import { makeUrl } from '../utils/helpers';

type Props = {
  coin: LinkItem
}

export default function CoinListItem({ coin }: Props): JSX.Element {
  return (
    <li className="coin-item">
      <FontAwesomeIcon icon={faLink} className="small-icon" />
      <Link
        href={`/coin/${encodeURIComponent(coin._id)}/${encodeURIComponent(
          makeUrl(coin.title),
        )}`}
      >
        <a>{coin.title}</a>
      </Link>

      <style jsx>
        {`
          li {
            font-family: 'Tajawal Regular';
            font-size: 1.3rem;
            list-style-type: none;
            margin-bottom: 1em;
          }

          li a {
            color: #000;
            text-decoration: none;
          }

          li a:hover {
            color: #00f;
            text-decoration: underline;
          }
        `}
      </style>
    </li>
  );
}
