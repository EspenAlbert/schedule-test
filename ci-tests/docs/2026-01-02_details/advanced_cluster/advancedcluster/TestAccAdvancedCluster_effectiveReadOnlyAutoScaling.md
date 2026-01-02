# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveReadOnlyAutoScaling Test Details
# Found 34 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-04 09:14](#error-2025-12-04t0914430000) | CLUSTER_NOT_FOUND /api/atlas/v2/groups/693151016b3d821ff96342a2/clusters | dev | 905.05s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04
  - PASS 27 minutes
  - FAIL 15 minutes

### Error 2025-12-04T09:14:43+00:00
```
2025-12-04T09:14:43.3551067Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2025-12-04T09:16:29.1053445Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2025-12-04T09:29:01.9045181Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2025-12-04T09:29:01.9045923Z     effective_fields_test.go:242: Step 2/2 error: Error running apply: exit status 1
2025-12-04T09:29:01.9046452Z         
2025-12-04T09:29:01.9047082Z         Error: error reading advanced cluster list
2025-12-04T09:29:01.9047535Z         
2025-12-04T09:29:01.9047892Z           with data.mongodbatlas_advanced_clusters.test,
2025-12-04T09:29:01.9048531Z           on terraform_plugin_test.tf line 53, in data "mongodbatlas_advanced_clusters" "test":
2025-12-04T09:29:01.9049104Z           53: 		data "mongodbatlas_advanced_clusters" "test" {
2025-12-04T09:29:01.9049409Z         
2025-12-04T09:29:01.9049711Z         project ID 693151016b3d821ff96342a2. Error
2025-12-04T09:29:01.9050308Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693151016b3d821ff96342a2/clusters
2025-12-04T09:29:01.9050993Z         GET: HTTP 404 Not Found (Error code: "CLUSTER_NOT_FOUND") Detail: No cluster
2025-12-04T09:29:01.9051542Z         named test-acc-tf-c-4242073511502558918 exists in group
2025-12-04T09:29:01.9052036Z         693151016b3d821ff96342a2. Reason: Not Found. Params:
2025-12-04T09:29:01.9052532Z         [test-acc-tf-c-4242073511502558918 693151016b3d821ff96342a2],
2025-12-04T09:29:01.9052909Z         BadRequestDetail: 
2025-12-04T09:31:34.5986317Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (905.50s)
```

  - PASS 14 minutes
- 2025-12-05 PASS 23 minutes
- 2025-12-06 PASS 19 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 16 minutes
- 2025-12-09 PASS 19 minutes
- 2025-12-10
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-12-11 PASS 21 minutes
- 2025-12-12 PASS 18 minutes
- 2025-12-13 PASS 18 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 16 minutes
- 2025-12-16 PASS 16 minutes
- 2025-12-17 PASS 26 minutes
- 2025-12-18 PASS 23 minutes
- 2025-12-19 PASS 24 minutes
- 2025-12-20 PASS 20 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23 PASS 20 minutes
- 2025-12-24 PASS 24 minutes
- 2025-12-25 PASS 31 minutes
- 2025-12-26 PASS 22 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 16 minutes
- 2025-12-31 PASS 22 minutes
- 2026-01-01 PASS 19 minutes
- 2026-01-02 PASS 20 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 13 minutes
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 18 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 14 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 20 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 14 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
