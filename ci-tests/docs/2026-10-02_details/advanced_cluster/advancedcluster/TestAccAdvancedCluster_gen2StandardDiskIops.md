# advanced_cluster/advancedcluster/TestAccAdvancedCluster_gen2StandardDiskIops Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 00:47](#error-2026-09-29t0047200000) | USER_CANNOT_ACCESS_GROUP /api/atlas/v2/groups/6abb0a47b681a1ee4aa8e948/clusters/test-acc-tf-c-1043686702128585265 | dev | 428.06s
[2026-09-29 12:47](#error-2026-09-29t1247520000) | USER_CANNOT_ACCESS_GROUP /api/atlas/v2/groups/6abbb32c4e4a7c917da5295f/clusters/test-acc-tf-c-9075505114273664182 | dev | 464.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 29 minutes
- 2026-09-03
  - PASS 17 minutes
  - PASS 19 minutes
- 2026-09-04 PASS 28 minutes
- 2026-09-05 PASS 17 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 18 minutes
- 2026-09-08 PASS 17 minutes
- 2026-09-09 PASS 18 minutes
- 2026-09-10 PASS 27 minutes
- 2026-09-11
  - PASS an hour
  - PASS 30 minutes
- 2026-09-12 PASS 20 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 19 minutes
- 2026-09-15 PASS 20 minutes
- 2026-09-16 PASS 18 minutes
- 2026-09-17 PASS 17 minutes
- 2026-09-18 PASS 17 minutes
- 2026-09-19 PASS 18 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 19 minutes
- 2026-09-22
  - PASS 19 minutes
  - PASS 18 minutes
- 2026-09-23
  - PASS 26 minutes
  - PASS 25 minutes
- 2026-09-24 PASS 18 minutes
- 2026-09-25 PASS 19 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 18 minutes
- 2026-09-29
  - FAIL 7 minutes

### Error 2026-09-29T00:47:20+00:00
```
2026-09-29T00:47:20.6340678Z === RUN   TestAccAdvancedCluster_gen2StandardDiskIops
2026-09-29T00:47:20.6588807Z === CONT  TestAccAdvancedCluster_gen2StandardDiskIops
2026-09-29T00:47:55.6398323Z === NAME  TestAccAdvancedCluster_gen2StandardDiskIops
2026-09-29T00:47:55.6399848Z     pre_check.go:46: Time before creating cluster: 2026-09-29T00:47:55.639519065Z, ProjectID: 6abb0a47b681a1ee4aa8e948, Cluster name: test-acc-tf-c-1043686702128585265
2026-09-29T00:54:29.1719060Z === NAME  TestAccAdvancedCluster_gen2StandardDiskIops
2026-09-29T00:54:29.1719839Z     resource_test.go:3283: Step 1/5 error: Error running apply: exit status 1
2026-09-29T00:54:29.1720275Z         
2026-09-29T00:54:29.1720592Z         Error: Error in create
2026-09-29T00:54:29.1721049Z         
2026-09-29T00:54:29.1721421Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T00:54:29.1722428Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T00:54:29.1723750Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T00:54:29.1724117Z         
2026-09-29T00:54:29.1724634Z         cluster=test-acc-tf-c-1043686702128585265 didn't reach desired state: IDLE,
2026-09-29T00:54:29.1725096Z         error:
2026-09-29T00:54:29.1726181Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb0a47b681a1ee4aa8e948/clusters/test-acc-tf-c-1043686702128585265
2026-09-29T00:54:29.1727067Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-09-29T00:54:29.1727902Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-09-29T00:54:29.1728358Z         BadRequestDetail: 
2026-09-29T00:54:29.2298228Z --- FAIL: TestAccAdvancedCluster_gen2StandardDiskIops (428.59s)
```

  - PASS 27 minutes
  - FAIL 7 minutes

### Error 2026-09-29T12:47:52+00:00
```
2026-09-29T12:47:52.3430869Z === RUN   TestAccAdvancedCluster_gen2StandardDiskIops
2026-09-29T12:47:52.7778580Z === CONT  TestAccAdvancedCluster_gen2StandardDiskIops
2026-09-29T12:49:02.3570821Z === NAME  TestAccAdvancedCluster_gen2StandardDiskIops
2026-09-29T12:49:02.3571973Z     pre_check.go:46: Time before creating cluster: 2026-09-29T12:49:02.35681164Z, ProjectID: 6abbb32c4e4a7c917da5295f, Cluster name: test-acc-tf-c-9075505114273664182
2026-09-29T12:55:36.3852607Z === NAME  TestAccAdvancedCluster_gen2StandardDiskIops
2026-09-29T12:55:36.3853182Z     resource_test.go:3283: Step 1/5 error: Error running apply: exit status 1
2026-09-29T12:55:36.3853564Z         
2026-09-29T12:55:36.3853910Z         Error: Error in create
2026-09-29T12:55:36.3854257Z         
2026-09-29T12:55:36.3854643Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T12:55:36.3855234Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T12:55:36.3855975Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T12:55:36.3856253Z         
2026-09-29T12:55:36.3856739Z         cluster=test-acc-tf-c-9075505114273664182 didn't reach desired state: IDLE,
2026-09-29T12:55:36.3857085Z         error:
2026-09-29T12:55:36.3857773Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbb32c4e4a7c917da5295f/clusters/test-acc-tf-c-9075505114273664182
2026-09-29T12:55:36.3858592Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-09-29T12:55:36.3859179Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-09-29T12:55:36.3859528Z         BadRequestDetail: 
2026-09-29T12:55:36.4281946Z --- FAIL: TestAccAdvancedCluster_gen2StandardDiskIops (464.07s)
```

- 2026-09-30 PASS 17 minutes
- 2026-10-01 PASS 13 minutes
- 2026-10-02 PASS 17 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 19 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 19 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 20 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 19 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 18 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 19 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
