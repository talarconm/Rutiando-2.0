import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import { homeOutline, mapOutline, chatbubbleOutline, personOutline } from "ionicons/icons";
import Inicio     from "./Inicio";
import Rutas      from "./Rutas";
import Comunidad  from "./Comunidad";
import Perfil     from "./Perfil";


const TabsPage: React.FC = () => (
    <IonTabs>
        <IonRouterOutlet>
            <Route exact path="/tabs/inicio" component={Inicio} />

            {/* Ruta de Rutas */}
            <Route exact path="/tabs/rutas" component={Rutas} />

            {/* Ruta de Comunidad */}
            <Route exact path="/tabs/comunidad" component={Comunidad} />

            {/* Redirección por defecto */}
            <Redirect exact path="/tabs" to="/tabs/inicio" />

            {/* Ruta de perfil*/}
            <Route exact path="/tabs/perfil" component={Perfil} />

        </IonRouterOutlet>

        {/* <!-- Tab 1 - Inicio --> */}
        <IonTabBar slot="bottom"> {/*slot="bottom" para q el IonTabBar este en la parte inferior de la pantalla.*/}
            <IonTabButton tab="Inicio" href="/tabs/Inicio">
                <IonIcon aria-hidden="true" icon={homeOutline} />
                <IonLabel>Inicio</IonLabel>
            </IonTabButton>

            {/* <!-- Tab 2 - Rutas --> */}
            <IonTabButton tab="Rutas" href="/tabs/Rutas">
                <IonIcon aria-hidden="true" icon={mapOutline} />
                <IonLabel>Rutas</IonLabel>
            </IonTabButton>

            {/* <!-- Tab 3 - Comunidad --> */}
            <IonTabButton tab="Comunidad" href="/tabs/Comunidad">
                <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
                <IonLabel>Comunidad</IonLabel>
            </IonTabButton>

            {/* <!-- Tab 4 - Perfil --> */}
            <IonTabButton tab="Perfil" href="/tabs/Perfil">
                <IonIcon aria-hidden="true" icon={personOutline} />
                <IonLabel>Perfil</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs >
);

export default TabsPage

