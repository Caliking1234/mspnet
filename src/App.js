import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactUsPage from "./components/ContactUsPage";
import AboutUsPage from "./components/AboutUsPage";
import IntegratedServiceCenter from "./components/IntegratedServiceCenter";
import NetworkLifecycleManagment from "./components/NetworkLifecycleManagment";
import Proactive from "./components/Proactive";
import NetworkManagement from "./components/NetworkManagement";
import NetworkSecurityManagement from "./components/NetworkSecurityManagement";
import PenetrationTesting from "./components/PenetrationTesting";
import MalwareProtection from "./components/MalwareProtection";
import VulnerabilityManagement from "./components/VulnerabilityManagement";
import NetworkInfrastructureDesign from "./components/NetworkInfrastructureDesign";
import NetworkOptimization from "./components/NetworkOptimization";
import WanOptimization from "./components/WanOptimization";
import NetworkRefresh from "./components/NetworkRefresh";
import TechRefresh from "./components/TechRefresh";
import HardwareMaintenance from "./components/HardwareMaintenance";
import NetworkMigration from "./components/NetworkMigration";
import HardwareRefresh from "./components/HardwareRefresh";
import SDWANSolutio from "./components/SDWANSolution";
import CloudMigration from "./components/CloudMigration";
import ChatWithUS from "./components/ChatWithUS";
import ITConsultancy from "./components/ITConsultancy";
import SDWANConsultancy from "./components/SDWANConsultancy";
import ManagedITServices from "./components/ManagedITServices";
import BreakFix from "./components/BreakFix";
import GlobalOperationCenter from "./components/GlobalOperationCenter";
import EnterpriseNetworking from "./components/EnterpriseNetworking";
import MSSP from "./components/MSSP";
import SDWANImplementation from "./components/SDWANImplementation";
import SDSEcurityServices from "./components/SDSEcurityServices";
import SDWANRequirements from "./components/SDWANRequirements";
import SDWANArchitecture from "./components/SDWANArchitecture";
import SupplierManagement from "./components/SupplierManagement";
import EducationCaseStudy from "./components/EducationCaseStudy";
import HealthcareCaseStudy from "./components/HealthcareCaseStudy";
import HospitalityCaseStudy from "./components/HospitalityCaseStudy";
import ManufacturingCaseStudy from "./components/ManufacturingCaseStudy";
import ITNEtworkProject from "./components/ITNEtworkProject";
import ITMigrationProjecct from "./components/ITMigrationProjecct";
import ITArchitectureProject from "./components/ITArchitectureProject";
import SystemMigration from "./components/SystemMigration";
import ITSecurityProject from "./components/ITSecurityProject";
import RiskSecurityManagement from "./components/RiskSecurityManagement";
function App() {
  return (
    <div className=" font-customised1">
      <Router>
        <Routes>
          <Route path="/mspnet" element={<HomePage />} exact />
          <Route path="/contactus" element={<ContactUsPage />} exact />
          <Route path="/aboutus" element={<AboutUsPage />} exact />
          <Route
            path="/integrated-service-center"
            element={<IntegratedServiceCenter />}
            exact
          />
          <Route
            path="/network-lifecycle-managment"
            element={<NetworkLifecycleManagment />}
            exact
          />
          <Route
            path="/proactive-monitoring-alert-managment"
            element={<Proactive />}
            exact
          />
          <Route
            path="/network-managment"
            element={<NetworkManagement />}
            exact
          />
          <Route
            path="network-security-managment"
            element={<NetworkSecurityManagement />}
            exact
          />
          <Route
            path="/penetration-testing"
            element={<PenetrationTesting />}
            exact
          />
          <Route
            path="/malware-protection-services"
            element={<MalwareProtection />}
            exact
          />
          <Route
            path="/vulnerability-managment"
            element={<VulnerabilityManagement />}
            exact
          />
          <Route
            path="/network-infrastructure-design"
            element={<NetworkInfrastructureDesign />}
            exact
          />
          <Route
            path="/network-optimization"
            element={<NetworkOptimization />}
            exact
          />
          <Route path="/wan-optimization" element={<WanOptimization />} exact />
          <Route path="/system-migration" element={<SystemMigration />} exact />
          <Route path="/network-refresh" element={<NetworkRefresh />} exact />
          <Route path="/tech-refresh" element={<TechRefresh />} exact />
          <Route
            path="/hardware-maintenance"
            element={<HardwareMaintenance />}
            exact
          />
          <Route
            path="/network-migration"
            element={<NetworkMigration />}
            exact
          />
          <Route path="/hardware-refresh" element={<HardwareRefresh />} exact />
          <Route path="/sd-wan-sol" element={<SDWANSolutio />} exact />
          <Route path="/cloud-migration" element={<CloudMigration />} exact />
          <Route path="/it-constancy" element={<ITConsultancy />} exact />
          <Route
            path="/sd-wan-consultancy-services"
            element={<SDWANConsultancy />}
            exact
          />
          <Route
            path="/managed-services"
            element={<ManagedITServices />}
            exact
          />
          <Route path="/break-fix" element={<BreakFix />} exact />
          <Route
            path="/global-operation-center"
            element={<GlobalOperationCenter />}
            exact
          />
          <Route
            path="/enterprise-networking"
            element={<EnterpriseNetworking />}
            exact
          />
          <Route
            path="/mssp-managed-security-service"
            element={<MSSP />}
            exact
          />
          <Route
            path="/sd-wan-implementation"
            element={<SDWANImplementation />}
            exact
          />
          <Route
            path="/sd-wan-security-services"
            element={<SDSEcurityServices />}
            exact
          />
          <Route
            path="/sd-wan-requirements"
            element={<SDWANRequirements />}
            exact
          />
          <Route
            path="/sd-wan-sase-architecture"
            element={<SDWANArchitecture />}
            exact
          />
          <Route
            path="/cybersecurity-and-risk-transformation-services"
            element={<SDWANArchitecture />}
            exact
          />
          <Route
            path="/supplier-management"
            element={<SupplierManagement />}
            exact
          />
          <Route path="/education" element={<EducationCaseStudy />} exact />
          <Route path="/healthcare" element={<HealthcareCaseStudy />} exact />
          <Route path="/hospitality" element={<HospitalityCaseStudy />} exact />
          <Route
            path="/manufacturing"
            element={<ManufacturingCaseStudy />}
            exact
          />
          <Route
            path="/it-network-project"
            element={<ITNEtworkProject />}
            exact
          />
          <Route
            path="/it-migration-project"
            element={<ITMigrationProjecct />}
            exact
          />
          <Route
            path="/it-security-project"
            element={<ITSecurityProject />}
            exact
          />
          <Route
            path="/it-architecture-project"
            element={<ITArchitectureProject />}
            exact
          />
          <Route
            path="/it-risk-security-management"
            element={<RiskSecurityManagement />}
            exact
          />
        </Routes>
      </Router>
      <ChatWithUS />
    </div>
  );
}

export default App;
