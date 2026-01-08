# backup/onlinearchive/TestAccBackupRSOnlineArchive_ErrorMessages Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters/test-acc-tf-c-7040535910159542425 | dev | flaky_500 | 201.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 18 minutes
  - PASS 14 minutes
- 2025-12-11 PASS 22 minutes
- 2025-12-12 PASS 21 minutes
- 2025-12-13 PASS 17 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 17 minutes
- 2025-12-16 PASS 17 minutes
- 2025-12-17 PASS 21 minutes
- 2025-12-18 PASS 16 minutes
- 2025-12-19 PASS 20 minutes
- 2025-12-20 PASS 16 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 18 minutes
- 2025-12-23 PASS 13 minutes
- 2025-12-24 PASS 19 minutes
- 2025-12-25 PASS 28 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 16 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 minutes
- 2025-12-31 PASS 19 minutes
- 2026-01-01 PASS 16 minutes
- 2026-01-02 PASS 19 minutes
- 2026-01-03 PASS 14 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 19 minutes
- 2026-01-06 PASS 15 minutes
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6475532Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-07T00:41:24.6478546Z === CONT  TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-07T00:41:24.6502719Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-07T00:41:24.6503579Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:33:20.157605338Z, ProjectID: 695da9b9af4f6cc389e946b2, Cluster name: test-acc-tf-c-7040535910159542425
2026-01-07T00:41:24.6671864Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-07T00:41:24.6672993Z     resource_test.go:219: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-07T00:41:24.6674265Z         
2026-01-07T00:41:24.6674711Z         Error: Error in create
2026-01-07T00:41:24.6675151Z         
2026-01-07T00:41:24.6675793Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6677068Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6678241Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6678853Z         
2026-01-07T00:41:24.6679683Z         cluster=test-acc-tf-c-7040535910159542425 didn't reach desired state: IDLE,
2026-01-07T00:41:24.6680430Z         error:
2026-01-07T00:41:24.6681751Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters/test-acc-tf-c-7040535910159542425
2026-01-07T00:41:24.6683233Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6684472Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6685199Z         BadRequestDetail: 
2026-01-07T00:41:24.6685803Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (201.96s)
```

- 2026-01-08 PASS 15 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 13 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 19 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 14 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 minutes
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
- 2026-01-08 PASS 15 minutes
