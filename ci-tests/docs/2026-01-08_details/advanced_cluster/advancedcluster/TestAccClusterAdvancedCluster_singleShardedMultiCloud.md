# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters/test-acc-tf-c-6868747184068380172 | dev | flaky_500 | 218.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 45 minutes
  - PASS 40 minutes
- 2025-12-11 PASS 42 minutes
- 2025-12-12 PASS 42 minutes
- 2025-12-13 PASS 39 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 hours
- 2025-12-16 PASS 40 minutes
- 2025-12-17 PASS 52 minutes
- 2025-12-18 PASS 39 minutes
- 2025-12-19 PASS 42 minutes
- 2025-12-20 PASS 46 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 45 minutes
- 2025-12-23 PASS 48 minutes
- 2025-12-24 PASS 45 minutes
- 2025-12-25 PASS 57 minutes
- 2025-12-26 PASS 39 minutes
- 2025-12-27 PASS 42 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 43 minutes
- 2025-12-31 PASS 44 minutes
- 2026-01-01 PASS 39 minutes
- 2026-01-02 PASS 44 minutes
- 2026-01-03 PASS 40 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 48 minutes
- 2026-01-06 PASS 40 minutes
- 2026-01-07

### Error 2026-01-07T00:30:54+00:00
```
2026-01-07T00:30:54.0495987Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-07T00:31:16.8350346Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-07T00:34:55.6679583Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-07T00:34:55.6680213Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:34:55.6680617Z         
2026-01-07T00:34:55.6680994Z         Error: Error in create
2026-01-07T00:34:55.6681685Z         
2026-01-07T00:34:55.6682096Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:34:55.6683127Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:34:55.6684010Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:34:55.6684489Z         
2026-01-07T00:34:55.6685411Z         cluster=test-acc-tf-c-6868747184068380172 didn't reach desired state: IDLE,
2026-01-07T00:34:55.6686142Z         error:
2026-01-07T00:34:55.6687472Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters/test-acc-tf-c-6868747184068380172
2026-01-07T00:34:55.6688769Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:55.6689664Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:55.6690296Z         BadRequestDetail: 
2026-01-07T00:34:55.7201073Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (218.89s)
```

- 2026-01-08 PASS 41 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 43 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 38 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 37 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 38 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 39 minutes
