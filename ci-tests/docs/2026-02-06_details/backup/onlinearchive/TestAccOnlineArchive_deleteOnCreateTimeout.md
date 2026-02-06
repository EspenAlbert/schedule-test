# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters | dev | out_of_capacity | 15.09s
[2026-02-03 00:40](#error-2026-02-03t0040230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143dab2e54ee995914760/clusters | dev | out_of_capacity | 25.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09 PASS 19 minutes
- 2026-01-10 PASS 19 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 20 minutes
- 2026-01-13 PASS 23 minutes
- 2026-01-14 PASS 22 minutes
- 2026-01-15 PASS 23 minutes
- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 22 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 minutes
- 2026-01-20 PASS 19 minutes
- 2026-01-21 PASS 22 minutes
- 2026-01-22 PASS 26 minutes
- 2026-01-23 PASS 21 minutes
- 2026-01-24 PASS 16 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27 PASS 17 minutes
- 2026-01-28 PASS 20 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 27 minutes
- 2026-01-31

### Error 2026-01-31T03:36:54+00:00
```
2026-01-31T03:36:54.4709588Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-01-31T03:36:54.4712118Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-01-31T03:36:54.4791674Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-01-31T03:36:54.4792976Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:36:22.332974148Z, ProjectID: 697d78a4cb47a5f1f1137862, Cluster name: test-acc-tf-c-234150166469657099
2026-01-31T03:36:54.4808890Z   
2026-01-31T03:36:54.4809285Z     resource_test.go:536: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:54.4809684Z         
2026-01-31T03:36:54.4809942Z         Error: Error in create
2026-01-31T03:36:54.4810205Z         
2026-01-31T03:36:54.4810585Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:54.4811333Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:54.4812043Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:54.4812552Z         
2026-01-31T03:36:54.4813069Z         cluster name: test-acc-tf-c-234150166469657099, API error details:
2026-01-31T03:36:54.4813770Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters
2026-01-31T03:36:54.4814484Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:36:54.4815165Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:36:54.4815843Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:36:54.4816246Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (15.85s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:23+00:00
```
2026-02-03T00:40:23.0935439Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-02-03T00:40:23.0938006Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-02-03T00:40:23.1027389Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-02-03T00:40:23.1028282Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:40:21.594183123Z, ProjectID: 698143dab2e54ee995914760, Cluster name: test-acc-tf-c-2638674089040694620
2026-02-03T00:40:23.1041707Z   
2026-02-03T00:40:23.1042211Z     resource_test.go:536: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:23.1042600Z         
2026-02-03T00:40:23.1042868Z         Error: Error in create
2026-02-03T00:40:23.1043350Z         
2026-02-03T00:40:23.1058772Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:23.1059572Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:23.1060301Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:23.1060686Z         
2026-02-03T00:40:23.1061141Z         cluster name: test-acc-tf-c-2638674089040694620, API error details:
2026-02-03T00:40:23.1061859Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143dab2e54ee995914760/clusters
2026-02-03T00:40:23.1062588Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:23.1063277Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:23.1063800Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:23.1064212Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (25.81s)
```

- 2026-02-04 PASS 17 minutes
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 19 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 23 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 18 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 17 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 21 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 16 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
