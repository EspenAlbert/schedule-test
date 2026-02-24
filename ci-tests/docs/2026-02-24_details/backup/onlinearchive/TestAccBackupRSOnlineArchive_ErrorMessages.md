# backup/onlinearchive/TestAccBackupRSOnlineArchive_ErrorMessages Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters | dev | out_of_capacity | 5.08s
[2026-02-03 00:40](#error-2026-02-03t0040230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143dab2e54ee995914760/clusters | dev | out_of_capacity | 15.08s
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 981.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 18 minutes
- 2026-01-29 PASS 21 minutes
- 2026-01-30 PASS 26 minutes
- 2026-01-31

### Error 2026-01-31T03:36:54+00:00
```
2026-01-31T03:36:54.4708267Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-31T03:36:54.4711454Z === CONT  TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-31T03:36:54.4714443Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-31T03:36:54.4716077Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:36:12.328655678Z, ProjectID: 697d78a4cb47a5f1f1137862, Cluster name: test-acc-tf-c-6005129094272730367
2026-01-31T03:36:54.4748185Z    test_name=TestAccBackupRSOnlineArchive_ErrorMessages test_terraform_path=/home/runner/work/_temp/3033667c-f882-4c6a-a87f-335c44830a1c/terraform test_working_directory=/tmp/plugintest426622657 test_step_number=1
2026-01-31T03:36:54.4750457Z     resource_test.go:219: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-31T03:36:54.4751366Z         
2026-01-31T03:36:54.4751828Z         Error: Error in create
2026-01-31T03:36:54.4752485Z         
2026-01-31T03:36:54.4753373Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:54.4754734Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:54.4756007Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:54.4756634Z         
2026-01-31T03:36:54.4757409Z         cluster name: test-acc-tf-c-6005129094272730367, API error details:
2026-01-31T03:36:54.4758656Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters
2026-01-31T03:36:54.4759949Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:36:54.4761163Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:36:54.4762106Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:36:54.4763324Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (5.81s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:23+00:00
```
2026-02-03T00:40:23.0934346Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-03T00:40:23.0937242Z === CONT  TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-03T00:40:23.0982755Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-03T00:40:23.0983641Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:40:11.5887324Z, ProjectID: 698143dab2e54ee995914760, Cluster name: test-acc-tf-c-4248512665349024807
2026-02-03T00:40:23.0997541Z    test_name=TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-03T00:40:23.0998233Z     resource_test.go:219: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:40:23.0998754Z         
2026-02-03T00:40:23.0999022Z         Error: Error in create
2026-02-03T00:40:23.0999286Z         
2026-02-03T00:40:23.0999660Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:23.1000403Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:23.1001100Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:23.1001467Z         
2026-02-03T00:40:23.1001892Z         cluster name: test-acc-tf-c-4248512665349024807, API error details:
2026-02-03T00:40:23.1002592Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143dab2e54ee995914760/clusters
2026-02-03T00:40:23.1003300Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:23.1003973Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:23.1004598Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:23.1005002Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (15.82s)
```

- 2026-02-04 PASS 15 minutes
- 2026-02-05 PASS 17 minutes
- 2026-02-06 PASS 18 minutes
- 2026-02-07 PASS 15 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 17 minutes
- 2026-02-10 PASS 15 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 16 minutes
- 2026-02-13

### Error 2026-02-13T01:30:27+00:00
```
2026-02-13T01:30:27.5349735Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-13T01:30:27.5350306Z     resource_test.go:213: Creating execution project (1): test-acc-tf-p-60810842954752321
2026-02-13T01:30:27.5350810Z     resource_test.go:213: 
2026-02-13T01:30:27.5351701Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-13T01:30:27.5353441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-13T01:30:27.5355298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-13T01:30:27.5356970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-13T01:30:27.5358748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:213
2026-02-13T01:30:27.5359912Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-13T01:30:27.5360433Z         	Error:      	Received unexpected error:
2026-02-13T01:30:27.5363158Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5364556Z         	Test:       	TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-13T01:30:27.5366974Z         	Messages:   	Project creation failed: test-acc-tf-p-60810842954752321, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5368516Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (0.19s)
```

- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 16 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 16 minutes
- 2026-02-19 PASS 30 minutes
- 2026-02-20 PASS 17 minutes
- 2026-02-21 PASS 18 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 15 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2940742Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-24T01:20:27.2944824Z === CONT  TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-24T01:20:27.2948966Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-24T01:20:27.2950596Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:56:45.31771163Z, ProjectID: 699cf73fae2412ce621465fa, Cluster name: test-acc-tf-c-7866299162943702404
2026-02-24T01:20:27.3011482Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-24T01:20:27.3012720Z     resource_test.go:219: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-24T01:20:27.3013642Z         
2026-02-24T01:20:27.3015250Z         Error: error creating MongoDB Atlas Online Archive:: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.3016341Z         
2026-02-24T01:20:27.3017023Z           with mongodbatlas_online_archive.users_archive,
2026-02-24T01:20:27.3018356Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2026-02-24T01:20:27.3019626Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2026-02-24T01:20:27.3020258Z         
2026-02-24T01:20:27.3021680Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (981.75s)
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
- 2026-02-01 PASS 18 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 18 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 18 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 16 minutes
  - PASS 13 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 16 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
