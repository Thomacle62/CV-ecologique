import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header id="page-header">
        <div className="contenu-en-tete">
          <h1>
            Thomas <span>Calujek</span>
          </h1>
          <h2>Étudiant en Informatique & Développeur Web</h2>
        </div>
      </header>

      <div id="conteneur-principal">
        <aside id="col-gauche">
          <div className="cadre-profil">
            <Image
              src="/photocv.jpg"
              alt="Photo de Thomas Calujek"
              width={180}
              height={180}
              className="photo-profil"
              priority
            />
          </div>

          <div className="contenu-apropos">
            <h2>À propos</h2>
            <p>
              Évoluer dans la résonance des idées, avec écoute et envie
              d’apprendre.
            </p>
          </div>

          <div className="contenu-contact">
            <h2>Contact</h2>
            <p className="violet">Email:</p>
            <p>
              <a href="mailto:Thomas.calujek@gmail.com">
                Thomas.calujek@gmail.com
              </a>
            </p>
            <p className="violet">Téléphone:</p>
            <p>+33 6 25 61 11 37</p>
            <p className="violet">Adresse:</p>
            <p>62580 Vimy, France</p>
          </div>
        </aside>

        <main id="conteneur-contenu">
          <section className="bloc">
            <h2>Formations</h2>
            <div className="entree">
              <h3>BUT Informatique 3ème année (2023-En cours)</h3>
              <p>Institut Universitaire de Technologie (Lens)</p>
            </div>
            <div className="entree">
              <h3>Cycle préparatoire HEI (2022-2023)</h3>
              <p>Université Catholique de Lille (Junia)</p>
            </div>
            <div className="entree">
              <h3>Baccalauréat STI2D - Mention Bien (2019-2022)</h3>
              <p>Institution Gustave Eiffel (Armentières)</p>
              <p>Spécialité : Système de l'Information et du Numérique.</p>
            </div>
          </section>

          <div className="ligne-h"></div>

          <section className="bloc">
            <h2>Expériences</h2>
            <div className="entree">
              <h3>Stage - Développeur Web (Été 2025)</h3>
              <p>IEMN (Villeneuve d’Ascq)</p>
              <p>
                Stage en développement web au sein du laboratoire de l'Institut
                d'Electronique, de Microélectronique et de Nanotechnologie.
              </p>
            </div>
            <div className="entree">
              <h3>Job d’été - Employé qualifié (2023 & 2024)</h3>
              <p>Auchan (Hypermarché Englos)</p>
            </div>
          </section>

          <div className="ligne-h"></div>

          <section className="bloc">
            <h2>Projets Personnels</h2>
            <div className="entree">
              <h3>Conception d'IA avec apprentissage et automatisation</h3>
              <p>
                IA entraînée pour l'identification de personnages en jeu et
                automatisation des actions.
              </p>
            </div>
            <div className="entree">
              <h3>Site web pour la pêche</h3>
              <p>
                Développement d’un site d’indice de pêchabilité basé sur une API
                météo.
              </p>
            </div>
            <div className="entree">
              <h3>Cybersécurité et Bug Bounty</h3>
              <p>
                Auto-formation sur TryHackMe et participation à un programme de
                bug bounty sur HackerOne.
              </p>
            </div>
          </section>

          <div className="ligne-h"></div>

          <div className="grille-blocs">
            <section className="bloc">
              <h2>Compétences</h2>
              <ul>
                <li>Git</li>
                <li>Java/JavaFX</li>
                <li>Python / Flask</li>
                <li>PHP / Laravel</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
              </ul>
            </section>

            <section className="bloc">
              <h2>Atouts</h2>
              <ul>
                <li>Autonome</li>
                <li>Rigoureux</li>
                <li>Patient</li>
                <li>Permis B</li>
              </ul>
            </section>

            <section className="bloc">
              <h2>Langues</h2>
              <ul>
                <li>Anglais (B2)</li>
                <li>Espagnol (notions)</li>
              </ul>
            </section>

            <section className="bloc">
              <h2>Intérêts</h2>
              <ul>
                <li>Informatique</li>
                <li>Pêche</li>
                <li>Bowling</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}