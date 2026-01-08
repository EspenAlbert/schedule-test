# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters/test-acc-tf-c-1659749002036327461 | dev | flaky_500 | 41.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 minutes
  - PASS 16 minutes
- 2025-12-11 PASS 24 minutes
- 2025-12-12 PASS 24 minutes
- 2025-12-13 PASS 21 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 18 minutes
- 2025-12-16 PASS 20 minutes
- 2025-12-17 PASS 24 minutes
- 2025-12-18 PASS 21 minutes
- 2025-12-19 PASS 25 minutes
- 2025-12-20 PASS 20 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 22 minutes
- 2025-12-23 PASS 18 minutes
- 2025-12-24 PASS 23 minutes
- 2025-12-25 PASS 30 minutes
- 2025-12-26 PASS 20 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 19 minutes
- 2025-12-31 PASS 23 minutes
- 2026-01-01 PASS 18 minutes
- 2026-01-02 PASS 22 minutes
- 2026-01-03 PASS 15 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 22 minutes
- 2026-01-06 PASS 18 minutes
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6473990Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-01-07T00:41:24.6477852Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-01-07T00:41:24.6480771Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-01-07T00:41:24.6481585Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:33:10.152553032Z, ProjectID: 695da9b9af4f6cc389e946b2, Cluster name: test-acc-tf-c-1659749002036327461
2026-01-07T00:41:24.6605329Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-01-07T00:41:24.6606215Z     resource_test.go:131: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:41:24.6606866Z         
2026-01-07T00:41:24.6607599Z         Error: Error in create
2026-01-07T00:41:24.6608040Z         
2026-01-07T00:41:24.6608699Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6610137Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6611359Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6611956Z         
2026-01-07T00:41:24.6612792Z         cluster=test-acc-tf-c-1659749002036327461 didn't reach desired state: IDLE,
2026-01-07T00:41:24.6613503Z         error:
2026-01-07T00:41:24.6615014Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters/test-acc-tf-c-1659749002036327461
2026-01-07T00:41:24.6616484Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6617590Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6618283Z         BadRequestDetail: 
2026-01-07T00:41:24.6618832Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (41.36s)
```

- 2026-01-08 PASS 20 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 18 minutes
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
- 2025-12-21 PASS 17 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 19 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 20 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
