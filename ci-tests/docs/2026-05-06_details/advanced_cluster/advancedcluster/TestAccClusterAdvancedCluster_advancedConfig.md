# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters | dev | out_of_capacity | 25.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 hours
- 2026-04-08 PASS 43 minutes
- 2026-04-09 PASS 58 minutes
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 36 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 48 minutes
- 2026-04-14 PASS 40 minutes
- 2026-04-15 PASS 47 minutes
- 2026-04-16

### Error 2026-04-16T00:53:02+00:00
```
2026-04-16T00:53:02.4655620Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-04-16T00:54:54.2206189Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2026-04-16T00:55:19.0016321Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-04-16T00:55:19.0017587Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:19.001363336Z, ProjectID: 69e032b21ec945fedc7295a9, Cluster name: test-acc-tf-c-4870995210959007072
2026-04-16T00:55:19.7293754Z   
2026-04-16T00:55:19.7295074Z     resource_test.go:324: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:55:19.7295808Z         
2026-04-16T00:55:19.7296252Z         Error: Error in create
2026-04-16T00:55:19.7296694Z         
2026-04-16T00:55:19.7297281Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:19.7298510Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:19.7299437Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:19.7299763Z         
2026-04-16T00:55:19.7300195Z         cluster name: test-acc-tf-c-4870995210959007072, API error details:
2026-04-16T00:55:19.7300901Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters
2026-04-16T00:55:19.7301626Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:19.7302293Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:19.7302814Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:19.7762958Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (25.79s)
```

- 2026-04-17 PASS 45 minutes
- 2026-04-18 PASS 54 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 53 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 47 minutes
- 2026-04-25 PASS 40 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 48 minutes
- 2026-04-28 PASS an hour
- 2026-04-29 PASS 49 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 47 minutes
- 2026-05-02 PASS 43 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 48 minutes
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 38 minutes
  - PASS 36 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 41 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 40 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 43 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 43 minutes
- 2026-05-04 PASS 41 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 42 minutes
