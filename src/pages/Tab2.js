import React from 'react'
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'

const Tab2 = () => {
  return (React.createElement(IonPage, null,
    React.createElement(IonHeader, null,
      React.createElement(IonToolbar, null,
        React.createElement(IonTitle, null, "Tab Two"))),
    React.createElement(IonContent, null,
      React.createElement(IonList, null,
        React.createElement(IonItem, { routerLink: "/tab2/details" },
          React.createElement(IonLabel, null,
            React.createElement("h2", null, "Go to detail")))))))
}

export default Tab2
