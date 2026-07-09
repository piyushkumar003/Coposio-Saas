export interface SaaSApp {
  id: string;
  name: string;
  category: string;
  oneLineDescription: string;
  authMethod: "OAuth2" | "API Key" | "Basic" | "None" | "JWT" | "SAML" | "Proprietary";
  selfServeVsGated: "Self-serve" | "Gated" | "Hybrid";
  apiSurface: "REST" | "GraphQL" | "gRPC" | "SOAP" | "Mixed" | "None";
  mcpSupport: "Official" | "Community" | "None" | "In-Progress";
  buildabilityVerdict: "Highly Build" | "Possible with Workarounds" | "Blocked" | "Unfeasible";
  mainBlocker: string;
  evidenceUrl: string;
  
  // Custom Metadata requested in guidelines (Data Schema section)
  confidenceScore: number; // 0-100
  verificationStatus: "Verified" | "Partially Verified" | "Failed" | "Unverified";
  lastChecked: string; // ISO date string
  documentationUrl: string;
  notes: string;
  reasoning: string;
  apiType: string; // e.g. "REST (JSON API)", "GraphQL API v4"
  oauthScopes: string[]; // e.g. ["read:user", "write:repo"]
  pricingGate: string; // e.g. "Free tier available", "Enterprise contact only", "Paid add-on"
  developerPortal: string; // URL
  toolkitReadiness: "Production Ready" | "Beta" | "Experimental" | "Not Ready";
  humanVerified: boolean;
}

export interface AgentLog {
  id: string;
  timestamp: string;
  agentName: "Research Agent" | "Evidence Agent" | "Verification Agent" | "Human Review Agent" | "Analytics Agent" | "System";
  type: "info" | "success" | "warning" | "error";
  message: string;
}

export interface ResearchWorkflowState {
  currentStep: "idle" | "researching" | "evidence_harvesting" | "verification" | "human_audit" | "completed";
  progressPercent: number;
  currentAppId: string | null;
  logs: AgentLog[];
}
