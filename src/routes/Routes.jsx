import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Process from "../pages/Process";
import Services from "../pages/Services";
import WhyChooseUs from "../pages/WhyChooseUs";
import Telemarketing from "../pages/Telemarketing";
import Telesales from "../pages/Telesales";
import LeadGeneration from "../pages/LeadGeneration";
import Consultation from "../pages/Consultation";
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Career from "../pages/Career";

export const appRoutes = [
  {path:"/", component: Home},
  {path:"/home", component: Home},
  {path:"/about", component: About},
  {path:"/Services", component: Services},
  {path:"/Process", component: Process},
  {path:"/WhyChooseUs", component: WhyChooseUs},
  {path:"/gallery", component: Gallery},
  {path:"/contact", component: Contact},
  {path:"/telemarketing", component: Telemarketing},
  {path:"/telesales", component: Telesales},
  {path:"/lead-generation", component: LeadGeneration},
  {path:"/consultation", component: Consultation},
  {path:"/terms-conditions", component: TermsConditions},
  {path:"/privacy-policy", component: PrivacyPolicy},
  {path:"/career", component: Career},
]