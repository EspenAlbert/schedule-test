# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:32](#error-2026-01-07t0032070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da923d59b8466ea71a207/clusters/test-acc-tf-c-4862655710625790391 | dev | flaky_500 | 69.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 16 minutes
  - PASS 13 minutes
- 2025-12-11 PASS 13 minutes
- 2025-12-12 PASS 15 minutes
- 2025-12-13 PASS 13 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 minutes
- 2025-12-16 PASS 13 minutes
- 2025-12-17 PASS 15 minutes
- 2025-12-18 PASS 18 minutes
- 2025-12-19 PASS 15 minutes
- 2025-12-20 PASS 14 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 16 minutes
- 2025-12-23 PASS 14 minutes
- 2025-12-24 PASS 15 minutes
- 2025-12-25 PASS 21 minutes
- 2025-12-26 PASS 12 minutes
- 2025-12-27 PASS 12 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 14 minutes
- 2025-12-31 PASS 12 minutes
- 2026-01-01 PASS 13 minutes
- 2026-01-02 PASS 16 minutes
- 2026-01-03 PASS 12 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 minutes
- 2026-01-06 PASS 15 minutes
- 2026-01-07

### Error 2026-01-07T00:32:07+00:00
```
2026-01-07T00:32:07.0506516Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-01-07T00:32:07.0508751Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-2785430007871521497
2026-01-07T00:32:07.0509676Z === CONT  TestAccStreamAccountDetailsDS_basic
2026-01-07T00:32:07.0510632Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:34.263214778Z, ProjectID: 695da923d59b8466ea71a207, Cluster name: test-acc-tf-c-4862655710625790391
2026-01-07T00:32:07.0525262Z   
2026-01-07T00:32:07.0525682Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:32:07.0526060Z         
2026-01-07T00:32:07.0526325Z         Error: Error in create
2026-01-07T00:32:07.0526572Z         
2026-01-07T00:32:07.0526940Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:32:07.0527641Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:32:07.0528313Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:32:07.0528654Z         
2026-01-07T00:32:07.0529114Z         cluster=test-acc-tf-c-4862655710625790391 didn't reach desired state: IDLE,
2026-01-07T00:32:07.0529789Z         error:
2026-01-07T00:32:07.0530505Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da923d59b8466ea71a207/clusters/test-acc-tf-c-4862655710625790391
2026-01-07T00:32:07.0531464Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:07.0532050Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:07.0532448Z         BadRequestDetail: 
2026-01-07T00:32:07.0532764Z --- FAIL: TestAccStreamAccountDetailsDS_basic (69.92s)
```

- 2026-01-08 PASS 13 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 11 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 12 minutes
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
- 2026-01-04 PASS 11 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 12 minutes
  - PASS 17 minutes
