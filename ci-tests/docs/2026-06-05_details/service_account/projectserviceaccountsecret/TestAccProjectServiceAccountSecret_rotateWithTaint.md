# service_account/projectserviceaccountsecret/TestAccProjectServiceAccountSecret_rotateWithTaint Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.10s
[2026-05-21 01:05](#error-2026-05-21t0105540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-05-30 01:03](#error-2026-05-30t0103360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 10 seconds
- 2026-05-08 PASS 6 seconds
- 2026-05-09

### Error 2026-05-09T00:58:51+00:00
```
2026-05-09T00:58:51.4146224Z === RUN   TestAccProjectServiceAccountSecret_rotateWithTaint
2026-05-09T00:58:51.4147004Z     resource_test.go:46: Creating execution project (1): test-acc-tf-p-8403485529758934748
2026-05-09T00:58:51.4147505Z     resource_test.go:46: 
2026-05-09T00:58:51.4148399Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:58:51.4150184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:58:51.4152185Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:58:51.4154110Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:46
2026-05-09T00:58:51.4154954Z         	Error:      	Received unexpected error:
2026-05-09T00:58:51.4157050Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:51.4158128Z         	Test:       	TestAccProjectServiceAccountSecret_rotateWithTaint
2026-05-09T00:58:51.4159851Z         	Messages:   	Project creation failed: test-acc-tf-p-8403485529758934748, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:51.4161016Z --- FAIL: TestAccProjectServiceAccountSecret_rotateWithTaint (92.96s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 7 seconds
- 2026-05-12 PASS 12 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 13 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 11 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19 PASS 10 seconds
- 2026-05-20 PASS 6 seconds
- 2026-05-21

### Error 2026-05-21T01:05:54+00:00
```
2026-05-21T01:05:54.1289824Z === RUN   TestAccProjectServiceAccountSecret_rotateWithTaint
2026-05-21T01:05:54.1290883Z     resource_test.go:46: Creating execution project (1): test-acc-tf-p-1761948600068454272
2026-05-21T01:05:54.1291723Z     resource_test.go:46: 
2026-05-21T01:05:54.1293275Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:54.1295443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:54.1297512Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:05:54.1299574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:46
2026-05-21T01:05:54.1300421Z         	Error:      	Received unexpected error:
2026-05-21T01:05:54.1302328Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:54.1303809Z         	Test:       	TestAccProjectServiceAccountSecret_rotateWithTaint
2026-05-21T01:05:54.1305854Z         	Messages:   	Project creation failed: test-acc-tf-p-1761948600068454272, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:54.1307114Z --- FAIL: TestAccProjectServiceAccountSecret_rotateWithTaint (70.62s)
```

- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 10 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 14 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28 PASS 8 seconds
- 2026-05-29 PASS 7 seconds
- 2026-05-30

### Error 2026-05-30T01:03:36+00:00
```
2026-05-30T01:03:36.9242318Z === RUN   TestAccProjectServiceAccountSecret_rotateWithTaint
2026-05-30T01:03:36.9243008Z     resource_test.go:46: Creating execution project (1): test-acc-tf-p-4773978846383990495
2026-05-30T01:03:36.9243514Z     resource_test.go:46: 
2026-05-30T01:03:36.9244876Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:36.9246698Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:03:36.9248499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:03:36.9250521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:46
2026-05-30T01:03:36.9251387Z         	Error:      	Received unexpected error:
2026-05-30T01:03:36.9253359Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9255086Z         	Test:       	TestAccProjectServiceAccountSecret_rotateWithTaint
2026-05-30T01:03:36.9257852Z         	Messages:   	Project creation failed: test-acc-tf-p-4773978846383990495, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9259767Z --- FAIL: TestAccProjectServiceAccountSecret_rotateWithTaint (73.32s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02 PASS 11 seconds
- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 7 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
