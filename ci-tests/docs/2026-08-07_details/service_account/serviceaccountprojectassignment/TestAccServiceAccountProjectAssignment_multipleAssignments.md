# service_account/serviceaccountprojectassignment/TestAccServiceAccountProjectAssignment_multipleAssignments Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 7)
Success rate: 78.79%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:52](#error-2026-07-09t0052190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.05s
[2026-07-11 00:46](#error-2026-07-11t0046380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 112.07s
[2026-07-14 00:44](#error-2026-07-14t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.00s
[2026-07-16 00:45](#error-2026-07-16t0045070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-07-18 00:44](#error-2026-07-18t0044240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.09s
[2026-07-21 00:47](#error-2026-07-21t0047440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.02s
[2026-07-23 00:47](#error-2026-07-23t0047300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:52:19+00:00
```
2026-07-09T00:52:19.5105936Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-09T00:52:19.5106614Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-1880689588165330706
2026-07-09T00:52:19.5107115Z     resource_test.go:53: 
2026-07-09T00:52:19.5108054Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:52:19.5109959Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:52:19.5112086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-09T00:52:19.5114269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:53
2026-07-09T00:52:19.5115168Z         	Error:      	Received unexpected error:
2026-07-09T00:52:19.5117247Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:19.5118448Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-09T00:52:19.5120774Z         	Messages:   	Project creation failed: test-acc-tf-p-1880689588165330706, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:19.5122124Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (73.47s)
```

- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T00:46:38+00:00
```
2026-07-11T00:46:38.6083458Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-11T00:46:38.6084116Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-2936972854343963433
2026-07-11T00:46:38.6084806Z     resource_test.go:53: Creating execution project (2): test-acc-tf-p-8375521319769407573
2026-07-11T00:46:38.6085282Z     resource_test.go:53: 
2026-07-11T00:46:38.6086186Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:46:38.6087970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:46:38.6089766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-11T00:46:38.6092043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:53
2026-07-11T00:46:38.6092923Z         	Error:      	Received unexpected error:
2026-07-11T00:46:38.6094845Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:38.6096193Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-11T00:46:38.6098023Z         	Messages:   	Project creation failed: test-acc-tf-p-8375521319769407573, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:38.6099291Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (112.67s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14

### Error 2026-07-14T00:44:26+00:00
```
2026-07-14T00:44:26.4494560Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-14T00:44:26.4495223Z     resource_test.go:53: Creating execution project (2): test-acc-tf-p-7358219281400763747
2026-07-14T00:44:26.4495709Z     resource_test.go:53: 
2026-07-14T00:44:26.4496615Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:44:26.4498429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:44:26.4500587Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-14T00:44:26.4502797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:53
2026-07-14T00:44:26.4503684Z         	Error:      	Received unexpected error:
2026-07-14T00:44:26.4505624Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:26.4506788Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-14T00:44:26.4508631Z         	Messages:   	Project creation failed: test-acc-tf-p-7358219281400763747, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:26.4510203Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (81.00s)
```

- 2026-07-15 PASS 7 seconds
- 2026-07-16

### Error 2026-07-16T00:45:07+00:00
```
2026-07-16T00:45:07.0556272Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-16T00:45:07.0557517Z     resource_test.go:53: Creating execution project (2): test-acc-tf-p-5489889493778639482
2026-07-16T00:45:07.0563405Z     resource_test.go:53: 
2026-07-16T00:45:07.0565189Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:45:07.0569025Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:45:07.0572729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-16T00:45:07.0576996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:53
2026-07-16T00:45:07.0583223Z         	Error:      	Received unexpected error:
2026-07-16T00:45:07.0587101Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:45:07.0589565Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-16T00:45:07.0593393Z         	Messages:   	Project creation failed: test-acc-tf-p-5489889493778639482, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:45:07.0595680Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (64.37s)
```

- 2026-07-17 PASS 8 seconds
- 2026-07-18

### Error 2026-07-18T00:44:24+00:00
```
2026-07-18T00:44:24.6228097Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-18T00:44:24.6228768Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-218246632706272769
2026-07-18T00:44:24.6229258Z     resource_test.go:53: 
2026-07-18T00:44:24.6230178Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:24.6232018Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:44:24.6233932Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-18T00:44:24.6236127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:53
2026-07-18T00:44:24.6237275Z         	Error:      	Received unexpected error:
2026-07-18T00:44:24.6239292Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:24.6240641Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-18T00:44:24.6242528Z         	Messages:   	Project creation failed: test-acc-tf-p-218246632706272769, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:24.6243851Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (98.90s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:44+00:00
```
2026-07-21T00:47:44.7440784Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-21T00:47:44.7441446Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-2333872763557425271
2026-07-21T00:47:44.7441940Z     resource_test.go:53: 
2026-07-21T00:47:44.7442858Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:44.7444661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:44.7446448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-21T00:47:44.7448498Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:53
2026-07-21T00:47:44.7449745Z         	Error:      	Received unexpected error:
2026-07-21T00:47:44.7451705Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:44.7452832Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-21T00:47:44.7454656Z         	Messages:   	Project creation failed: test-acc-tf-p-2333872763557425271, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:44.7455879Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (102.16s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:47:30+00:00
```
2026-07-23T00:47:30.1594564Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-23T00:47:30.1595224Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-3907230098404072221
2026-07-23T00:47:30.1595738Z     resource_test.go:53: 
2026-07-23T00:47:30.1596642Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:30.1598366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:30.1600116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-23T00:47:30.1602334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:53
2026-07-23T00:47:30.1603215Z         	Error:      	Received unexpected error:
2026-07-23T00:47:30.1605332Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:30.1606459Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-07-23T00:47:30.1608228Z         	Messages:   	Project creation failed: test-acc-tf-p-3907230098404072221, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:30.1609424Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (61.63s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29
  - PASS 5 seconds
  - PASS 5 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 7 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 9 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 8 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
