# backup/onlinearchive/TestAccBackupRSOnlineArchive_ErrorMessages Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 981.08s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-25 PASS 17 minutes
- 2026-02-26 PASS 27 minutes
- 2026-02-27 PASS 14 minutes
- 2026-02-28 PASS 14 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 15 minutes
- 2026-03-03 PASS 19 minutes
- 2026-03-04 PASS 16 minutes
- 2026-03-05 PASS 29 minutes
- 2026-03-06 PASS 15 minutes

## QA Environment
### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 19 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 18 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
