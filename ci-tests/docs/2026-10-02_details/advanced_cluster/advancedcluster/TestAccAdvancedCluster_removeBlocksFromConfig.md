# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-14 00:46](#error-2026-09-14t0046560000) |  | dev | timeout | 13014.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS an hour
- 2026-09-03
  - PASS an hour
  - PASS an hour
- 2026-09-04 PASS an hour
- 2026-09-05 PASS an hour
- 2026-09-06: MISSING
- 2026-09-07 PASS 2 hours
- 2026-09-08 PASS an hour
- 2026-09-09 PASS an hour
- 2026-09-10 PASS 44 minutes
- 2026-09-11
  - PASS an hour
  - PASS an hour
- 2026-09-12 PASS an hour
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:46:56+00:00
```
2026-09-14T00:46:56.6229342Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-09-14T00:48:26.6720682Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-09-14T04:08:42.7020612Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-09-14T04:08:42.7021371Z     resource_test.go:1063: Step 3/4 error: Error running apply: exit status 1
2026-09-14T04:08:42.7021948Z         
2026-09-14T04:08:42.7022258Z         Error: Error in update
2026-09-14T04:08:42.7022688Z         
2026-09-14T04:08:42.7023060Z           with mongodbatlas_advanced_cluster.test,
2026-09-14T04:08:42.7023962Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-14T04:08:42.7025013Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-14T04:08:42.7025474Z         
2026-09-14T04:08:42.7026170Z         cluster=test-acc-tf-c-3438517526752947694 didn't reach desired state: IDLE,
2026-09-14T04:08:42.7027222Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-09-14T04:08:42.7027956Z         'UPDATING', timeout: 3h0m0s)
2026-09-14T04:25:20.5156747Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (13014.28s)
```

- 2026-09-15 PASS an hour
- 2026-09-16 PASS 2 hours
- 2026-09-17 PASS 2 hours
- 2026-09-18 PASS an hour
- 2026-09-19 PASS 48 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 55 minutes
- 2026-09-22
  - PASS 51 minutes
  - PASS 50 minutes
- 2026-09-23
  - PASS an hour
  - PASS an hour
- 2026-09-24 PASS 50 minutes
- 2026-09-25 PASS 49 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 50 minutes
- 2026-09-29
  - PASS 49 minutes
  - PASS 58 minutes
  - PASS 54 minutes
- 2026-09-30 PASS 57 minutes
- 2026-10-01 PASS 46 minutes
- 2026-10-02 PASS 45 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 55 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 53 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 54 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 42 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 45 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 43 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
