import React from 'react';
import { Link } from 'react-router-dom';

import GitHubLink from '../../components/GitHubLink';

function HomeView() {
  return (
    <div className="HomeView">
      <h2>Comprendre la civilisation thermo-industrielle</h2>
      <p>
        Le but de ce site est d’illustrer et proposer des clés de compréhension
        de la civilisation thermo-industrielle dans laquelle nous vivons.
      </p>
      <p>
        A l’aide de la barre de recherche, vous pourrez naviguer dans l’ensemble
        des références classées en différents thèmes et types de contenu.
      </p>
      <p>
        {'Ces '}
        <Link to="/references?type=PICTURE">images</Link>
        {', '}
        <Link to="/references?type=VIDEO">vidéos</Link>
        {', '}
        <Link to="/references?type=BOOK">livres</Link>
        {` mais aussi `}
        <Link to="/references?tags=art">œuvres d'art</Link>
        {', '}
        ont pour objectif de faire réfléchir sur la complexité de notre système
        de production et de notre mode de vie. Ils nous interrogent sur
        l’empreinte gigantesque que nous avons sur le système Terre.
      </p>
      <p>
        {`Cet impact d’origine humaine est inédit dans l’histoire de la planète et
        a été rendu possible par le développement de nouvelles sources `}
        <Link to="/references?tags=énergie">d'énergie</Link>
        {' ('}
        <Link to="/references?tags=charbon">charbon</Link>
        {', '}
        <Link to="/references?tags=pétrole">pétrole</Link>
        {', '}
        <Link to="/references?tags=gaz">gaz</Link>
        {', '}
        <Link to="/references?tags=nucléaire">nucléaire</Link>
        {', '}
        <Link to="/references?tags=hydroélectricité">hydroélectricité</Link>
        {', '}
        {`éolien et solaire) qui ont permis aux
        petits primates que nous sommes de dépasser la puissance de son modeste
        organisme. C’est la raison pour laquelle, ce site explore les
        différentes techniques d’extraction et de transformation (ex: `}
        <Link to="/references?tags=électricité">l'électricité</Link>
        {`) de ces
        différentes sources d’énergie et leurs utilisations.`}
      </p>
      <h2>Proposer des références</h2>
      <p>
        Ce site est actuellement en
        <strong> construction</strong>
        {` , n’hésitez pas à proposer d’autres ressources / idées :`}
        <ul>
          <li>
            {' en envoyant un mail à : '}
            <img src="./myemail.png" alt="email" style={{ height: '30px' }} />
          </li>
          <li>
            {'OU en proposant une PR sur '}
            <GitHubLink />
          </li>
        </ul>
      </p>
    </div>
  );
}

export default HomeView;
