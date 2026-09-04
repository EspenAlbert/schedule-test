# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBasic Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 20 minutes
- 2026-08-08 PASS 18 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 17 minutes
- 2026-08-11 PASS 18 minutes
- 2026-08-12 PASS 19 minutes
- 2026-08-13 PASS 17 minutes
- 2026-08-14 PASS 16 minutes
- 2026-08-15 PASS 17 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 15 minutes
- 2026-08-18 PASS 24 minutes
- 2026-08-19 PASS 19 minutes
- 2026-08-20 PASS 15 minutes
- 2026-08-21 PASS 18 minutes
- 2026-08-22 PASS 17 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 17 minutes
- 2026-08-25 PASS 17 minutes
- 2026-08-26 PASS 17 minutes
- 2026-08-27 PASS 18 minutes
- 2026-08-28 PASS 19 minutes
- 2026-08-29 PASS 15 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 18 minutes
- 2026-09-01 PASS 15 minutes
- 2026-09-02 PASS 15 minutes
- 2026-09-03
  - PASS 18 minutes
  - PASS 16 minutes
- 2026-09-04 PASS 38 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-09 00:27](#error-2026-08-09t0027220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a77c96acab0cbb77b09241b/clusters | qa | out_of_capacity | 8.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09

### Error 2026-08-09T00:27:22+00:00
```
2026-08-09T00:27:22.7679076Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-08-09T00:30:03.9396125Z === CONT  TestAccAdvancedCluster_effectiveBasic
2026-08-09T00:30:09.3883588Z === NAME  TestAccAdvancedCluster_effectiveBasic
2026-08-09T00:30:09.3884653Z     effective_fields_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-08-09T00:30:09.3885397Z         
2026-08-09T00:30:09.3885915Z         Error: Error in create
2026-08-09T00:30:09.3886411Z         
2026-08-09T00:30:09.3887035Z           with mongodbatlas_advanced_cluster.test,
2026-08-09T00:30:09.3888444Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-09T00:30:09.3889634Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-09T00:30:09.3890238Z         
2026-08-09T00:30:09.3891039Z         cluster name: test-acc-tf-c-7468685494419041883, API error details:
2026-08-09T00:30:09.3913036Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a77c96acab0cbb77b09241b/clusters
2026-08-09T00:30:09.3914780Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-08-09T00:30:09.3916100Z         region is currently out of capacity for the requested instance size. Reason:
2026-08-09T00:30:09.3917078Z         Conflict. Params: [], BadRequestDetail: 
2026-08-09T00:30:09.5000099Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (8.13s)
```

- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 18 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 20 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 16 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 16 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 15 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
