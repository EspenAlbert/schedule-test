# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters | dev | out_of_capacity | 20.09s
[2026-02-03 00:40](#error-2026-02-03t0040230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143dab2e54ee995914760/clusters | dev | out_of_capacity | 10.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09 PASS 21 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 22 minutes
- 2026-01-13 PASS 24 minutes
- 2026-01-14 PASS 22 minutes
- 2026-01-15 PASS 25 minutes
- 2026-01-16 PASS 29 minutes
- 2026-01-17 PASS 26 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 minutes
- 2026-01-20 PASS 20 minutes
- 2026-01-21 PASS 24 minutes
- 2026-01-22 PASS 25 minutes
- 2026-01-23 PASS 22 minutes
- 2026-01-24 PASS 18 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 23 minutes
- 2026-01-27 PASS 24 minutes
- 2026-01-28 PASS 22 minutes
- 2026-01-29 PASS 26 minutes
- 2026-01-30 PASS 29 minutes
- 2026-01-31

### Error 2026-01-31T03:36:54+00:00
```
2026-01-31T03:36:54.4706818Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-01-31T03:36:54.4713137Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-01-31T03:36:54.4816699Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-01-31T03:36:54.4817630Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:36:27.336881846Z, ProjectID: 697d78a4cb47a5f1f1137862, Cluster name: test-acc-tf-c-1322455376403285666
2026-01-31T03:36:54.4830723Z    test_name=TestAccBackupRSOnlineArchiveWithProcessRegion test_terraform_path=/home/runner/work/_temp/3033667c-f882-4c6a-a87f-335c44830a1c/terraform test_working_directory=/tmp/plugintest3064303498
2026-01-31T03:36:54.4831773Z     resource_test.go:178: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:36:54.4832167Z         
2026-01-31T03:36:54.4832423Z         Error: Error in create
2026-01-31T03:36:54.4832872Z         
2026-01-31T03:36:54.4833293Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:54.4834046Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:54.4834763Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:54.4835123Z         
2026-01-31T03:36:54.4835561Z         cluster name: test-acc-tf-c-1322455376403285666, API error details:
2026-01-31T03:36:54.4836259Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters
2026-01-31T03:36:54.4836982Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:36:54.4837660Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:36:54.4838187Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:36:54.4838610Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (20.85s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:23+00:00
```
2026-02-03T00:40:23.0933254Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-03T00:40:23.0936814Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-03T00:40:23.0960698Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-03T00:40:23.0961624Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:40:06.588487029Z, ProjectID: 698143dab2e54ee995914760, Cluster name: test-acc-tf-c-3854018655168194102
2026-02-03T00:40:23.0975159Z    test_step_number=1 test_name=TestAccBackupRSOnlineArchiveWithProcessRegion
2026-02-03T00:40:23.0975777Z     resource_test.go:178: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:40:23.0976163Z         
2026-02-03T00:40:23.0976431Z         Error: Error in create
2026-02-03T00:40:23.0976689Z         
2026-02-03T00:40:23.0977070Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:23.0977806Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:23.0978500Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:23.0978860Z         
2026-02-03T00:40:23.0979285Z         cluster name: test-acc-tf-c-3854018655168194102, API error details:
2026-02-03T00:40:23.0979983Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143dab2e54ee995914760/clusters
2026-02-03T00:40:23.0980692Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:23.0981367Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:23.0981883Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:23.0982311Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (10.92s)
```

- 2026-02-04 PASS 19 minutes
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 20 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 26 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 20 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 20 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 22 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 22 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 20 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
