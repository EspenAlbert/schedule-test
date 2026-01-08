# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95aaf4f6cc389e8a93b/clusters | dev | flaky_500 | 10.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 29 minutes
  - PASS 24 minutes
- 2025-12-11 PASS 29 minutes
- 2025-12-12 PASS 29 minutes
- 2025-12-13 PASS 27 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 24 minutes
- 2025-12-16 PASS 25 minutes
- 2025-12-17 PASS 25 minutes
- 2025-12-18 PASS 25 minutes
- 2025-12-19 PASS 29 minutes
- 2025-12-20 PASS 24 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23 PASS 22 minutes
- 2025-12-24 PASS 24 minutes
- 2025-12-25 PASS 33 minutes
- 2025-12-26 PASS 22 minutes
- 2025-12-27 PASS 21 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 22 minutes
- 2025-12-31 PASS 26 minutes
- 2026-01-01 PASS 23 minutes
- 2026-01-02 PASS 26 minutes
- 2026-01-03 PASS 21 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 27 minutes
- 2026-01-06 PASS 23 minutes
- 2026-01-07

### Error 2026-01-07T00:30:58+00:00
```
2026-01-07T00:30:58.1062449Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-07T00:31:16.9131988Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-07T00:31:26.9316386Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-07T00:31:26.9317036Z     resource_test.go:896: Step 1/8 error: Error running apply: exit status 1
2026-01-07T00:31:26.9317783Z         
2026-01-07T00:31:26.9318084Z         Error: Error in create
2026-01-07T00:31:26.9318335Z         
2026-01-07T00:31:26.9318718Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:26.9319492Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:26.9320047Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:26.9320455Z         
2026-01-07T00:31:26.9320842Z         cluster name: test-acc-tf-c-5220032007217091791, API error details:
2026-01-07T00:31:26.9321550Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95aaf4f6cc389e8a93b/clusters
2026-01-07T00:31:26.9322272Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:26.9323454Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:26.9323839Z         BadRequestDetail: 
2026-01-07T00:31:27.3530172Z   
2026-01-07T00:31:27.5161812Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-07T00:31:27.5162607Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:31:27.5163056Z         
2026-01-07T00:31:27.5163350Z         Error: error when destroying resource
2026-01-07T00:31:27.5163649Z         
2026-01-07T00:31:27.5163977Z         error deleting project (695da95aaf4f6cc389e8a93b):
2026-01-07T00:31:27.5164522Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95aaf4f6cc389e8a93b
2026-01-07T00:31:27.5164987Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:31:27.5165495Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:31:27.5166226Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:31:27.5166804Z         Params: [], BadRequestDetail: 
2026-01-07T00:31:27.5167254Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10.62s)
```

- 2026-01-08 PASS 22 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 23 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 22 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 22 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes
