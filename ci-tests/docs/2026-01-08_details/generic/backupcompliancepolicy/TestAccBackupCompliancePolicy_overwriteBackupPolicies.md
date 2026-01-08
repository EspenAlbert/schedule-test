# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92bd59b8466ea71d5e1/clusters/test-acc-tf-c-2005731470796552552 | dev | flaky_500 | 67.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-12-11 PASS 15 minutes
- 2025-12-12 PASS 19 minutes
- 2025-12-13 PASS 15 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 minutes
- 2025-12-16 PASS 14 minutes
- 2025-12-17 PASS 16 minutes
- 2025-12-18 PASS 17 minutes
- 2025-12-19 PASS 16 minutes
- 2025-12-20 PASS 18 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 18 minutes
- 2025-12-23 PASS 18 minutes
- 2025-12-24 PASS 14 minutes
- 2025-12-25 PASS 21 minutes
- 2025-12-26 PASS 14 minutes
- 2025-12-27 PASS 14 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 14 minutes
- 2025-12-31 PASS 14 minutes
- 2026-01-01 PASS 12 minutes
- 2026-01-02 PASS 14 minutes
- 2026-01-03 PASS 12 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 17 minutes
- 2026-01-06 PASS 14 minutes
- 2026-01-07

### Error 2026-01-07T00:31:47+00:00
```
2026-01-07T00:31:47.1109117Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-01-07T00:31:47.1115832Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-01-07T00:31:47.1192638Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-01-07T00:31:47.1193354Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:47.1193840Z         
2026-01-07T00:31:47.1194151Z         Error: Error in create
2026-01-07T00:31:47.1194447Z         
2026-01-07T00:31:47.1194841Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:31:47.1195550Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:31:47.1196223Z           25: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:31:47.1196603Z         
2026-01-07T00:31:47.1197084Z         cluster=test-acc-tf-c-2005731470796552552 didn't reach desired state: IDLE,
2026-01-07T00:31:47.1197536Z         error:
2026-01-07T00:31:47.1198264Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d5e1/clusters/test-acc-tf-c-2005731470796552552
2026-01-07T00:31:47.1199082Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:47.1199699Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:47.1200141Z         BadRequestDetail: 
2026-01-07T00:31:47.1211956Z   
2026-01-07T00:31:47.1212470Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:31:47.1212952Z         
2026-01-07T00:31:47.1213298Z         Error: error when destroying resource
2026-01-07T00:31:47.1213744Z         
2026-01-07T00:31:47.1214158Z         error deleting project (695da92bd59b8466ea71d5e1):
2026-01-07T00:31:47.1214765Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d5e1
2026-01-07T00:31:47.1215282Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:31:47.1215855Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:31:47.1216519Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:31:47.1217004Z         Params: [], BadRequestDetail: 
2026-01-07T00:31:47.1217472Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (67.50s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 13 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 13 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 12 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 15 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 minutes
