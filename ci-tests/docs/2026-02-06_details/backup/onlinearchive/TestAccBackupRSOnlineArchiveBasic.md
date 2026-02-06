# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters | dev | out_of_capacity | 25.08s
[2026-02-03 00:40](#error-2026-02-03t0040230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143dab2e54ee995914760/clusters | dev | out_of_capacity | 20.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09 PASS 23 minutes
- 2026-01-10 PASS 19 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 22 minutes
- 2026-01-13 PASS 22 minutes
- 2026-01-14 PASS 24 minutes
- 2026-01-15 PASS 24 minutes
- 2026-01-16 PASS 29 minutes
- 2026-01-17 PASS 26 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 22 minutes
- 2026-01-20 PASS 20 minutes
- 2026-01-21 PASS 25 minutes
- 2026-01-22 PASS 29 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 19 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 23 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 23 minutes
- 2026-01-29 PASS 27 minutes
- 2026-01-30 PASS 29 minutes
- 2026-01-31

### Error 2026-01-31T03:36:54+00:00
```
2026-01-31T03:36:54.4705494Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-01-31T03:36:54.4713814Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-01-31T03:36:54.4839039Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-01-31T03:36:54.4839926Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:36:32.340647065Z, ProjectID: 697d78a4cb47a5f1f1137862, Cluster name: test-acc-tf-c-6268428102800060340
2026-01-31T03:36:54.4853719Z   
2026-01-31T03:36:54.4854110Z     resource_test.go:131: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:36:54.4854502Z         
2026-01-31T03:36:54.4854756Z         Error: Error in create
2026-01-31T03:36:54.4855016Z         
2026-01-31T03:36:54.4855386Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:54.4856137Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:54.4856848Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:54.4857202Z         
2026-01-31T03:36:54.4857639Z         cluster name: test-acc-tf-c-6268428102800060340, API error details:
2026-01-31T03:36:54.4858340Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters
2026-01-31T03:36:54.4859211Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:36:54.4859908Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:36:54.4860435Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:36:54.4860807Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (25.84s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:23+00:00
```
2026-02-03T00:40:23.0932323Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-02-03T00:40:23.0937625Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-02-03T00:40:23.1005408Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-02-03T00:40:23.1006283Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:40:16.590316284Z, ProjectID: 698143dab2e54ee995914760, Cluster name: test-acc-tf-c-5291832149548874327
2026-02-03T00:40:23.1019974Z   
2026-02-03T00:40:23.1020374Z     resource_test.go:131: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:40:23.1020759Z         
2026-02-03T00:40:23.1021029Z         Error: Error in create
2026-02-03T00:40:23.1021288Z         
2026-02-03T00:40:23.1021671Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:23.1022408Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:23.1023114Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:23.1023476Z         
2026-02-03T00:40:23.1023909Z         cluster name: test-acc-tf-c-5291832149548874327, API error details:
2026-02-03T00:40:23.1024711Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143dab2e54ee995914760/clusters
2026-02-03T00:40:23.1025432Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:23.1026103Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:23.1026629Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:23.1027006Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (20.93s)
```

- 2026-02-04 PASS 19 minutes
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 27 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 19 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 19 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 22 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 23 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
