# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032f81ec945fedc73155a/clusters | dev | out_of_capacity | 5.09s
[2026-04-23 00:52](#error-2026-04-23t0052500000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e96d5e9f2fb2835596b3c4/clusters | dev | out_of_capacity | 6.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 50 minutes
- 2026-04-08 PASS 28 minutes
- 2026-04-09 PASS 47 minutes
- 2026-04-10 PASS 41 minutes
- 2026-04-11 PASS 20 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 34 minutes
- 2026-04-14 PASS 22 minutes
- 2026-04-15 PASS 26 minutes
- 2026-04-16

### Error 2026-04-16T00:53:15+00:00
```
2026-04-16T00:53:15.8007240Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-04-16T00:53:15.8902481Z     resource_test.go:963: Adding variable groupId=69e032f81ec945fedc73155a
2026-04-16T00:53:15.8903191Z     resource_test.go:963: Adding variable clusterName=test-acc-tf-c-5189050184534101790
2026-04-16T00:54:53.9827530Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-04-16T00:54:59.6499986Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-04-16T00:54:59.6501047Z     resource_test.go:963: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:54:59.6501733Z         
2026-04-16T00:54:59.6502174Z         Error: Error in create
2026-04-16T00:54:59.6502601Z         
2026-04-16T00:54:59.6503204Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.6505151Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.6513657Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.6514596Z         
2026-04-16T00:54:59.6515361Z         cluster name: test-acc-tf-c-5189050184534101790, API error details:
2026-04-16T00:54:59.6516727Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032f81ec945fedc73155a/clusters
2026-04-16T00:54:59.6518145Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.6519395Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.6520766Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.6616904Z   
2026-04-16T00:54:59.8360157Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (5.94s)
```

- 2026-04-17 PASS 27 minutes
- 2026-04-18 PASS 40 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 31 minutes
- 2026-04-22 PASS an hour
- 2026-04-23

### Error 2026-04-23T00:52:50+00:00
```
2026-04-23T00:52:50.1395567Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-04-23T00:52:50.2333790Z     resource_test.go:963: Adding variable groupId=69e96d5e9f2fb2835596b3c4
2026-04-23T00:52:50.2334635Z     resource_test.go:963: Adding variable clusterName=test-acc-tf-c-3313407758764504042
2026-04-23T00:54:19.5064727Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-04-23T00:54:24.8177502Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-04-23T00:54:24.8178573Z     resource_test.go:963: Step 1/4 error: Error running apply: exit status 1
2026-04-23T00:54:24.8179329Z         
2026-04-23T00:54:24.8179629Z         Error: Error in create
2026-04-23T00:54:24.8179915Z         
2026-04-23T00:54:24.8180294Z           with mongodbatlas_advanced_cluster.test,
2026-04-23T00:54:24.8181083Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-23T00:54:24.8181829Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-23T00:54:24.8182209Z         
2026-04-23T00:54:24.8182990Z         cluster name: test-acc-tf-c-3313407758764504042, API error details:
2026-04-23T00:54:24.8183808Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e96d5e9f2fb2835596b3c4/clusters
2026-04-23T00:54:24.8184632Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-23T00:54:24.8185416Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-23T00:54:24.8186005Z         Conflict. Params: [], BadRequestDetail: 
2026-04-23T00:54:24.8692082Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6.32s)
```

- 2026-04-24 PASS 29 minutes
- 2026-04-25 PASS 27 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 31 minutes
- 2026-04-28 PASS 31 minutes
- 2026-04-29 PASS 32 minutes
- 2026-04-30 PASS 42 minutes
- 2026-05-01 PASS 26 minutes
- 2026-05-02 PASS 25 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 34 minutes
- 2026-05-05 PASS 51 minutes
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 25 minutes
  - PASS 20 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 23 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 26 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 31 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 26 minutes
- 2026-05-04 PASS 24 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 25 minutes
