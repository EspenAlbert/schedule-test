# service_account/serviceaccountprojectassignment/TestAccServiceAccountProjectAssignment_singleAssignment Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL(x 9)
Success rate: 73.53%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s
[2026-04-09 00:41](#error-2026-04-09t0041590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.02s
[2026-04-11 00:45](#error-2026-04-11t0045330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.02s
[2026-04-14 00:52](#error-2026-04-14t0052070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.02s
[2026-04-16 00:53](#error-2026-04-16t0053170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-04-17 00:49](#error-2026-04-17t0049030000) |  | dev | flaky_500 | 3.06s
[2026-04-25 00:48](#error-2026-04-25t0048290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-04-30 00:57](#error-2026-04-30t0057580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.02s
[2026-05-05 00:53](#error-2026-05-05t0053370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:04+00:00
```
2026-04-07T00:47:04.2826116Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-07T00:47:04.2848551Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6155529351434907311
2026-04-07T00:47:04.2849249Z     resource_test.go:25: 
2026-04-07T00:47:04.2850755Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-07T00:47:04.2853354Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-07T00:47:04.2855692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-07T00:47:04.2858379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-04-07T00:47:04.2859488Z         	Error:      	Received unexpected error:
2026-04-07T00:47:04.2862083Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:47:04.2863518Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-07T00:47:04.2865794Z         	Messages:   	Project creation failed: test-acc-tf-p-6155529351434907311, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:47:04.2867331Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (68.14s)
```

- 2026-04-08 PASS 6 seconds
- 2026-04-09

### Error 2026-04-09T00:41:59+00:00
```
2026-04-09T00:41:59.1764170Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-09T00:41:59.1765349Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-4638779698395404320
2026-04-09T00:41:59.1766221Z     resource_test.go:25: 
2026-04-09T00:41:59.1767933Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:41:59.1771369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:41:59.1775180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-09T00:41:59.1778836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-04-09T00:41:59.1779711Z         	Error:      	Received unexpected error:
2026-04-09T00:41:59.1781677Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:59.1783240Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-09T00:41:59.1785077Z         	Messages:   	Project creation failed: test-acc-tf-p-4638779698395404320, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:59.1786333Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (85.18s)
```

- 2026-04-10 PASS 7 seconds
- 2026-04-11

### Error 2026-04-11T00:45:33+00:00
```
2026-04-11T00:45:33.4330329Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-11T00:45:33.4333682Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-2700452522932581344
2026-04-11T00:45:33.4334799Z     resource_test.go:25: 
2026-04-11T00:45:33.4336431Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:33.4339766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:45:33.4343128Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-11T00:45:33.4347186Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-04-11T00:45:33.4348741Z         	Error:      	Received unexpected error:
2026-04-11T00:45:33.4352339Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:33.4354567Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-11T00:45:33.4358073Z         	Messages:   	Project creation failed: test-acc-tf-p-2700452522932581344, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:33.4360313Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (71.19s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 5 seconds
- 2026-04-14

### Error 2026-04-14T00:52:07+00:00
```
2026-04-14T00:52:07.2007296Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-14T00:52:07.2008548Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-4269245922568166383
2026-04-14T00:52:07.2009957Z     resource_test.go:25: 
2026-04-14T00:52:07.2011382Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:52:07.2013331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:52:07.2015291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-14T00:52:07.2017713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-04-14T00:52:07.2018980Z         	Error:      	Received unexpected error:
2026-04-14T00:52:07.2022821Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:52:07.2024323Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-14T00:52:07.2026142Z         	Messages:   	Project creation failed: test-acc-tf-p-4269245922568166383, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:52:07.2027684Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (68.23s)
```

- 2026-04-15 PASS 6 seconds
- 2026-04-16

### Error 2026-04-16T00:53:17+00:00
```
2026-04-16T00:53:17.3568822Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-16T00:53:17.3570374Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-5332805024162402696
2026-04-16T00:53:17.3571141Z     resource_test.go:25: 
2026-04-16T00:53:17.3572630Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:53:17.3575785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:53:17.3578745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-16T00:53:17.3582179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-04-16T00:53:17.3583541Z         	Error:      	Received unexpected error:
2026-04-16T00:53:17.3586808Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:17.3588614Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-16T00:53:17.3591498Z         	Messages:   	Project creation failed: test-acc-tf-p-5332805024162402696, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:17.3593708Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (65.28s)
```

- 2026-04-17

### Error 2026-04-17T00:49:03+00:00
```
2026-04-17T00:49:03.4330172Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-17T00:49:03.4331289Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-750358410146077427
2026-04-17T00:49:03.4335984Z === CONT  TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-17T00:49:03.4397750Z === NAME  TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-17T00:49:03.4398713Z     resource_test.go:29: Step 1/2 error: Error running apply: exit status 1
2026-04-17T00:49:03.4399340Z         
2026-04-17T00:49:03.4399812Z         Error: Error calling API in Create
2026-04-17T00:49:03.4400271Z         
2026-04-17T00:49:03.4400834Z           with mongodbatlas_service_account.test,
2026-04-17T00:49:03.4402000Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_service_account" "test":
2026-04-17T00:49:03.4403087Z           12: 		resource "mongodbatlas_service_account" "test" {
2026-04-17T00:49:03.4403624Z         
2026-04-17T00:49:03.4404576Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/serviceAccounts
2026-04-17T00:49:03.4405555Z         POST: HTTP 400 Bad Request (Error code:
2026-04-17T00:49:03.4406708Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-17T00:49:03.4408001Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-17T00:49:03.4409000Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-17T00:49:03.4409821Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-17T00:49:03.4410579Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (3.55s)
```

- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 5 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 6 seconds
- 2026-04-25

### Error 2026-04-25T00:48:29+00:00
```
2026-04-25T00:48:29.3037563Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-25T00:48:29.3038718Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-4109061545540697264
2026-04-25T00:48:29.3058838Z     resource_test.go:25: 
2026-04-25T00:48:29.3060217Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-25T00:48:29.3062530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-25T00:48:29.3064301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-25T00:48:29.3066326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-04-25T00:48:29.3067178Z         	Error:      	Received unexpected error:
2026-04-25T00:48:29.3069371Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:29.3070510Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-25T00:48:29.3072329Z         	Messages:   	Project creation failed: test-acc-tf-p-4109061545540697264, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:29.3073552Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (63.05s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 4 seconds
- 2026-04-28 PASS 30 seconds
- 2026-04-29 PASS 8 seconds
- 2026-04-30

### Error 2026-04-30T00:57:58+00:00
```
2026-04-30T00:57:58.4330093Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-30T00:57:58.4331296Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-305727421567013938
2026-04-30T00:57:58.4332144Z     resource_test.go:25: 
2026-04-30T00:57:58.4333834Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:58.4339284Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:58.4342725Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-30T00:57:58.4347030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-04-30T00:57:58.4348641Z         	Error:      	Received unexpected error:
2026-04-30T00:57:58.4352298Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:58.4354422Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-04-30T00:57:58.4358165Z         	Messages:   	Project creation failed: test-acc-tf-p-305727421567013938, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:58.4360547Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (72.16s)
```

- 2026-05-01 PASS 7 seconds
- 2026-05-02 PASS 13 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 5 seconds
- 2026-05-05

### Error 2026-05-05T00:53:37+00:00
```
2026-05-05T00:53:37.7954332Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-05T00:53:37.7955625Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7758299076416911804
2026-05-05T00:53:37.7956543Z     resource_test.go:25: 
2026-05-05T00:53:37.7958343Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:53:37.7961068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:53:37.7963274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-05T00:53:37.7965414Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-05-05T00:53:37.7966294Z         	Error:      	Received unexpected error:
2026-05-05T00:53:37.7968294Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:37.7969452Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-05T00:53:37.7971546Z         	Messages:   	Project creation failed: test-acc-tf-p-7758299076416911804, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:37.7972830Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (68.41s)
```

- 2026-05-06 PASS 5 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 5 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 5 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 5 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 6 seconds
- 2026-05-04 PASS 7 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 6 seconds
