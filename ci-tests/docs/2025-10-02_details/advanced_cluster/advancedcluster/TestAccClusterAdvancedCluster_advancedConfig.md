# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-03 00:26](#error-2025-09-03t0026190000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68b78b2ba89cf4184d270e1b/clusters | dev | 54.00s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03

### Error 2025-09-03T00:26:19+00:00
```
2025-09-03T00:26:19.9005259Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-09-03T00:27:34.8646563Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-09-03T00:28:24.8589067Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-09-03T00:28:24.8591113Z     pre_check.go:40: Time before creating cluster: 2025-09-03T00:28:24.858598246Z, ProjectID: 68b78b2ba89cf4184d270e1b, Cluster name: test-acc-tf-c-5451650618111936136
2025-09-03T00:28:25.8634321Z   
2025-09-03T00:28:25.8635080Z     resource_advanced_cluster_test.go:460: Step 1/4 error: Error running apply: exit status 1
2025-09-03T00:28:25.8635612Z         
2025-09-03T00:28:25.8640353Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b2ba89cf4184d270e1b/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-03T00:28:25.8642927Z         
2025-09-03T00:28:25.8643545Z           with mongodbatlas_advanced_cluster.test,
2025-09-03T00:28:25.8644735Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-03T00:28:25.8645837Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-03T00:28:25.8646398Z         
2025-09-03T00:28:25.9102799Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (54.01s)
```

- 2025-09-04 PASS 52 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 55 minutes
- 2025-09-07 PASS 49 minutes
- 2025-09-08
  - PASS 55 minutes
  - PASS 40 minutes
  - PASS 47 minutes
- 2025-09-09 PASS 51 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 37 minutes
- 2025-09-20 PASS 39 minutes
- 2025-09-21 PASS 34 minutes
- 2025-09-22 PASS 36 minutes
- 2025-09-23 PASS 38 minutes
- 2025-09-24 PASS 39 minutes
- 2025-09-25 PASS 39 minutes
- 2025-09-26 PASS 38 minutes
- 2025-09-27 PASS 42 minutes
- 2025-09-28 PASS 34 minutes
- 2025-09-29
  - PASS 49 minutes
  - PASS 31 minutes
- 2025-09-30
  - PASS 35 minutes
  - PASS 27 minutes
  - PASS 33 minutes
  - PASS 32 minutes
  - PASS 28 minutes
- 2025-10-01
  - PASS 34 minutes
  - PASS 28 minutes
  - PASS an hour
  - PASS 31 minutes
  - PASS 41 minutes
  - PASS 31 minutes
  - PASS 35 minutes
  - PASS 31 minutes
- 2025-10-02 PASS 43 minutes