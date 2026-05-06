# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032f81ec945fedc73155a/clusters | dev | out_of_capacity | 10.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 23 minutes
- 2026-04-09 PASS 45 minutes
- 2026-04-10 PASS 26 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 23 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 21 minutes
- 2026-04-16

### Error 2026-04-16T00:53:15+00:00
```
2026-04-16T00:53:15.8003142Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-04-16T00:54:54.0244428Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2026-04-16T00:55:03.9917940Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-04-16T00:55:03.9919713Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:03.991547311Z, ProjectID: 69e032f81ec945fedc73155a, Cluster name: test-acc-tf-c-7296921170472881317
2026-04-16T00:55:04.7099363Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-04-16T00:55:04.7100552Z     resource_test.go:823: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:55:04.7101437Z         
2026-04-16T00:55:04.7102073Z         Error: Error in create
2026-04-16T00:55:04.7102792Z         
2026-04-16T00:55:04.7103613Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:04.7105424Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:04.7106907Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:04.7107979Z         
2026-04-16T00:55:04.7109088Z         cluster name: test-acc-tf-c-7296921170472881317, API error details:
2026-04-16T00:55:04.7110296Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032f81ec945fedc73155a/clusters
2026-04-16T00:55:04.7143935Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:04.7147128Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:04.7152053Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:04.8048609Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10.82s)
```

- 2026-04-17 PASS 22 minutes
- 2026-04-18 PASS 31 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 29 minutes
- 2026-04-22 PASS 34 minutes
- 2026-04-23 PASS 38 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 23 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 22 minutes
- 2026-04-28 PASS 22 minutes
- 2026-04-29 PASS 23 minutes
- 2026-04-30 PASS 34 minutes
- 2026-05-01 PASS 18 minutes
- 2026-05-02 PASS 21 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 24 minutes
- 2026-05-05 PASS 43 minutes
- 2026-05-06 PASS 34 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 18 minutes
  - PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 21 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 21 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 25 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 19 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes
