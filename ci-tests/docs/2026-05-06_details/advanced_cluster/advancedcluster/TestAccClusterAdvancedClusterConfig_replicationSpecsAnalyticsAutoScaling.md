# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters | dev | out_of_capacity | 30.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 3 hours
- 2026-04-08 PASS 48 minutes
- 2026-04-09 PASS an hour
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 39 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 54 minutes
- 2026-04-14 PASS 42 minutes
- 2026-04-15 PASS 48 minutes
- 2026-04-16

### Error 2026-04-16T00:53:02+00:00
```
2026-04-16T00:53:02.4661201Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-04-16T00:54:54.2343885Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-04-16T00:55:24.0052296Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-04-16T00:55:24.0054673Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:24.004899809Z, ProjectID: 69e032b21ec945fedc7295a9, Cluster name: test-acc-tf-c-8088322444007023513
2026-04-16T00:55:24.7516799Z    test_name=TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform
2026-04-16T00:55:24.7517998Z     resource_test.go:461: Step 1/5 error: Error running apply: exit status 1
2026-04-16T00:55:24.7518410Z         
2026-04-16T00:55:24.7518663Z         Error: Error in create
2026-04-16T00:55:24.7518906Z         
2026-04-16T00:55:24.7519233Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:24.7519912Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:24.7520554Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:24.7520883Z         
2026-04-16T00:55:24.7521313Z         cluster name: test-acc-tf-c-8088322444007023513, API error details:
2026-04-16T00:55:24.7522012Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters
2026-04-16T00:55:24.7522725Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:24.7523401Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:24.7523919Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:24.7980217Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (30.81s)
```

- 2026-04-17 PASS 50 minutes
- 2026-04-18 PASS 58 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 56 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 50 minutes
- 2026-04-25 PASS 42 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 49 minutes
- 2026-04-28 PASS 49 minutes
- 2026-04-29 PASS 49 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 50 minutes
- 2026-05-02 PASS 44 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 50 minutes
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 43 minutes
  - PASS 40 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 40 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 44 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 46 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 43 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 45 minutes
