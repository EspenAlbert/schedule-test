# service_account/serviceaccountprojectassignment/TestAccServiceAccountProjectAssignment_multipleAssignments Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:41](#error-2026-04-09t0041590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.08s
[2026-04-11 00:45](#error-2026-04-11t0045330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.01s
[2026-04-17 00:49](#error-2026-04-17t0049030000) |  | dev | flaky_500 | 3.10s
[2026-04-30 00:57](#error-2026-04-30t0057580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-05-05 00:53](#error-2026-05-05t0053370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 8 seconds
- 2026-04-09

### Error 2026-04-09T00:41:59+00:00
```
2026-04-09T00:41:59.1787174Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-04-09T00:41:59.1787866Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-8453074808716912628
2026-04-09T00:41:59.1788559Z     resource_test.go:52: Creating execution project (2): test-acc-tf-p-3636153725049311574
2026-04-09T00:41:59.1789036Z     resource_test.go:52: 
2026-04-09T00:41:59.1789947Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:41:59.1791768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:41:59.1794120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-09T00:41:59.1796232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-04-09T00:41:59.1797111Z         	Error:      	Received unexpected error:
2026-04-09T00:41:59.1799084Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:59.1800251Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-04-09T00:41:59.1802129Z         	Messages:   	Project creation failed: test-acc-tf-p-3636153725049311574, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:59.1804287Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (90.77s)
```

- 2026-04-10 PASS 7 seconds
- 2026-04-11

### Error 2026-04-11T00:45:33+00:00
```
2026-04-11T00:45:33.4361233Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-04-11T00:45:33.4362351Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-7800384730000937880
2026-04-11T00:45:33.4363172Z     resource_test.go:52: 
2026-04-11T00:45:33.4364984Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:33.4368337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:45:33.4371690Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-11T00:45:33.4376218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-04-11T00:45:33.4377788Z         	Error:      	Received unexpected error:
2026-04-11T00:45:33.4381398Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:33.4383445Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-04-11T00:45:33.4387025Z         	Messages:   	Project creation failed: test-acc-tf-p-7800384730000937880, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:33.4389293Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (91.11s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 5 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 5 seconds
- 2026-04-16 PASS a minute
- 2026-04-17

### Error 2026-04-17T00:49:03+00:00
```
2026-04-17T00:49:03.4333077Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-04-17T00:49:03.4334182Z     resource_test.go:52: Creating execution project (2): test-acc-tf-p-3089855723183559150
2026-04-17T00:49:03.4337019Z === CONT  TestAccServiceAccountProjectAssignment_multipleAssignments
2026-04-17T00:49:03.4370960Z   
2026-04-17T00:49:03.4371797Z     resource_test.go:57: Step 1/3 error: Error running apply: exit status 1
2026-04-17T00:49:03.4372445Z         
2026-04-17T00:49:03.4372936Z         Error: Error calling API in Create
2026-04-17T00:49:03.4373400Z         
2026-04-17T00:49:03.4373955Z           with mongodbatlas_service_account.test,
2026-04-17T00:49:03.4375118Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_service_account" "test":
2026-04-17T00:49:03.4376219Z           12: 		resource "mongodbatlas_service_account" "test" {
2026-04-17T00:49:03.4376962Z         
2026-04-17T00:49:03.4377908Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/serviceAccounts
2026-04-17T00:49:03.4378870Z         POST: HTTP 400 Bad Request (Error code:
2026-04-17T00:49:03.4379829Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-17T00:49:03.4380957Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-17T00:49:03.4381985Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-17T00:49:03.4382810Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-17T00:49:03.4397240Z   
2026-04-17T00:49:03.4411707Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (3.96s)
```

- 2026-04-18 PASS 58 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 seconds
- 2026-04-21 PASS 58 seconds
- 2026-04-22 PASS 9 seconds
- 2026-04-23 PASS 25 seconds
- 2026-04-24 PASS 5 seconds
- 2026-04-25 PASS 38 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 5 seconds
- 2026-04-28 PASS 27 seconds
- 2026-04-29 PASS 8 seconds
- 2026-04-30

### Error 2026-04-30T00:57:58+00:00
```
2026-04-30T00:57:58.4361531Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-04-30T00:57:58.4362929Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-2190796888688006513
2026-04-30T00:57:58.4363821Z     resource_test.go:52: 
2026-04-30T00:57:58.4365769Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:58.4369311Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:58.4372900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-04-30T00:57:58.4377290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-04-30T00:57:58.4378849Z         	Error:      	Received unexpected error:
2026-04-30T00:57:58.4382571Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:58.4384748Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-04-30T00:57:58.4388523Z         	Messages:   	Project creation failed: test-acc-tf-p-2190796888688006513, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:58.4390898Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (65.29s)
```

- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 10 seconds
- 2026-05-05

### Error 2026-05-05T00:53:37+00:00
```
2026-05-05T00:53:37.7973362Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-05T00:53:37.7974006Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-1493592235454741061
2026-05-05T00:53:37.7974475Z     resource_test.go:52: 
2026-05-05T00:53:37.7975567Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:53:37.7977438Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:53:37.7979269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-05T00:53:37.7981574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-05-05T00:53:37.7982458Z         	Error:      	Received unexpected error:
2026-05-05T00:53:37.7984419Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:37.7985577Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-05T00:53:37.7987436Z         	Messages:   	Project creation failed: test-acc-tf-p-1493592235454741061, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:37.7988743Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (61.87s)
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
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 7 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 6 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 6 seconds
- 2026-05-04 PASS 4 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 6 seconds
