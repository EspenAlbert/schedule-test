# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da931d59b8466ea7254f8/clusters/test-acc-tf-c-2069356728205057724 | dev | flaky_500 | 316.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 27 minutes
  - PASS 22 minutes
- 2025-12-11 PASS 25 minutes
- 2025-12-12 PASS 22 minutes
- 2025-12-13 PASS 24 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 23 minutes
- 2025-12-16 PASS 22 minutes
- 2025-12-17 PASS 23 minutes
- 2025-12-18 PASS 25 minutes
- 2025-12-19 PASS 25 minutes
- 2025-12-20 PASS 23 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 25 minutes
- 2025-12-23 PASS 23 minutes
- 2025-12-24 PASS 27 minutes
- 2025-12-25 PASS 30 minutes
- 2025-12-26 PASS 22 minutes
- 2025-12-27 PASS 22 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 22 minutes
- 2025-12-31 PASS 28 minutes
- 2026-01-01 PASS 21 minutes
- 2026-01-02 PASS 25 minutes
- 2026-01-03 PASS 22 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 25 minutes
- 2026-01-06 PASS 23 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8817482Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-01-07T00:30:39.8947510Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-01-07T00:35:56.4960145Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-01-07T00:35:56.4960703Z     resource_cluster_test.go:1302: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:35:56.4961251Z         
2026-01-07T00:35:56.4963347Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931d59b8466ea7254f8/clusters/test-acc-tf-c-2069356728205057724 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:35:56.4964859Z         
2026-01-07T00:35:56.4965145Z           with mongodbatlas_cluster.test,
2026-01-07T00:35:56.4965717Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:35:56.4966236Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-01-07T00:35:56.4966512Z         
2026-01-07T00:35:56.8472685Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:35:56.8473502Z         
2026-01-07T00:35:56.8473836Z         Error: error when destroying resource
2026-01-07T00:35:56.8474148Z         
2026-01-07T00:35:56.8474520Z         error deleting project (695da931d59b8466ea7254f8):
2026-01-07T00:35:56.8475176Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931d59b8466ea7254f8
2026-01-07T00:35:56.8475676Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:35:56.8476214Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:35:56.8476820Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:35:56.8477255Z         Params: [], BadRequestDetail: 
2026-01-07T00:35:56.8477600Z --- FAIL: TestAccCluster_basic_RedactClientLogData (316.95s)
```

- 2026-01-08 PASS 23 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 24 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 21 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 22 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 23 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes
