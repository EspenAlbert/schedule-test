# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters | dev | flaky_500 | 25.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 22 minutes
  - PASS 20 minutes
- 2025-12-11 PASS 24 minutes
- 2025-12-12 PASS 24 minutes
- 2025-12-13 PASS 22 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 18 minutes
- 2025-12-16 PASS 20 minutes
- 2025-12-17 PASS 25 minutes
- 2025-12-18 PASS 21 minutes
- 2025-12-19 PASS 25 minutes
- 2025-12-20 PASS 21 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 23 minutes
- 2025-12-23 PASS 20 minutes
- 2025-12-24 PASS 24 minutes
- 2025-12-25 PASS 33 minutes
- 2025-12-26 PASS 21 minutes
- 2025-12-27 PASS 19 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 21 minutes
- 2025-12-31 PASS 22 minutes
- 2026-01-01 PASS 19 minutes
- 2026-01-02 PASS 22 minutes
- 2026-01-03 PASS 17 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 23 minutes
- 2026-01-06 PASS 17 minutes
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6473169Z === RUN   TestAccBackupRSOnlineArchive
2026-01-07T00:41:24.6478884Z === CONT  TestAccBackupRSOnlineArchive
2026-01-07T00:41:24.6504411Z === NAME  TestAccBackupRSOnlineArchive
2026-01-07T00:41:24.6505224Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:33:25.161096009Z, ProjectID: 695da9b9af4f6cc389e946b2, Cluster name: test-acc-tf-c-9091476210033100280
2026-01-07T00:41:24.6523092Z    test_terraform_path=/home/runner/work/_temp/03cd9d3b-deb9-4eb9-93dd-2447f2d621ee/terraform
2026-01-07T00:41:24.6524420Z     resource_test.go:35: Step 1/7 error: Error running apply: exit status 1
2026-01-07T00:41:24.6525090Z         
2026-01-07T00:41:24.6525546Z         Error: Error in create
2026-01-07T00:41:24.6525981Z         
2026-01-07T00:41:24.6526631Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6527924Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6529110Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6529709Z         
2026-01-07T00:41:24.6530455Z         cluster name: test-acc-tf-c-9091476210033100280, API error details:
2026-01-07T00:41:24.6531669Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters
2026-01-07T00:41:24.6532902Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6534153Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6534858Z         BadRequestDetail: 
2026-01-07T00:41:24.6535377Z --- FAIL: TestAccBackupRSOnlineArchive (25.88s)
```

- 2026-01-08 PASS 20 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 17 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 23 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 18 minutes
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
