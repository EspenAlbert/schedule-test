# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-14 00:46](#error-2026-09-14t0046560000) |  | dev | timeout | 13014.03s

### Timeline
- 2026-09-07: MISSING
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


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 53 minutes
- 2026-09-14: MISSING
