# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters | dev | out_of_capacity | 13.08s
[2026-02-03 00:40](#error-2026-02-03t0040230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143dab2e54ee995914760/clusters | dev | out_of_capacity | 8.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09 PASS 21 minutes
- 2026-01-10 PASS 20 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 23 minutes
- 2026-01-13 PASS 24 minutes
- 2026-01-14 PASS 26 minutes
- 2026-01-15 PASS 24 minutes
- 2026-01-16 PASS 30 minutes
- 2026-01-17 PASS 27 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 20 minutes
- 2026-01-20 PASS 21 minutes
- 2026-01-21 PASS 26 minutes
- 2026-01-22 PASS 27 minutes
- 2026-01-23 PASS 22 minutes
- 2026-01-24 PASS 20 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 24 minutes
- 2026-01-27 PASS 24 minutes
- 2026-01-28 PASS 23 minutes
- 2026-01-29 PASS 28 minutes
- 2026-01-30 PASS 29 minutes
- 2026-01-31

### Error 2026-01-31T03:36:54+00:00
```
2026-01-31T03:36:54.4703080Z === RUN   TestAccBackupRSOnlineArchive
2026-01-31T03:36:54.4704087Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-3742817005003119127
2026-01-31T03:36:54.4710847Z === CONT  TestAccBackupRSOnlineArchive
2026-01-31T03:36:54.4763941Z === NAME  TestAccBackupRSOnlineArchive
2026-01-31T03:36:54.4765426Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:36:17.332717477Z, ProjectID: 697d78a4cb47a5f1f1137862, Cluster name: test-acc-tf-c-709065251759932511
2026-01-31T03:36:54.4781935Z    test_name=TestAccBackupRSOnlineArchive test_terraform_path=/home/runner/work/_temp/3033667c-f882-4c6a-a87f-335c44830a1c/terraform
2026-01-31T03:36:54.4783090Z     resource_test.go:35: Step 1/7 error: Error running apply: exit status 1
2026-01-31T03:36:54.4783490Z         
2026-01-31T03:36:54.4783894Z         Error: Error in create
2026-01-31T03:36:54.4784156Z         
2026-01-31T03:36:54.4784670Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:54.4785553Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:54.4786419Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:54.4786787Z         
2026-01-31T03:36:54.4787525Z         cluster name: test-acc-tf-c-709065251759932511, API error details:
2026-01-31T03:36:54.4788384Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters
2026-01-31T03:36:54.4789273Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:36:54.4790107Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:36:54.4790774Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:36:54.4791228Z --- FAIL: TestAccBackupRSOnlineArchive (13.77s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:23+00:00
```
2026-02-03T00:40:23.0930081Z === RUN   TestAccBackupRSOnlineArchive
2026-02-03T00:40:23.0931249Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-7269994665750586068
2026-02-03T00:40:23.0936204Z === CONT  TestAccBackupRSOnlineArchive
2026-02-03T00:40:23.0938372Z === NAME  TestAccBackupRSOnlineArchive
2026-02-03T00:40:23.0939323Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:40:01.584674601Z, ProjectID: 698143dab2e54ee995914760, Cluster name: test-acc-tf-c-1880499990910525911
2026-02-03T00:40:23.0952994Z    test_terraform_path=/home/runner/work/_temp/94eb3854-7c8a-40ca-953b-807f8c063dbc/terraform test_step_number=1
2026-02-03T00:40:23.0953704Z     resource_test.go:35: Step 1/7 error: Error running apply: exit status 1
2026-02-03T00:40:23.0954090Z         
2026-02-03T00:40:23.0954371Z         Error: Error in create
2026-02-03T00:40:23.0954727Z         
2026-02-03T00:40:23.0955109Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:23.0955849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:23.0956554Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:23.0956914Z         
2026-02-03T00:40:23.0957347Z         cluster name: test-acc-tf-c-1880499990910525911, API error details:
2026-02-03T00:40:23.0958033Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143dab2e54ee995914760/clusters
2026-02-03T00:40:23.0958741Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:23.0959414Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:23.0959933Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:23.0960293Z --- FAIL: TestAccBackupRSOnlineArchive (8.23s)
```

- 2026-02-04 PASS 21 minutes
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 25 minutes
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
- 2026-01-22 PASS 18 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 22 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
