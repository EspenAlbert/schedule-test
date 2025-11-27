# advanced_cluster/advancedcluster/TestAccAdvancedCluster_updateDeleteTimeoutFlex Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 22 seconds
- 2025-10-30 PASS 18 seconds
- 2025-10-31 PASS 22 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 20 seconds
- 2025-11-04 PASS 18 seconds
- 2025-11-05
  - PASS 19 seconds
  - PASS 19 seconds
- 2025-11-06 PASS 19 seconds
- 2025-11-07 PASS 15 seconds
- 2025-11-08 PASS 20 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 21 seconds
- 2025-11-11 PASS 19 seconds
- 2025-11-12 PASS 19 seconds
- 2025-11-13 PASS 21 seconds
- 2025-11-14 PASS 14 seconds
- 2025-11-15 PASS 30 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 20 seconds
- 2025-11-18 PASS 19 seconds
- 2025-11-19
  - PASS 32 seconds
  - PASS 20 seconds
- 2025-11-20
  - PASS 19 seconds
  - PASS 20 seconds
- 2025-11-21 PASS 20 seconds
- 2025-11-22 PASS 13 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 19 seconds
- 2025-11-25 PASS 19 seconds
- 2025-11-26 PASS 19 seconds
- 2025-11-27 PASS 20 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:31](#error-2025-11-02t0031200000) |  | qa | 5.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:31:20+00:00
```
2025-11-02T00:31:20.5602647Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-11-02T00:31:20.5699843Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-11-02T00:31:25.2788382Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-11-02T00:31:25.2789349Z     resource_test.go:2885: Step 1/4 error: Error running apply: exit status 1
2025-11-02T00:31:25.2790011Z         
2025-11-02T00:31:25.2791255Z         Error: error creating flex cluster: Cluster name test-acc-tf-8870417062734692184 (project_id=6906a6005ace12378d2965db).
2025-11-02T00:31:25.2792180Z         
2025-11-02T00:31:25.2792771Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.2793962Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.2795035Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.2904865Z         
2025-11-02T00:31:25.2906027Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a6005ace12378d2965db/flexClusters
2025-11-02T00:31:25.2906894Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.2907979Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.2909381Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.2910483Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.2911195Z         BadRequestDetail: 
2025-11-02T00:31:25.3069274Z   
2025-11-02T00:31:25.7121176Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (5.15s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 19 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 18 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 14 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 13 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
