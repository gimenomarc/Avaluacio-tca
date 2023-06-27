import React from 'react';
import Layout from '../components/Layout';

const NormesAdministracio = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-5">NORMES ADMINISTRACIÓ</h1>
      <p>Abans d'iniciar l'administració del test, hi ha d’haver un ambient tranquil i privat, on l’avaluat es senti còmode per respondre amb sinceritat. Expliqueu-li que el propòsit d'aquesta avaluació és obtenir informació sobre la relació amb l'alimentació, la imatge corporal i els possibles símptomes dels trastorns de la conducta alimentària, proporcioneu-li les instruccions d'accés al programa web, incloent-hi l'enllaç i les credencials d'inici de sessió (per facilitar la presentació en aquest treball, això no està implementat), doneu-li una explicació clara sobre la confidencialitat dels resultats, i demaneu el consentiment informat per participar-hi.</p>
      <p>Abans de començar a respondre el test, l’avaluat ha de comprendre les instruccions, i el professional de la psicologia s’ha de mostrar disponible per respondre qualsevol dubte que pugui sorgir, i ha d’animar a respondre amb sinceritat i a no ometre cap pregunta.</p>
      <p>Quan l’avaluat hagi completat el test, el professional de la psicologia ha de realitzar la interpretació dels resultats de manera acurada i precisa, amb les dades que aquest us proporciona, considerant el context individual de l’avaluat i la seva història clínica, si escau. És important ressaltar que aquest test psicomètric és una eina d’avaluació i no constitueix un diagnòstic definitiu, de manera que els resultats han de ser considerats conjuntament amb altres factors clínics i avaluatius.</p>
      <p>Finalment, els resultats del test s’utilitzaran per proporcionar una retroalimentació adequada a l’avaluat i, si cal, establir un pla de tractament o derivació a altres professionals de la salut, segons correspongui.</p>
    </Layout>
  );
};

export default NormesAdministracio;
