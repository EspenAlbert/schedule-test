# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 12:46](#error-2026-09-29t1246310000) | USER_CANNOT_ACCESS_GROUP /api/atlas/v2/groups/6abbb3cea06cddcbdfd07dad/clusters/test-acc-tf-c-8418481401721805064 | dev | 368.02s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 26 minutes
- 2026-09-03
  - PASS 19 minutes
  - PASS 17 minutes
- 2026-09-04 PASS 25 minutes
- 2026-09-05 PASS 18 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 17 minutes
- 2026-09-08 PASS 17 minutes
- 2026-09-09 PASS 17 minutes
- 2026-09-10 PASS 19 minutes
- 2026-09-11
  - PASS an hour
  - PASS 24 minutes
- 2026-09-12 PASS 18 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 17 minutes
- 2026-09-15 PASS 21 minutes
- 2026-09-16 PASS 19 minutes
- 2026-09-17 PASS 19 minutes
- 2026-09-18 PASS 22 minutes
- 2026-09-19 PASS 18 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 17 minutes
- 2026-09-22
  - PASS 20 minutes
  - PASS 17 minutes
- 2026-09-23
  - PASS 17 minutes
  - PASS 17 minutes
- 2026-09-24 PASS 18 minutes
- 2026-09-25 PASS 18 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 16 minutes
- 2026-09-29
  - PASS 16 minutes
  - PASS 17 minutes
  - FAIL 6 minutes

### Error 2026-09-29T12:46:31+00:00
```
2026-09-29T12:46:31.1415858Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-09-29T12:49:18.1453701Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-09-29T12:55:25.8161375Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-09-29T12:55:25.8162280Z     resource_test.go:535: Step 1/4 error: Error running apply: exit status 1
2026-09-29T12:55:25.8162875Z         
2026-09-29T12:55:25.8163453Z         Error: Error in create
2026-09-29T12:55:25.8163759Z         
2026-09-29T12:55:25.8164144Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T12:55:25.8164933Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T12:55:25.8165774Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T12:55:25.8166202Z         
2026-09-29T12:55:25.8166825Z         cluster=test-acc-tf-c-8418481401721805064 didn't reach desired state: IDLE,
2026-09-29T12:55:25.8167360Z         error:
2026-09-29T12:55:25.8168418Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbb3cea06cddcbdfd07dad/clusters/test-acc-tf-c-8418481401721805064
2026-09-29T12:55:25.8169530Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-09-29T12:55:25.8170333Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-09-29T12:55:25.8170875Z         BadRequestDetail: 
2026-09-29T12:55:26.3209046Z   
2026-09-29T12:55:26.3209502Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-29T12:55:26.3210097Z         
2026-09-29T12:55:26.3210508Z         Error: error when destroying resource
2026-09-29T12:55:26.3210884Z         
2026-09-29T12:55:26.3211371Z         error deleting project (6abbb3cea06cddcbdfd07dad):
2026-09-29T12:55:26.3212193Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbb3cea06cddcbdfd07dad
2026-09-29T12:55:26.3212806Z         DELETE: HTTP 409 Conflict (Error code:
2026-09-29T12:55:26.3213276Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-09-29T12:55:26.3214010Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-09-29T12:55:26.3214399Z         Params: [], BadRequestDetail: 
2026-09-29T12:55:26.3214716Z --- FAIL: TestAccClusterAdvancedCluster_withTags (368.18s)
```

- 2026-09-30 PASS 17 minutes
- 2026-10-01 PASS 16 minutes
- 2026-10-02 PASS 17 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 17 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 15 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 16 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 16 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 19 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
