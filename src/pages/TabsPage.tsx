import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import { homeOutline, mapOutline, chatbubbleOutline, personOutline } from "ionicons/icons";
import Inicio from "./Inicio";
import Rutas from "./Rutas";
import Comunidad from "./Comunidad";
import Perfil from "./Perfil";
import { UserProvider } from "../Context/UserContext"; // Importa el UserProvider

const TabsPage: React.FC = () => (
    <UserProvider> {/* Envuelve todas las rutas en UserProvider */}
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/tabs/inicio" component={Inicio} />
                <Route exact path="/tabs/rutas" component={Rutas} />
                <Route exact path="/tabs/comunidad" component={Comunidad} />
                <Route exact path="/tabs/perfil" component={Perfil} />
                <Redirect exact path="/tabs" to="/tabs/inicio" />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="Inicio" href="/tabs/inicio">
                    <IonIcon aria-hidden="true" icon={homeOutline} />
                    <IonLabel>Inicio</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Rutas" href="/tabs/rutas">
                    <IonIcon aria-hidden="true" icon={mapOutline} />
                    <IonLabel>Rutas</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Comunidad" href="/tabs/comunidad">
                    <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
                    <IonLabel>Comunidad</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Perfil" href="/tabs/perfil">
                    <IonIcon aria-hidden="true" icon={personOutline} />
                    <IonLabel>Perfil</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </UserProvider>
);

export default TabsPage;
