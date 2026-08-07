# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignment_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:45](#error-2026-07-11t0045540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-07-16 00:45](#error-2026-07-16t0045040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 137.04s
[2026-07-21 00:46](#error-2026-07-21t0046590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.02s
[2026-07-23 00:47](#error-2026-07-23t0047150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 36 seconds
- 2026-07-10 PASS 16 seconds
- 2026-07-11

### Error 2026-07-11T00:45:54+00:00
```
2026-07-11T00:45:54.0945760Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-07-11T00:45:54.0946942Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-6012121918407577708
2026-07-11T00:45:54.0948177Z     resource_test.go:22: 
2026-07-11T00:45:54.0949838Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:54.0953219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:54.0956540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:54.0960581Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-07-11T00:45:54.0964571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-07-11T00:45:54.0966874Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:54.0968329Z         	Error:      	Received unexpected error:
2026-07-11T00:45:54.0971958Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:54.0973958Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-07-11T00:45:54.0977222Z         	Messages:   	Project creation failed: test-acc-tf-p-6012121918407577708, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:54.0979587Z --- FAIL: TestAccCloudUserProjectAssignment_basic (64.19s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 16 seconds
- 2026-07-14 PASS 22 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16

### Error 2026-07-16T00:45:04+00:00
```
2026-07-16T00:45:04.1029434Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-07-16T00:45:04.1030745Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5479640260374446559
2026-07-16T00:45:04.1044417Z   
2026-07-16T00:45:04.1046557Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-07-16T00:45:04.1047189Z         
2026-07-16T00:45:04.1047899Z         Error: error creating project: 6a5829059bd40d6f4026786b
2026-07-16T00:45:04.1048468Z         
2026-07-16T00:45:04.1049028Z           with mongodbatlas_project.test,
2026-07-16T00:45:04.1049984Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:45:04.1050832Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:45:04.1051245Z         
2026-07-16T00:45:04.1052067Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:45:04.1052877Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:45:04.1053543Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:45:04.1054353Z --- FAIL: TestAccCloudUserProjectAssignment_basic (137.36s)
```

- 2026-07-17 PASS 11 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:59+00:00
```
2026-07-21T00:46:59.7722383Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-07-21T00:46:59.7723441Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5372546767431926675
2026-07-21T00:46:59.7724422Z     resource_test.go:22: 
2026-07-21T00:46:59.7725889Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:46:59.7727876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:46:59.7729857Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:46:59.7732004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-07-21T00:46:59.7734221Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-07-21T00:46:59.7736038Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:46:59.7736632Z         	Error:      	Received unexpected error:
2026-07-21T00:46:59.7738876Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:59.7740064Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-07-21T00:46:59.7741993Z         	Messages:   	Project creation failed: test-acc-tf-p-5372546767431926675, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:59.7743330Z --- FAIL: TestAccCloudUserProjectAssignment_basic (74.18s)
```

- 2026-07-22 PASS 13 seconds
- 2026-07-23

### Error 2026-07-23T00:47:15+00:00
```
2026-07-23T00:47:15.0272509Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-07-23T00:47:15.0277275Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8527589718566993235
2026-07-23T00:47:15.0277913Z     resource_test.go:22: 
2026-07-23T00:47:15.0278926Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:15.0280980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:15.0282997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:47:15.0285462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-07-23T00:47:15.0287748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-07-23T00:47:15.0289121Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:47:15.0289681Z         	Error:      	Received unexpected error:
2026-07-23T00:47:15.0291841Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:15.0293203Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-07-23T00:47:15.0295255Z         	Messages:   	Project creation failed: test-acc-tf-p-8527589718566993235, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:15.0296513Z --- FAIL: TestAccCloudUserProjectAssignment_basic (72.27s)
```

- 2026-07-24 PASS 14 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29
  - PASS 4 seconds
  - PASS 6 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 7 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 5 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 6 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 11 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
