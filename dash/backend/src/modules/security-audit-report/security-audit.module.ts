import { Global, Module } from '@nestjs/common';
import {SecurityAuditReportService} from './services/security-audit-report.service';
import {SecurityAuditReportPdfHelpersService} from './services/security-audit-report-pdf-helpers.service';
import {SecurityAuditTrivyService} from './services/security-audit-trivy.service';
import {SecurityAuditClusterService} from './services/security-audit-cluster.service';
import {SecurityAuditToolServiceFactory} from './services/security-audit-tool-service.factory';
import {SecurityAuditKubesecService} from './services/security-audit-kubesec.service';

@Global()
@Module({
  providers: [
    SecurityAuditReportService,
    SecurityAuditReportPdfHelpersService,
    SecurityAuditClusterService,
    SecurityAuditTrivyService,
    SecurityAuditToolServiceFactory,
    SecurityAuditKubesecService,
  ],
  exports: [
    SecurityAuditReportService,
    SecurityAuditReportPdfHelpersService,
    SecurityAuditClusterService,
    SecurityAuditTrivyService,
    SecurityAuditToolServiceFactory,
    SecurityAuditKubesecService,
  ],
  controllers: []
})
export class SecurityAuditModule {}
