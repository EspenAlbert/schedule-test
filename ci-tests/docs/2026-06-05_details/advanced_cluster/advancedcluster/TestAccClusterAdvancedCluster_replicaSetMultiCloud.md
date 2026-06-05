# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:01](#error-2026-05-28t0101260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09 PASS 48 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 54 minutes
- 2026-05-12 PASS 49 minutes
- 2026-05-13 PASS 50 minutes
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 51 minutes
- 2026-05-16 PASS 39 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 42 minutes
- 2026-05-20 PASS 51 minutes
- 2026-05-21 PASS 59 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 58 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 53 minutes
- 2026-05-26 PASS 42 minutes
- 2026-05-27 PASS 2 hours
- 2026-05-28

### Error 2026-05-28T01:01:26+00:00
```
2026-05-28T01:01:26.4728667Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-05-28T01:02:49.4524910Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-05-28T01:02:51.3485316Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-05-28T01:02:51.3486067Z     resource_test.go:151: Step 1/3 error: Error running apply: exit status 1
2026-05-28T01:02:51.3486516Z         
2026-05-28T01:02:51.3486986Z         Error: error creating project: test-acc-tf-p-7309707461361264232
2026-05-28T01:02:51.3487391Z         
2026-05-28T01:02:51.3488269Z           with mongodbatlas_project.cluster_project,
2026-05-28T01:02:51.3489022Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-28T01:02:51.3489913Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-28T01:02:51.3490386Z         
2026-05-28T01:02:51.3490922Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:51.3491844Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:51.3492545Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:51.3493227Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:51.3493688Z         BadRequestDetail: 
2026-05-28T01:02:51.3999841Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (1.95s)
```

- 2026-05-29 PASS 57 minutes
- 2026-05-30 PASS 42 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 43 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 55 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 49 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 43 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 52 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 45 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
