# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da940af4f6cc389e85eca/clusters/test-acc-tf-c-6638823522928625796 | dev | flaky_500 | 37.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-12-11 PASS 16 minutes
- 2025-12-12 PASS 22 minutes
- 2025-12-13 PASS 17 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 minutes
- 2025-12-16 PASS 17 minutes
- 2025-12-17 PASS 16 minutes
- 2025-12-18 PASS 21 minutes
- 2025-12-19 PASS 18 minutes
- 2025-12-20 PASS 17 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 18 minutes
- 2025-12-23 PASS 15 minutes
- 2025-12-24 PASS 16 minutes
- 2025-12-25 PASS 25 minutes
- 2025-12-26 PASS 16 minutes
- 2025-12-27 PASS 16 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 minutes
- 2025-12-31 PASS 16 minutes
- 2026-01-01 PASS 13 minutes
- 2026-01-02 PASS 15 minutes
- 2026-01-03 PASS 16 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 17 minutes
- 2026-01-06 PASS 17 minutes
- 2026-01-07

### Error 2026-01-07T00:30:58+00:00
```
2026-01-07T00:30:58.1060131Z === RUN   TestAccClusterAdvancedCluster_priority
2026-01-07T00:31:16.9311139Z === CONT  TestAccClusterAdvancedCluster_priority
2026-01-07T00:31:19.0734743Z   diagnostic_detail=
2026-01-07T00:31:19.0741140Z    diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_resource_type=mongodbatlas_advanced_cluster tf_req_id=9076991f-3ad8-a8c2-d550-21d239b5ffff tf_rpc=ValidateResourceConfig
2026-01-07T00:31:54.2678962Z === NAME  TestAccClusterAdvancedCluster_priority
2026-01-07T00:31:54.2679447Z     resource_test.go:833: Step 2/4 error: Error running apply: exit status 1
2026-01-07T00:31:54.2679789Z         
2026-01-07T00:31:54.2680031Z         Error: Error in create
2026-01-07T00:31:54.2680275Z         
2026-01-07T00:31:54.2680589Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:54.2681171Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:54.2681715Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:54.2682014Z         
2026-01-07T00:31:54.2682444Z         cluster=test-acc-tf-c-6638823522928625796 didn't reach desired state: IDLE,
2026-01-07T00:31:54.2683124Z         error:
2026-01-07T00:31:54.2683892Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da940af4f6cc389e85eca/clusters/test-acc-tf-c-6638823522928625796
2026-01-07T00:31:54.2684643Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:54.2685175Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:54.2685545Z         BadRequestDetail: 
2026-01-07T00:31:54.3168617Z --- FAIL: TestAccClusterAdvancedCluster_priority (37.39s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 15 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 13 minutes
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
- 2026-01-04 PASS 12 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
