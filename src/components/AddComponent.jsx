import React from 'react';

import GitHubLink from './GitHubLink';

function AddComponent() {
  return (
    <div className="AddComponent">
      <ul>
        <li>
          {'Ajouter une issue ou proposer une PR sur '}
          <GitHubLink />
        </li>
        <li>
          {'OU envoyer un mail à'}
          <img src="./myemail.png" alt="email" />
        </li>
      </ul>
    </div>
  );
}

export default AddComponent;
