# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters | dev | out_of_capacity | 25.08s
[2026-02-03 00:40](#error-2026-02-03t0040230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143dab2e54ee995914760/clusters | dev | out_of_capacity | 20.09s
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 2.00s

### Timeline
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
- 2026-02-07 PASS 21 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 19 minutes
- 2026-02-13

### Error 2026-02-13T01:30:27+00:00
```
2026-02-13T01:30:27.5309684Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-02-13T01:30:27.5310246Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-2938753942262284010
2026-02-13T01:30:27.5310731Z     resource_test.go:123: 
2026-02-13T01:30:27.5311615Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-13T01:30:27.5313362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-13T01:30:27.5315245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-13T01:30:27.5316916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-13T01:30:27.5318710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-02-13T01:30:27.5319872Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-13T01:30:27.5320367Z         	Error:      	Received unexpected error:
2026-02-13T01:30:27.5323079Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5324436Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-02-13T01:30:27.5326843Z         	Messages:   	Project creation failed: test-acc-tf-p-2938753942262284010, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5328356Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (0.21s)
```

- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 36 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2910570Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-02-24T01:20:27.2911584Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-8760532779082375401
2026-02-24T01:20:27.2912464Z     resource_test.go:123: 
2026-02-24T01:20:27.2914103Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-24T01:20:27.2917641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-24T01:20:27.2921010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-24T01:20:27.2924195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-24T01:20:27.2927749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-02-24T01:20:27.2929940Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-24T01:20:27.2930863Z         	Error:      	Received unexpected error:
2026-02-24T01:20:27.2932520Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2933603Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-02-24T01:20:27.2935730Z         	Messages:   	Project creation failed: test-acc-tf-p-8760532779082375401, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2937293Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (2.05s)
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
- 2026-02-01 PASS 23 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 21 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 22 minutes
  - PASS 16 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
