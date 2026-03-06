# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037020000) |  | dev | flaky_500 | 896.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 20 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 24 minutes
- 2026-02-17 PASS 18 minutes
- 2026-02-18 PASS 23 minutes
- 2026-02-19 PASS 30 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24

### Error 2026-02-24T00:37:02+00:00
```
2026-02-24T00:37:02.7159905Z === RUN   TestAccCluster_create_RedactClientLogData
2026-02-24T00:37:02.7167154Z === CONT  TestAccCluster_create_RedactClientLogData
2026-02-24T00:51:54.7048742Z === NAME  TestAccCluster_create_RedactClientLogData
2026-02-24T00:51:54.7049616Z     resource_cluster_test.go:1343: Step 1/1 error: Error running apply: exit status 1
2026-02-24T00:51:54.7050341Z         
2026-02-24T00:51:54.7051926Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5333800596218722580): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:51:54.7053017Z         
2026-02-24T00:51:54.7053307Z           with mongodbatlas_cluster.test,
2026-02-24T00:51:54.7054023Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-24T00:51:54.7054767Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-24T00:51:54.7055072Z         
2026-02-24T00:51:59.5051557Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-24T00:51:59.5052337Z         
2026-02-24T00:51:59.5052871Z         Error: error when destroying resource
2026-02-24T00:51:59.5053357Z         
2026-02-24T00:51:59.5053940Z         error deleting project (699cf2b08dfec41eaa852536):
2026-02-24T00:51:59.5054993Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2b08dfec41eaa852536
2026-02-24T00:51:59.5055856Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-24T00:51:59.5056944Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-02-24T00:51:59.5057617Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-02-24T00:51:59.5058100Z         Params: [], BadRequestDetail: 
2026-02-24T00:51:59.5058463Z --- FAIL: TestAccCluster_create_RedactClientLogData (896.79s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26 PASS 21 minutes
- 2026-02-27 PASS 22 minutes
- 2026-02-28 PASS 20 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 20 minutes
- 2026-03-03 PASS 24 minutes
- 2026-03-04 PASS 20 minutes
- 2026-03-05 PASS 32 minutes
- 2026-03-06 PASS 25 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 21 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 16 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 21 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 20 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
