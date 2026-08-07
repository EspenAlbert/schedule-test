# service_account/projectserviceaccountsecret/TestAccProjectServiceAccountSecret_rotateWithTaint Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:52](#error-2026-07-09t0052190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s
[2026-07-14 00:44](#error-2026-07-14t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:52:19+00:00
```
2026-07-09T00:52:19.5046576Z === RUN   TestAccProjectServiceAccountSecret_rotateWithTaint
2026-07-09T00:52:19.5047231Z     resource_test.go:46: Creating execution project (1): test-acc-tf-p-5301006271676166691
2026-07-09T00:52:19.5047736Z     resource_test.go:46: 
2026-07-09T00:52:19.5048679Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:52:19.5050771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:52:19.5052657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:52:19.5054758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:46
2026-07-09T00:52:19.5055648Z         	Error:      	Received unexpected error:
2026-07-09T00:52:19.5057686Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:19.5058830Z         	Test:       	TestAccProjectServiceAccountSecret_rotateWithTaint
2026-07-09T00:52:19.5060901Z         	Messages:   	Project creation failed: test-acc-tf-p-5301006271676166691, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:19.5062182Z --- FAIL: TestAccProjectServiceAccountSecret_rotateWithTaint (65.92s)
```

- 2026-07-10 PASS 6 seconds
- 2026-07-11 PASS 9 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14

### Error 2026-07-14T00:44:26+00:00
```
2026-07-14T00:44:26.4445083Z === RUN   TestAccProjectServiceAccountSecret_rotateWithTaint
2026-07-14T00:44:26.4445721Z     resource_test.go:46: Creating execution project (1): test-acc-tf-p-1385836088063969996
2026-07-14T00:44:26.4446209Z     resource_test.go:46: 
2026-07-14T00:44:26.4447118Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:44:26.4448930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:44:26.4451172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:44:26.4453214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:46
2026-07-14T00:44:26.4454079Z         	Error:      	Received unexpected error:
2026-07-14T00:44:26.4456018Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:26.4457126Z         	Test:       	TestAccProjectServiceAccountSecret_rotateWithTaint
2026-07-14T00:44:26.4458948Z         	Messages:   	Project creation failed: test-acc-tf-p-1385836088063969996, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:26.4460723Z --- FAIL: TestAccProjectServiceAccountSecret_rotateWithTaint (67.75s)
```

- 2026-07-15 PASS 9 seconds
- 2026-07-16 PASS 10 seconds
- 2026-07-17 PASS 9 seconds
- 2026-07-18 PASS 10 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 14 seconds
- 2026-07-22 PASS 6 seconds
- 2026-07-23 PASS 13 seconds
- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 7 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 9 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 seconds
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
