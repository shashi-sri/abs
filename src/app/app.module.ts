import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { UploadComponent } from './components/upload/upload.component';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer.component';
import { AlbertsonsMainComponent } from './components/albertsons-main/albertsons-main.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
// import { TechstackComponent } from './components/techstackcatalog/techstackcatalog.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { OctxComponent } from './components/octx/octx.component';
import { OspgComponent } from './components/ospg/ospg.component';
import { StoreMobilityComponent } from './components/store-mobility/store-mobility.component';
import { AcupickComponent } from './components/acupick/acupick.component';
import { DomsComponent } from './components/doms/doms.component';
import { ControlTowerComponent } from './components/control-tower/control-tower.component';
import { B4uComponent } from './components/b4u/b4u.component';
import { FreshpassComponent } from './components/freshpass/freshpass.component';
import { GamificationComponent } from './components/gamification/gamification.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { CcmsComponent } from './components/ccms/ccms.component';
import { EpeComponent } from './components/epe/epe.component';
import { OmsComponent } from './components/oms/oms.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { UppComponent } from './components/upp/upp.component';
import { SelfHelpComponent } from './components/self-help/self-help.component';
import { VposComponent } from './components/vpos/vpos.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { DevopsComponent } from './components/devops/devops.component';
import { CatalogMarketplaceComponent } from './components/catalog-marketplace/catalog-marketplace.component';
import { CatalogRichnessComponent } from './components/catalog-richness/catalog-richness.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { EngineeringExcellenceComponent } from './components/engineering-excellence/engineering-excellence.component';
import { InStoreParityComponent } from './components/in-store-parity/in-store-parity.component';
import { InventoryAccuracyComponent } from './components/inventory-accuracy/inventory-accuracy.component';
import { SnsComponent } from './components/sns/sns.component';
import { UcaComponent } from './components/uca/uca.component';
import { AAISComponent } from './components/aais/aais.component';
import { DigitalDevOpsComponent } from './components/digital-dev-ops/digital-dev-ops.component';
import { ProductIntegratedToolsComponent } from './components/product-integrated-tools/product-integrated-tools.component';
import { RSVIPod1Component } from './components/rsvi-pod1/rsvi-pod1.component';
import { RSVIPod2Component } from './components/rsvi-pod2/rsvi-pod2.component';
import { CartComponent } from './components/All-techstack/cart/cart.component';
import { OctxxTechComponent } from './components/All-techstack/octxx-tech/octxx-tech.component';
import { OspggTechComponent } from './components/All-techstack/ospgg-tech/ospgg-tech.component';
import { StoreeTechComponent } from './components/All-techstack/storee-tech/storee-tech.component';
import { AcupickkTechComponent } from './components/All-techstack/acupickk-tech/acupickk-tech.component';
import { ControllTechComponent } from './components/All-techstack/controll-tech/controll-tech.component';
import { DomssTechComponent } from './components/All-techstack/domss-tech/domss-tech.component';
import { B4uuTechComponent } from './components/All-techstack/b4uu-tech/b4uu-tech.component';
import { FreshpasssTechComponent } from './components/All-techstack/freshpasss-tech/freshpasss-tech.component';
import { GamessTechComponent } from './components/All-techstack/gamess-tech/gamess-tech.component';
import { RewardssTechComponent } from './components/All-techstack/rewardss-tech/rewardss-tech.component';
import { CcmssTechComponent } from './components/All-techstack/ccmss-tech/ccmss-tech.component';
import { EpeeTechComponent } from './components/All-techstack/epee-tech/epee-tech.component';
import { OmssTechComponent } from './components/All-techstack/omss-tech/omss-tech.component';
import { PricingTechComponent } from './components/All-techstack/pricing-tech/pricing-tech.component';
import { UpppTechComponent } from './components/All-techstack/uppp-tech/uppp-tech.component';
import { CatalogmTechComponent } from './components/All-techstack/catalogm-tech/catalogm-tech.component';
import { CatalogrTechComponent } from './components/All-techstack/catalogr-tech/catalogr-tech.component';
import { CustomerrTechComponent } from './components/All-techstack/customerr-tech/customerr-tech.component';
import { EngexTechComponent } from './components/All-techstack/engex-tech/engex-tech.component';
import { StoreparityTechComponent } from './components/All-techstack/storeparity-tech/storeparity-tech.component';
import { InventoryaTechComponent } from './components/All-techstack/inventorya-tech/inventorya-tech.component';
import { SnssTechComponent } from './components/All-techstack/snss-tech/snss-tech.component';
import { UcaaTechComponent } from './components/All-techstack/ucaa-tech/ucaa-tech.component';
import { SelfhelppTechComponent } from './components/All-techstack/selfhelpp-tech/selfhelpp-tech.component';
import { VpossTechComponent } from './components/All-techstack/vposs-tech/vposs-tech.component';
import { PharmacyyTechComponent } from './components/All-techstack/pharmacyy-tech/pharmacyy-tech.component';
import { DevopssTechComponent } from './components/All-techstack/devopss-tech/devopss-tech.component';
import { AaissTechComponent } from './components/All-techstack/aaiss-tech/aaiss-tech.component';
import { DdevopsTechComponent } from './components/All-techstack/ddevops-tech/ddevops-tech.component';
import { PitTechComponent } from './components/All-techstack/pit-tech/pit-tech.component';
import { Rsvipodd1TechComponent } from './components/All-techstack/rsvipodd1-tech/rsvipodd1-tech.component';
import { Rsvipodd2TechComponent } from './components/All-techstack/rsvipodd2-tech/rsvipodd2-tech.component';
import { PeoplecartComponent } from './components/employee/peoplecart/peoplecart.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    HomeComponent,
    // TechstackComponent,
    UploadComponent,
    FooterComponent,
    AlbertsonsMainComponent,
    CatalogueComponent,
    
    OctxComponent,
    OspgComponent,
    StoreMobilityComponent,
    AcupickComponent,
    DomsComponent,
    ControlTowerComponent,
    B4uComponent,
    FreshpassComponent,
    GamificationComponent,
    RewardsComponent,
    CcmsComponent,
    EpeComponent,
    OmsComponent,
    PricingComponent,
    UppComponent,
    SelfHelpComponent,
    VposComponent,
    PharmacyComponent,
    DevopsComponent,
    CatalogMarketplaceComponent,
    CatalogRichnessComponent,
    CustomerReviewsComponent,
    EngineeringExcellenceComponent,
    InStoreParityComponent,
    InventoryAccuracyComponent,
    SnsComponent,
    UcaComponent,
    AAISComponent,
    DigitalDevOpsComponent,
    ProductIntegratedToolsComponent,
    RSVIPod1Component,
    RSVIPod2Component,
    CartComponent,
    OctxxTechComponent,
    OspggTechComponent,
    StoreeTechComponent,
    AcupickkTechComponent,
    ControllTechComponent,
    DomssTechComponent,
    B4uuTechComponent,
    FreshpasssTechComponent,
    GamessTechComponent,
    RewardssTechComponent,
    CcmssTechComponent,
    EpeeTechComponent,
    OmssTechComponent,
    PricingTechComponent,
    UpppTechComponent,
    CatalogmTechComponent,
    CatalogrTechComponent,
    CustomerrTechComponent,
    EngexTechComponent,
    StoreparityTechComponent,
    InventoryaTechComponent,
    SnssTechComponent,
    UcaaTechComponent,
    SelfhelppTechComponent,
    VpossTechComponent,
    PharmacyyTechComponent,
    DevopssTechComponent,
    AaissTechComponent,
    DdevopsTechComponent,
    PitTechComponent,
    Rsvipodd1TechComponent,
    Rsvipodd2TechComponent,
    PeoplecartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
