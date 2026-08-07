# stream/streamworkspace/TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.00s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6602628Z === RUN   TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace
2026-07-09T01:15:21.6603155Z     resource_test.go:137: Creating execution project (1): test-acc-tf-p-5001526482591466763
2026-07-09T01:15:21.6603557Z     resource_test.go:137: 
2026-07-09T01:15:21.6604272Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6605782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6607157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6608578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:137
2026-07-09T01:15:21.6609232Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6611353Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6612497Z         	Test:       	TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace
2026-07-09T01:15:21.6614316Z         	Messages:   	Project creation failed: test-acc-tf-p-5001526482591466763, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6615804Z --- FAIL: TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace (1.05s)
```

- 2026-07-10 PASS 2 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.8003875Z === RUN   TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace
2026-07-11T01:30:51.8004560Z     resource_test.go:150: Creating execution project (1): test-acc-tf-p-2399711482855684029
2026-07-11T01:30:51.8005091Z     resource_test.go:150: 
2026-07-11T01:30:51.8006026Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.8007855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.8009829Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.8011744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:150
2026-07-11T01:30:51.8012584Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.8014541Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.8015742Z         	Test:       	TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace
2026-07-11T01:30:51.8017611Z         	Messages:   	Project creation failed: test-acc-tf-p-2399711482855684029, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.8019038Z --- FAIL: TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace (73.36s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a second
- 2026-07-14 PASS 2 seconds
- 2026-07-15 PASS 2 seconds
- 2026-07-16 PASS 2 seconds
- 2026-07-17 PASS 2 seconds
- 2026-07-18 PASS 3 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.4064199Z === RUN   TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace
2026-07-21T00:59:13.4064882Z     resource_test.go:150: Creating execution project (1): test-acc-tf-p-2398559666291011315
2026-07-21T00:59:13.4065530Z     resource_test.go:150: 
2026-07-21T00:59:13.4066470Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.4068323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.4070172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.4072113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:150
2026-07-21T00:59:13.4073085Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.4075972Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.4077518Z         	Test:       	TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace
2026-07-21T00:59:13.4080137Z         	Messages:   	Project creation failed: test-acc-tf-p-2398559666291011315, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.4081825Z --- FAIL: TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace (0.60s)
```

- 2026-07-22 PASS 2 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6597226Z === RUN   TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace
2026-07-23T03:35:04.6598560Z     resource_test.go:150: Creating execution project (1): test-acc-tf-p-5209167649226072051
2026-07-23T03:35:04.6599441Z     resource_test.go:150: 
2026-07-23T03:35:04.6601076Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6604334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6607462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6610839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:150
2026-07-23T03:35:04.6612240Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6617159Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6619961Z         	Test:       	TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace
2026-07-23T03:35:04.6624151Z         	Messages:   	Project creation failed: test-acc-tf-p-5209167649226072051, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6627026Z --- FAIL: TestAccStreamWorkspaceRS_failoverWriteOnceRequiresReplace (0.32s)
```

- 2026-07-24 PASS 2 seconds
- 2026-07-25 PASS a second
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 seconds
- 2026-07-28 PASS 2 seconds
- 2026-07-29 PASS a second
- 2026-07-30 PASS a second
- 2026-07-31 PASS a second
- 2026-08-01 PASS 2 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS a second
  - PASS 2 seconds
  - PASS a second
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 2 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 2 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
  - PASS a second
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
