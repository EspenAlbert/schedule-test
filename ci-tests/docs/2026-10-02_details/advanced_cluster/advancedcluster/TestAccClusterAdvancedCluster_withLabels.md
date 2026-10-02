# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 12:46](#error-2026-09-29t1246310000) | USER_CANNOT_ACCESS_GROUP /api/atlas/v2/groups/6abbb387a06cddcbdfcf92cb/clusters/test-acc-tf-c-13202026549257255 | dev | 489.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 16 minutes
- 2026-09-03
  - PASS 18 minutes
  - PASS 20 minutes
- 2026-09-04 PASS 26 minutes
- 2026-09-05 PASS 18 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 21 minutes
- 2026-09-08 PASS 18 minutes
- 2026-09-09 PASS 18 minutes
- 2026-09-10 PASS 19 minutes
- 2026-09-11
  - PASS an hour
  - PASS 19 minutes
- 2026-09-12 PASS 18 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 18 minutes
- 2026-09-15 PASS 20 minutes
- 2026-09-16 PASS 17 minutes
- 2026-09-17 PASS 20 minutes
- 2026-09-18 PASS 23 minutes
- 2026-09-19 PASS 17 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 16 minutes
- 2026-09-22
  - PASS 18 minutes
  - PASS 20 minutes
- 2026-09-23
  - PASS 20 minutes
  - PASS 19 minutes
- 2026-09-24 PASS 19 minutes
- 2026-09-25 PASS 20 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 17 minutes
- 2026-09-29
  - PASS 18 minutes
  - PASS 17 minutes
  - FAIL 8 minutes

### Error 2026-09-29T12:46:31+00:00
```
2026-09-29T12:46:31.1417098Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-09-29T12:48:07.2640793Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-09-29T12:56:15.9237144Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-09-29T12:56:15.9237634Z     resource_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-09-29T12:56:15.9238252Z         
2026-09-29T12:56:15.9238477Z         Error: Error in create
2026-09-29T12:56:15.9238755Z         
2026-09-29T12:56:15.9239068Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T12:56:15.9239715Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T12:56:15.9240376Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T12:56:15.9240663Z         
2026-09-29T12:56:15.9241053Z         cluster=test-acc-tf-c-13202026549257255 didn't reach desired state: IDLE,
2026-09-29T12:56:15.9241391Z         error:
2026-09-29T12:56:15.9241983Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbb387a06cddcbdfcf92cb/clusters/test-acc-tf-c-13202026549257255
2026-09-29T12:56:15.9242648Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-09-29T12:56:15.9243153Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-09-29T12:56:15.9243505Z         BadRequestDetail: 
2026-09-29T12:56:16.4107165Z    test_name=TestAccClusterAdvancedCluster_withLabels
2026-09-29T12:56:16.4107988Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-29T12:56:16.4108612Z         
2026-09-29T12:56:16.4109021Z         Error: error when destroying resource
2026-09-29T12:56:16.4109393Z         
2026-09-29T12:56:16.4109785Z         error deleting project (6abbb387a06cddcbdfcf92cb):
2026-09-29T12:56:16.4110280Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbb387a06cddcbdfcf92cb
2026-09-29T12:56:16.4110694Z         DELETE: HTTP 409 Conflict (Error code:
2026-09-29T12:56:16.4111148Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-09-29T12:56:16.4111673Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-09-29T12:56:16.4112050Z         Params: [], BadRequestDetail: 
2026-09-29T12:56:16.4112367Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (489.15s)
```

- 2026-09-30 PASS 17 minutes
- 2026-10-01 PASS 16 minutes
- 2026-10-02 PASS 18 minutes

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
- 2026-09-13 PASS 19 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 17 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 17 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 18 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 17 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
