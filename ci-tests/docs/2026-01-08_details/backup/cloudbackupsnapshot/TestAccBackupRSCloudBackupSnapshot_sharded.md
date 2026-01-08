# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929af4f6cc389e7a46c/clusters | dev | flaky_500 | 6.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-12-11 PASS 30 minutes
- 2025-12-12 PASS 31 minutes
- 2025-12-13 PASS 27 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 26 minutes
- 2025-12-16 PASS 25 minutes
- 2025-12-17 PASS 29 minutes
- 2025-12-18 PASS 29 minutes
- 2025-12-19 PASS 31 minutes
- 2025-12-20 PASS 27 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 30 minutes
- 2025-12-23 PASS 25 minutes
- 2025-12-24 PASS 31 minutes
- 2025-12-25 PASS 40 minutes
- 2025-12-26 PASS 26 minutes
- 2025-12-27 PASS 25 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 25 minutes
- 2025-12-31 PASS 29 minutes
- 2026-01-01 PASS 25 minutes
- 2026-01-02 PASS 29 minutes
- 2026-01-03 PASS 25 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 29 minutes
- 2026-01-06 PASS 26 minutes
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8340011Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-07T00:35:52.8342064Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-07T00:35:52.8376022Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-07T00:35:52.8376914Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:42.342812011Z, ProjectID: 695da929af4f6cc389e7a46c, Cluster name: test-acc-tf-c-1566774599038864217
2026-01-07T00:35:52.8388854Z    test_working_directory=/tmp/plugintest2143002858 test_step_number=1
2026-01-07T00:35:52.8389418Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:35:52.8389783Z         
2026-01-07T00:35:52.8390050Z         Error: Error in create
2026-01-07T00:35:52.8390298Z         
2026-01-07T00:35:52.8390664Z           with mongodbatlas_advanced_cluster.my_cluster,
2026-01-07T00:35:52.8391349Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2026-01-07T00:35:52.8391999Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2026-01-07T00:35:52.8392324Z         
2026-01-07T00:35:52.8392753Z         cluster name: test-acc-tf-c-1566774599038864217, API error details:
2026-01-07T00:35:52.8393560Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929af4f6cc389e7a46c/clusters
2026-01-07T00:35:52.8394559Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8395290Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8395688Z         BadRequestDetail: 
2026-01-07T00:35:52.8396038Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (6.41s)
```

- 2026-01-08 PASS 26 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 25 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 30 minutes
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
- 2026-01-08 PASS 27 minutes
