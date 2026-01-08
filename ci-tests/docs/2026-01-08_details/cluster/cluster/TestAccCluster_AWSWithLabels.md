# cluster/cluster/TestAccCluster_AWSWithLabels Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-1359075254479866942 | dev | flaky_500 | 717.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 27 minutes
  - PASS 20 minutes
- 2025-12-11 PASS 25 minutes
- 2025-12-12 PASS 24 minutes
- 2025-12-13 PASS 23 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 minutes
- 2025-12-16 PASS 23 minutes
- 2025-12-17 PASS 26 minutes
- 2025-12-18 PASS 25 minutes
- 2025-12-19 PASS 25 minutes
- 2025-12-20 PASS 22 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 25 minutes
- 2025-12-23 PASS 24 minutes
- 2025-12-24 PASS 24 minutes
- 2025-12-25 PASS 35 minutes
- 2025-12-26 PASS 21 minutes
- 2025-12-27 PASS 23 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 23 minutes
- 2025-12-31 PASS 26 minutes
- 2026-01-01 PASS 22 minutes
- 2026-01-02 PASS 24 minutes
- 2026-01-03 PASS 22 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 25 minutes
- 2026-01-06 PASS 22 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.6594987Z === RUN   TestAccCluster_AWSWithLabels
2026-01-07T00:30:39.8945049Z === CONT  TestAccCluster_AWSWithLabels
2026-01-07T00:31:29.9079530Z === NAME  TestAccCluster_AWSWithLabels
2026-01-07T00:31:29.9080688Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:29.907707746Z, ProjectID: 695da92baf4f6cc389e7cd9f, Cluster name: test-acc-tf-c-1359075254479866942
2026-01-07T00:42:32.8956174Z === NAME  TestAccCluster_AWSWithLabels
2026-01-07T00:42:32.8956970Z     resource_cluster_test.go:621: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:42:32.8957530Z         
2026-01-07T00:42:32.8960030Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-1359075254479866942 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:42:32.8961755Z         
2026-01-07T00:42:32.8962237Z           with mongodbatlas_cluster.aws_with_labels,
2026-01-07T00:42:32.8963472Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "aws_with_labels":
2026-01-07T00:42:32.8964341Z           12: 		resource "mongodbatlas_cluster" "aws_with_labels" {
2026-01-07T00:42:32.8964801Z         
2026-01-07T00:42:32.9436626Z --- FAIL: TestAccCluster_AWSWithLabels (717.27s)
```

- 2026-01-08 PASS 23 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 22 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 20 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 22 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 23 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
