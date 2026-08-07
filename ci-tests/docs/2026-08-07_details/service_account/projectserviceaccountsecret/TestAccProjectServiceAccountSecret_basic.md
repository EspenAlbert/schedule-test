# service_account/projectserviceaccountsecret/TestAccProjectServiceAccountSecret_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:52](#error-2026-07-09t0052190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-14 00:44](#error-2026-07-14t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:52:19+00:00
```
2026-07-09T00:52:19.5026175Z === RUN   TestAccProjectServiceAccountSecret_basic
2026-07-09T00:52:19.5027366Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-6639527473332744669
2026-07-09T00:52:19.5028301Z     resource_test.go:19: 
2026-07-09T00:52:19.5030601Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:52:19.5034151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:52:19.5036444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:52:19.5038631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:19
2026-07-09T00:52:19.5039541Z         	Error:      	Received unexpected error:
2026-07-09T00:52:19.5041849Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:19.5042988Z         	Test:       	TestAccProjectServiceAccountSecret_basic
2026-07-09T00:52:19.5044851Z         	Messages:   	Project creation failed: test-acc-tf-p-6639527473332744669, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:19.5046094Z --- FAIL: TestAccProjectServiceAccountSecret_basic (62.04s)
```

- 2026-07-10 PASS 8 seconds
- 2026-07-11 PASS 10 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14

### Error 2026-07-14T00:44:26+00:00
```
2026-07-14T00:44:26.4424023Z === RUN   TestAccProjectServiceAccountSecret_basic
2026-07-14T00:44:26.4424975Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-239146069367578036
2026-07-14T00:44:26.4426021Z     resource_test.go:19: 
2026-07-14T00:44:26.4427690Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:44:26.4432466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:44:26.4434873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:44:26.4437126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:19
2026-07-14T00:44:26.4438015Z         	Error:      	Received unexpected error:
2026-07-14T00:44:26.4440255Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:26.4441365Z         	Test:       	TestAccProjectServiceAccountSecret_basic
2026-07-14T00:44:26.4443145Z         	Messages:   	Project creation failed: test-acc-tf-p-239146069367578036, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:26.4444624Z --- FAIL: TestAccProjectServiceAccountSecret_basic (61.76s)
```

- 2026-07-15 PASS 9 seconds
- 2026-07-16 PASS 14 seconds
- 2026-07-17 PASS 9 seconds
- 2026-07-18 PASS 16 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 22 seconds
- 2026-07-22 PASS 7 seconds
- 2026-07-23 PASS a minute
- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 8 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 9 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 8 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 8 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
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
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
