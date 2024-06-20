
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonButton  } from '@ionic/react';
import React from 'react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


function Example() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Call Volume</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent color="primary">
      <IonList inset={true}>
        <IonItem>
          <IonInput label="DRC_ISERVICE" ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_ISUPPORT"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_ISALES"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_BMAS"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_IREISSUE"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_AADV"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_AGP"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_REISSUE"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_SALES"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="DRC_SERVICE"></IonInput>
        </IonItem>
        <IonButton>Submit</IonButton>
        <IonItem>
          <IonLabel>TOTAL CALLS</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
    </IonPage>
  );
}
export default Example;
