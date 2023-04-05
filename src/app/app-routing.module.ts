import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAISComponent } from './components/aais/aais.component';
import { AcupickComponent } from './components/acupick/acupick.component';

import { AlbertsonsMainComponent } from './components/albertsons-main/albertsons-main.component';
import { B4uComponent } from './components/b4u/b4u.component';
import { CatalogMarketplaceComponent } from './components/catalog-marketplace/catalog-marketplace.component';
import { CatalogRichnessComponent } from './components/catalog-richness/catalog-richness.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CcmsComponent } from './components/ccms/ccms.component';
import { ControlTowerComponent } from './components/control-tower/control-tower.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { DevopsComponent } from './components/devops/devops.component';
import { DigitalDevOpsComponent } from './components/digital-dev-ops/digital-dev-ops.component';
import { DomsComponent } from './components/doms/doms.component';
import { EngineeringExcellenceComponent } from './components/engineering-excellence/engineering-excellence.component';
import { EpeComponent } from './components/epe/epe.component';
import { FreshpassComponent } from './components/freshpass/freshpass.component';
import { GamificationComponent } from './components/gamification/gamification.component';
import { HomeComponent } from './components/home/home.component';
import { InStoreParityComponent } from './components/in-store-parity/in-store-parity.component';
import { InventoryAccuracyComponent } from './components/inventory-accuracy/inventory-accuracy.component';
import { OctxComponent } from './components/octx/octx.component';
import { OmsComponent } from './components/oms/oms.component';
import { OspgComponent } from './components/ospg/ospg.component';
import { PeopleComponent } from './components/people/people.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProductIntegratedToolsComponent } from './components/product-integrated-tools/product-integrated-tools.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { RSVIPod1Component } from './components/rsvi-pod1/rsvi-pod1.component';
import { RSVIPod2Component } from './components/rsvi-pod2/rsvi-pod2.component';
import { SelfHelpComponent } from './components/self-help/self-help.component';
import { SnsComponent } from './components/sns/sns.component';
import { StoreMobilityComponent } from './components/store-mobility/store-mobility.component';

import { TechstackComponent } from './components/techstackcatalog/techstackcatalog.component';
import { UcaComponent } from './components/uca/uca.component';
import { UploadComponent } from './components/upload/upload.component';
import { UppComponent } from './components/upp/upp.component';
import { VposComponent } from './components/vpos/vpos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  { path: 'techstackcatalog', component: TechstackComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'albertsons-main', component: AlbertsonsMainComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'people', component: PeopleComponent },
  {path:'acupick',component:AcupickComponent},
  {path:'octx',component:OctxComponent},
  {path:'b4u',component:B4uComponent},
  {path:'ccms',component:CcmsComponent},
  {path:'control-tower',component:ControlTowerComponent},
  {path:'devops',component:DevopsComponent},
  {path:'doms',component:DomsComponent},
  {path:'epe',component:EpeComponent},
  {path:'freshpass',component:FreshpassComponent},
  {path:'gamification',component:GamificationComponent},
  {path:'oms',component:OmsComponent},
  {path:'ospg',component:OspgComponent},
  {path:'pharmacy',component:PharmacyComponent},
  {path:'pricing',component:PricingComponent},
  {path:'rewards',component:RewardsComponent},
  {path:'self-help',component:SelfHelpComponent},
  {path:'store-mobility',component:StoreMobilityComponent},
  {path:'upp',component:UppComponent},
  {path:'vpos',component:VposComponent},
  {path:'catalog-marketplace',component:CatalogMarketplaceComponent},
  {path:'catalog-richness',component:CatalogRichnessComponent},
  {path:'customer-reviews',component:CustomerReviewsComponent},
  {path:'engineering-excellence',component:EngineeringExcellenceComponent},
  {path:'in-store-parity',component:InStoreParityComponent},
  {path:'inventory-accuracy',component:InventoryAccuracyComponent},
  {path:'sns',component:SnsComponent},
  {path:'uca',component:UcaComponent},
  {path:'aais',component:AAISComponent},
  {path:'digital-dev-ops',component:DigitalDevOpsComponent},
  {path:'product-integrated-tools',component:ProductIntegratedToolsComponent},
  {path:'rsvi-pod1',component:RSVIPod1Component},
  {path:'rsvi-pod2',component:RSVIPod2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
