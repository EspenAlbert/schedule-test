# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/695da92aaf4f6cc389e7a74f/cloudProviderAccess/695da986af4f6cc389e915a3 | dev | flaky_500 | 27.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-12-11 PASS 22 minutes
- 2025-12-12 PASS 23 minutes
- 2025-12-13 PASS 24 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 18 minutes
- 2025-12-16 PASS 22 minutes
- 2025-12-17 PASS 22 minutes
- 2025-12-18 PASS 25 minutes
- 2025-12-19 PASS 20 minutes
- 2025-12-20 PASS 21 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 18 minutes
- 2025-12-23 PASS 22 minutes
- 2025-12-24 PASS 18 minutes
- 2025-12-25 PASS 32 minutes
- 2025-12-26 PASS 18 minutes
- 2025-12-27 PASS 21 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 20 minutes
- 2025-12-31 PASS 17 minutes
- 2026-01-01 PASS 22 minutes
- 2026-01-02 PASS 16 minutes
- 2026-01-03 PASS 21 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 18 minutes
- 2026-01-06 PASS 24 minutes
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8487835Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-01-07T00:35:52.8494283Z 2026/01/07 00:32:06 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92aaf4f6cc389e7a74f/cloudProviderAccess/695da986af4f6cc389e915a3 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7245860945517572284). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7245860945517572284], BadRequestDetail:  
2026-01-07T00:35:52.8495992Z 2026/01/07 00:32:06 retrying
2026-01-07T00:35:52.8503244Z   
2026-01-07T00:35:52.8503852Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:52.8504328Z         
2026-01-07T00:35:52.8504582Z         Error: Error in create
2026-01-07T00:35:52.8504835Z         
2026-01-07T00:35:52.8505197Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8505900Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8506548Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8506885Z         
2026-01-07T00:35:52.8507297Z         cluster name: test-acc-tf-c-6245708761990973261, API error details:
2026-01-07T00:35:52.8507973Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92aaf4f6cc389e7a74f/clusters
2026-01-07T00:35:52.8508657Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8509254Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8509641Z         BadRequestDetail: 
2026-01-07T00:35:52.8510087Z --- FAIL: TestAccBackupSnapshotExportJob_basic (27.19s)
```

- 2026-01-08 PASS 22 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 26 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 24 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 25 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 25 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 25 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
