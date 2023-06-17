import React from 'react';
import Layout from '../components/Layout';

const TRIngestaAlimentsPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-xl font-bold mt-8">TRASTORN D’EVITACIÓ/RESTRICCIÓ DE LA INGESTA D’ALIMENTS</h2>
        <p>La principal característica diagnòstica del trastorn d'evitació/restricció de la ingesta d'aliments és l'evitació o la restricció de la presa d'aliments, per a que aquest criteri es compleixi han de ser presents una o més de les característiques principals següents: pèrdua de pes significativa (valoració clínica), deficiència nutritiva significativa (valoració clínica), dependència de l'alimentació enteral o de suplements nutricionals orals (en absència d'una afecció mèdica subjacent), o una marcada interferència en el funcionament psicosocial (menjar amb altres, mantenir relacions) (APA, 2014).</p>
        <p>L'evitació o la restricció d'aliments relacionada amb la manca de disponibilitat d'aliments o amb pràctiques culturals, no són inclosos dins d’aquest trastorn, ni els comportaments propis del desenvolupament normal (APA, 2014).</p>
        <p>El trastorn no s'explicaria millor per una preocupació excessiva per la constitució o el pes corporal, ni per trastorns mentals o factors clínics concurrents (APA, 2014).</p>
      </div>
    </Layout>
  );
}

export default TRIngestaAlimentsPage;