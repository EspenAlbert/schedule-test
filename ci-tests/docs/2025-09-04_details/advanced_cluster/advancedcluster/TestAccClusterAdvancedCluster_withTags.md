# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.02s
[2025-09-01 13:42](#error-2025-09-01t1342080000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68b5a30560c05d1e5a74ae54/clusters | dev | 9.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 29 minutes
- 2025-08-07 PASS 35 minutes
- 2025-08-08 PASS 20 minutes
- 2025-08-09 PASS 26 minutes
- 2025-08-10 PASS 31 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 17 minutes
- 2025-08-13 PASS 24 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 49 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 26 minutes
- 2025-08-19 PASS 22 minutes
- 2025-08-20
  - PASS 24 minutes
  - PASS 24 minutes
- 2025-08-21 PASS 20 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 21 minutes
- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 25 minutes
- 2025-08-27 PASS 30 minutes
- 2025-08-28 PASS 22 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 19 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.5262855Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-09-01T00:30:44.5139616Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-09-01T00:30:46.5303973Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-09-01T00:30:46.5304999Z     resource_advanced_cluster_test.go:666: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:46.5305984Z         
2025-09-01T00:30:46.5306864Z         Error: error creating project: test-acc-tf-p-2409394435214410424
2025-09-01T00:30:46.5307472Z         
2025-09-01T00:30:46.5308062Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.5309249Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.5310340Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.5310938Z         
2025-09-01T00:30:46.5311789Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.5312946Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.5314066Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.5315509Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.5316252Z         BadRequestDetail: 
2025-09-01T00:30:46.7102788Z --- FAIL: TestAccClusterAdvancedCluster_withTags (2.21s)
```

  - PASS 31 minutes
  - PASS an hour
  - PASS 22 minutes
  - PASS 18 minutes
  - FAIL 9 seconds

### Error 2025-09-01T13:42:08+00:00
```
2025-09-01T13:42:08.2994095Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-09-01T13:43:28.2636810Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-09-01T13:43:37.2078858Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-09-01T13:43:37.2079854Z     resource_advanced_cluster_test.go:666: Step 1/4 error: Error running apply: exit status 1
2025-09-01T13:43:37.2080529Z         
2025-09-01T13:43:37.2083071Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5a30560c05d1e5a74ae54/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-01T13:43:37.2085233Z         
2025-09-01T13:43:37.2086118Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T13:43:37.2087219Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T13:43:37.2088244Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T13:43:37.2088772Z         
2025-09-01T13:43:37.9931894Z --- FAIL: TestAccClusterAdvancedCluster_withTags (9.74s)
```

  - PASS 19 minutes
  - PASS 16 minutes
- 2025-09-02 PASS 22 minutes
- 2025-09-03 PASS 25 minutes
- 2025-09-04 PASS 25 minutes