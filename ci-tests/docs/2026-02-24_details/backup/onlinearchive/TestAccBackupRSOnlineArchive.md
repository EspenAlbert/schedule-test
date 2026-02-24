# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters | dev | out_of_capacity | 13.08s
[2026-02-03 00:40](#error-2026-02-03t0040230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143dab2e54ee995914760/clusters | dev | out_of_capacity | 8.02s
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 0.04s

### Timeline
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
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 21 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13

### Error 2026-02-13T01:30:27+00:00
```
2026-02-13T01:30:27.5290032Z === RUN   TestAccBackupRSOnlineArchive
2026-02-13T01:30:27.5290568Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-5387656378288570236
2026-02-13T01:30:27.5291048Z     resource_test.go:28: 
2026-02-13T01:30:27.5291926Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-13T01:30:27.5293706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-13T01:30:27.5295768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-13T01:30:27.5297451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-13T01:30:27.5299236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-02-13T01:30:27.5300389Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-13T01:30:27.5300892Z         	Error:      	Received unexpected error:
2026-02-13T01:30:27.5303602Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5305292Z         	Test:       	TestAccBackupRSOnlineArchive
2026-02-13T01:30:27.5307815Z         	Messages:   	Project creation failed: test-acc-tf-p-5387656378288570236, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5309330Z --- FAIL: TestAccBackupRSOnlineArchive (0.25s)
```

- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 22 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 35 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2883356Z === RUN   TestAccBackupRSOnlineArchive
2026-02-24T01:20:27.2884327Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-3955513790235011588
2026-02-24T01:20:27.2885352Z     resource_test.go:28: 
2026-02-24T01:20:27.2886992Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-24T01:20:27.2890483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-24T01:20:27.2893841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-24T01:20:27.2897201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-24T01:20:27.2900618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-02-24T01:20:27.2902814Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-24T01:20:27.2903736Z         	Error:      	Received unexpected error:
2026-02-24T01:20:27.2905571Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2906650Z         	Test:       	TestAccBackupRSOnlineArchive
2026-02-24T01:20:27.2908614Z         	Messages:   	Project creation failed: test-acc-tf-p-3955513790235011588, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2909950Z --- FAIL: TestAccBackupRSOnlineArchive (0.43s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 24 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 21 minutes
  - PASS 17 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
