# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 36 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 27 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 21 minutes
- 2026-05-12 PASS 20 minutes
- 2026-05-13 PASS 23 minutes
- 2026-05-14 PASS 41 minutes
- 2026-05-15 PASS 17 minutes
- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 25 minutes
- 2026-05-19 PASS 18 minutes
- 2026-05-20 PASS 20 minutes
- 2026-05-21 PASS 19 minutes
- 2026-05-22 PASS 38 minutes
- 2026-05-23 PASS 28 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 21 minutes
- 2026-05-26 PASS 22 minutes
- 2026-05-27 PASS 54 minutes
- 2026-05-28

### Error 2026-05-28T01:02:44+00:00
```
2026-05-28T01:02:44.2474644Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-05-28T01:02:49.4528011Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-05-28T01:02:51.2674775Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-05-28T01:02:51.2676291Z     resource_test.go:562: Step 1/4 error: Error running apply: exit status 1
2026-05-28T01:02:51.2677370Z         
2026-05-28T01:02:51.2678818Z         Error: error creating project: test-acc-tf-p-3038457201096110482
2026-05-28T01:02:51.2679652Z         
2026-05-28T01:02:51.2680425Z           with mongodbatlas_project.cluster_project,
2026-05-28T01:02:51.2682109Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-28T01:02:51.2683442Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-28T01:02:51.2684164Z         
2026-05-28T01:02:51.2685156Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:51.2686577Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:51.2689079Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:51.2690398Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:51.2691290Z         BadRequestDetail: 
2026-05-28T01:02:51.3436698Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1.89s)
```

- 2026-05-29 PASS 21 minutes
- 2026-05-30 PASS 17 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02 PASS 16 minutes
- 2026-06-03 PASS 23 minutes
- 2026-06-04 PASS 38 minutes
- 2026-06-05 PASS 24 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 25 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 20 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 21 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
