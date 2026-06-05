# service_account/projectserviceaccount/TestAccProjectServiceAccount_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:55](#error-2026-05-16t0055220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 12 seconds
- 2026-05-08 PASS 10 seconds
- 2026-05-09 PASS 17 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 9 seconds
- 2026-05-12 PASS 17 seconds
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS a minute
- 2026-05-15 PASS 10 seconds
- 2026-05-16

### Error 2026-05-16T00:55:22+00:00
```
2026-05-16T00:55:22.6606869Z === RUN   TestAccProjectServiceAccount_basic
2026-05-16T00:55:22.6607944Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-4445093815719718272
2026-05-16T00:55:22.6608480Z     resource_test.go:23: 
2026-05-16T00:55:22.6609469Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:55:22.6611612Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:55:22.6613599Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:55:22.6615732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:23
2026-05-16T00:55:22.6616560Z         	Error:      	Received unexpected error:
2026-05-16T00:55:22.6619013Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:22.6620099Z         	Test:       	TestAccProjectServiceAccount_basic
2026-05-16T00:55:22.6621866Z         	Messages:   	Project creation failed: test-acc-tf-p-4445093815719718272, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:22.6623069Z --- FAIL: TestAccProjectServiceAccount_basic (62.00s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19 PASS 12 seconds
- 2026-05-20 PASS 8 seconds
- 2026-05-21 PASS 24 seconds
- 2026-05-22 PASS 11 seconds
- 2026-05-23 PASS 49 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 24 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28 PASS 10 seconds
- 2026-05-29 PASS 11 seconds
- 2026-05-30 PASS 29 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02 PASS 20 seconds
- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 10 seconds
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 8 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 10 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
