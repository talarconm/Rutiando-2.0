import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { Route } from "react-router-dom";
import { homeOutline, mapOutline, chatbubbleOutline, personOutline } from "ionicons/icons";
import Inicio from "./Inicio";
import Rutas from "./Rutas";
import Comunidad from "./Comunidad";

const TabsPage: React.FC = () => (
    <IonTabs>
        <IonRouterOutlet>
            <Route exact path="/Inicio">
            <Inicio />
            </Route>

            <Route exact path="/Rutas">
            <Rutas />
            </Route>

            <Route exact path="/Comunidad">
            <Comunidad />
            </Route>
        </IonRouterOutlet>

        {/* <!-- Tab 1 - Inicio --> */}
        <IonTabBar slot="bottom"> {/*slot="bottom" para q el IonTabBar este en la parte inferior de la pantalla.*/}
            <IonTabButton tab="Inicio" href="/Inicio">
                <IonIcon aria-hidden="true" icon={homeOutline}/>
                <IonLabel>Inicio</IonLabel>
            </IonTabButton>

        {/* <!-- Tab 2 - Rutas --> */}
            <IonTabButton tab="Rutas" href="/Rutas">
                <IonIcon aria-hidden="true" icon={mapOutline}/>
                <IonLabel>Rutas</IonLabel>
            </IonTabButton>

        {/* <!-- Tab 3 - Comunidad --> */}
            <IonTabButton tab="Comunidad" href="/Comunidad">
                <IonIcon aria-hidden="true" icon={chatbubbleOutline}/>
                <IonLabel>Comunidad</IonLabel>
            </IonTabButton>

        {/* <!-- Tab 4 - Perfil --> */}
            <IonTabButton tab="Perfil" href="/Perfil">
                <IonIcon aria-hidden="true" icon={personOutline}/>
                <IonLabel>Perfil</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs >
);

export default TabsPage

