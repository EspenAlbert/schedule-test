# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929af4f6cc389e7a46c/clusters/test-acc-tf-c-1676972696490650074 | dev | flaky_500 | 131.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 24 minutes
  - PASS 20 minutes
- 2025-12-11 PASS 23 minutes
- 2025-12-12 PASS 22 minutes
- 2025-12-13 PASS 21 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 23 minutes
- 2025-12-16 PASS 22 minutes
- 2025-12-17 PASS 25 minutes
- 2025-12-18 PASS 21 minutes
- 2025-12-19 PASS 22 minutes
- 2025-12-20 PASS 22 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 21 minutes
- 2025-12-23 PASS 23 minutes
- 2025-12-24 PASS 24 minutes
- 2025-12-25 PASS 30 minutes
- 2025-12-26 PASS 23 minutes
- 2025-12-27 PASS 21 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 23 minutes
- 2025-12-31 PASS 22 minutes
- 2026-01-01 PASS 20 minutes
- 2026-01-02 PASS 24 minutes
- 2026-01-03 PASS 21 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 21 minutes
- 2026-01-06 PASS 21 minutes
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8339290Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-01-07T00:35:52.8342431Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2026-01-07T00:35:52.8396450Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-01-07T00:35:52.8397320Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:47.346439948Z, ProjectID: 695da929af4f6cc389e7a46c, Cluster name: test-acc-tf-c-1676972696490650074
2026-01-07T00:35:52.8432002Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-01-07T00:35:52.8432501Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:52.8432871Z         
2026-01-07T00:35:52.8433128Z         Error: Error in create
2026-01-07T00:35:52.8433381Z         
2026-01-07T00:35:52.8433741Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8434733Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8435401Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8435747Z         
2026-01-07T00:35:52.8436216Z         cluster=test-acc-tf-c-1676972696490650074 didn't reach desired state: IDLE,
2026-01-07T00:35:52.8436626Z         error:
2026-01-07T00:35:52.8437351Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929af4f6cc389e7a46c/clusters/test-acc-tf-c-1676972696490650074
2026-01-07T00:35:52.8438170Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8438756Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8439147Z         BadRequestDetail: 
2026-01-07T00:35:52.8439489Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (131.89s)
```

- 2026-01-08 PASS 24 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 19 minutes
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
- 2025-12-21 PASS 19 minutes
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
- 2026-01-04 PASS 17 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
