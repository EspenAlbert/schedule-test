# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 17.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 19 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 16 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 17 minutes
- 2026-02-13

### Error 2026-02-13T01:30:27+00:00
```
2026-02-13T01:30:27.5368928Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-02-13T01:30:27.5369504Z     resource_test.go:533: Creating execution project (1): test-acc-tf-p-1580128418092782318
2026-02-13T01:30:27.5369988Z     resource_test.go:533: 
2026-02-13T01:30:27.5370874Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-13T01:30:27.5372616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-13T01:30:27.5374498Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-13T01:30:27.5376296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-13T01:30:27.5378187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:533
2026-02-13T01:30:27.5379344Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-13T01:30:27.5379846Z         	Error:      	Received unexpected error:
2026-02-13T01:30:27.5382564Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5383983Z         	Test:       	TestAccOnlineArchive_deleteOnCreateTimeout
2026-02-13T01:30:27.5386402Z         	Messages:   	Project creation failed: test-acc-tf-p-1580128418092782318, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5387942Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (0.20s)
```

- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 18 minutes
- 2026-02-17 PASS 18 minutes
- 2026-02-18 PASS 18 minutes
- 2026-02-19 PASS 32 minutes
- 2026-02-20 PASS 18 minutes
- 2026-02-21 PASS 20 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 17 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2942098Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-02-24T01:20:27.2944158Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-02-24T01:20:27.2951903Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-02-24T01:20:27.2953541Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:56:50.321539418Z, ProjectID: 699cf73fae2412ce621465fa, Cluster name: test-acc-tf-c-4869513303040735643
2026-02-24T01:20:27.2972548Z   
2026-02-24T01:20:27.2973256Z     resource_test.go:536: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:20:27.2973936Z         
2026-02-24T01:20:27.2974389Z         Error: Error in create
2026-02-24T01:20:27.2975001Z         
2026-02-24T01:20:27.2975689Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-24T01:20:27.2977056Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-24T01:20:27.2978532Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-24T01:20:27.2979193Z         
2026-02-24T01:20:27.2980011Z         cluster name: test-acc-tf-c-4869513303040735643, API error details: (503
2026-02-24T01:20:27.2981244Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2982171Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (17.38s)
```

- 2026-02-25 PASS 19 minutes
- 2026-02-26 PASS 26 minutes
- 2026-02-27 PASS 16 minutes
- 2026-02-28 PASS 16 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 16 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 17 minutes
- 2026-03-05 PASS 30 minutes
- 2026-03-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 16 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 20 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 20 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 19 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 22 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 16 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
