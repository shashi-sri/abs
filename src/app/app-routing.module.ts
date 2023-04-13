import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAISComponent } from './components/aais/aais.component';
import { AcupickComponent } from './components/acupick/acupick.component';
import { AlbertsonsMainComponent } from './components/albertsons-main/albertsons-main.component';
import { AaissTechComponent } from './components/All-techstack/aaiss-tech/aaiss-tech.component';
import { AcupickkTechComponent } from './components/All-techstack/acupickk-tech/acupickk-tech.component';
import { B4uuTechComponent } from './components/All-techstack/b4uu-tech/b4uu-tech.component';
import { CartComponent } from './components/All-techstack/cart/cart.component';
import { CatalogmTechComponent } from './components/All-techstack/catalogm-tech/catalogm-tech.component';
import { CatalogrTechComponent } from './components/All-techstack/catalogr-tech/catalogr-tech.component';
import { CcmssTechComponent } from './components/All-techstack/ccmss-tech/ccmss-tech.component';
import { ControllTechComponent } from './components/All-techstack/controll-tech/controll-tech.component';
import { CustomerrTechComponent } from './components/All-techstack/customerr-tech/customerr-tech.component';
import { DdevopsTechComponent } from './components/All-techstack/ddevops-tech/ddevops-tech.component';
import { DevopssTechComponent } from './components/All-techstack/devopss-tech/devopss-tech.component';
import { DomssTechComponent } from './components/All-techstack/domss-tech/domss-tech.component';
import { EngexTechComponent } from './components/All-techstack/engex-tech/engex-tech.component';
import { EpeeTechComponent } from './components/All-techstack/epee-tech/epee-tech.component';
import { FreshpasssTechComponent } from './components/All-techstack/freshpasss-tech/freshpasss-tech.component';
import { GamessTechComponent } from './components/All-techstack/gamess-tech/gamess-tech.component';
import { InventoryaTechComponent } from './components/All-techstack/inventorya-tech/inventorya-tech.component';
import { OctxxTechComponent } from './components/All-techstack/octxx-tech/octxx-tech.component';
import { OmssTechComponent } from './components/All-techstack/omss-tech/omss-tech.component';
import { OspggTechComponent } from './components/All-techstack/ospgg-tech/ospgg-tech.component';
import { PharmacyyTechComponent } from './components/All-techstack/pharmacyy-tech/pharmacyy-tech.component';
import { PitTechComponent } from './components/All-techstack/pit-tech/pit-tech.component';
import { PricingTechComponent } from './components/All-techstack/pricing-tech/pricing-tech.component';
import { RewardssTechComponent } from './components/All-techstack/rewardss-tech/rewardss-tech.component';
import { Rsvipodd1TechComponent } from './components/All-techstack/rsvipodd1-tech/rsvipodd1-tech.component';
import { Rsvipodd2TechComponent } from './components/All-techstack/rsvipodd2-tech/rsvipodd2-tech.component';
import { SelfhelppTechComponent } from './components/All-techstack/selfhelpp-tech/selfhelpp-tech.component';
import { SnssTechComponent } from './components/All-techstack/snss-tech/snss-tech.component';
import { StoreeTechComponent } from './components/All-techstack/storee-tech/storee-tech.component';
import { StoreparityTechComponent } from './components/All-techstack/storeparity-tech/storeparity-tech.component';
import { UcaaTechComponent } from './components/All-techstack/ucaa-tech/ucaa-tech.component';
import { UpppTechComponent } from './components/All-techstack/uppp-tech/uppp-tech.component';
import { VpossTechComponent } from './components/All-techstack/vposs-tech/vposs-tech.component';
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
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProductIntegratedToolsComponent } from './components/product-integrated-tools/product-integrated-tools.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { RSVIPod1Component } from './components/rsvi-pod1/rsvi-pod1.component';
import { RSVIPod2Component } from './components/rsvi-pod2/rsvi-pod2.component';
import { SelfHelpComponent } from './components/self-help/self-help.component';
import { SnsComponent } from './components/sns/sns.component';
import { StoreMobilityComponent } from './components/store-mobility/store-mobility.component';
// import { TechstackComponent } from './components/techstackcatalog/techstackcatalog.component';
import { UcaComponent } from './components/uca/uca.component';
import { UploadComponent } from './components/upload/upload.component';
import { UppComponent } from './components/upp/upp.component';
import { VposComponent } from './components/vpos/vpos.component';
import { PeoplecartComponent } from './components/employee/peoplecart/peoplecart.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  // { path: 'techstackcatalog', component: TechstackComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'albertsons-main', component: AlbertsonsMainComponent },
  { path: 'catalogue', component: CatalogueComponent },
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
  {path:'rsvi-pod2',component:RSVIPod2Component},
  {path:'octxx-tech',component:OctxxTechComponent},
  {path:'cart',component:CartComponent},
  {path:'ospgg-tech',component:OspggTechComponent},
  {path:'storee-tech',component:StoreeTechComponent},
  {path:'acupickk-tech',component:AcupickkTechComponent},
  {path:'controll-tech',component:ControllTechComponent},
  {path:'domss-tech',component:DomssTechComponent},
  {path:'b4uu-tech',component:B4uuTechComponent},
  {path:'freshpass-tech',component:FreshpasssTechComponent},
  {path:'gamess-tech',component:GamessTechComponent},
  {path:'rewardss-tech',component:RewardssTechComponent},
  {path:'ccmss-tech',component:CcmssTechComponent},
  {path:'epee-tech',component:EpeeTechComponent},
  {path:'omss-tech',component:OmssTechComponent},
  {path:'pricing-tech',component:PricingTechComponent},
  {path:'uppp-tech',component:UpppTechComponent},
  {path:'catalogm-tech',component:CatalogmTechComponent},
  {path:'catalogr-tech',component:CatalogrTechComponent},
  {path:'customerr-tech',component:CustomerrTechComponent},
  {path:'engex-tech',component:EngexTechComponent},
  {path:'storeparity-tech',component:StoreparityTechComponent},
  {path:'inventorya-tech',component:InventoryaTechComponent},
  {path:'snss-tech',component:SnssTechComponent},
  {path:'ucaa-tech',component:UcaaTechComponent},
  {path:'selfhelpp-tech',component:SelfhelppTechComponent},
  {path:'vposs-tech',component:VpossTechComponent},
  {path:'pharmacyy-tech',component:PharmacyyTechComponent},
  {path:'devopss-tech',component:DevopssTechComponent},
  {path:'aaiss-tech',component:AaissTechComponent},
  {path:'ddevops-tech',component:DdevopsTechComponent},
  {path:'pit-tech',component:PitTechComponent},
  {path:'rsvipodd1-tech',component:Rsvipodd1TechComponent},
  {path:'rsvipodd2-tech',component:Rsvipodd2TechComponent},
  {path:'peoplecart',component:PeoplecartComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
