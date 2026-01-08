# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_sharded Test Details
# Found 19 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929af4f6cc389e7a46c/clusters/test-acc-tf-c-9183261771970176856 | dev | flaky_500 | 213.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 31 minutes
  - PASS 27 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 31 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 28 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 29 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 32 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 31 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 32 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 26 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 28 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 30 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 30 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8338547Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2026-01-07T00:35:52.8342800Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2026-01-07T00:35:52.8448074Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2026-01-07T00:35:52.8448621Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:52.8449013Z         
2026-01-07T00:35:52.8449275Z         Error: Error in create
2026-01-07T00:35:52.8449529Z         
2026-01-07T00:35:52.8449895Z           with mongodbatlas_advanced_cluster.my_cluster,
2026-01-07T00:35:52.8450580Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2026-01-07T00:35:52.8451230Z           14: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2026-01-07T00:35:52.8451569Z         
2026-01-07T00:35:52.8452038Z         cluster=test-acc-tf-c-9183261771970176856 didn't reach desired state: IDLE,
2026-01-07T00:35:52.8452447Z         error:
2026-01-07T00:35:52.8453167Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929af4f6cc389e7a46c/clusters/test-acc-tf-c-9183261771970176856
2026-01-07T00:35:52.8454083Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8454663Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8455060Z         BadRequestDetail: 
2026-01-07T00:35:52.8455407Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (213.44s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09 PASS 25 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 31 minutes
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
- 2025-12-28 PASS 26 minutes
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
- 2026-01-08 PASS 27 minutes
