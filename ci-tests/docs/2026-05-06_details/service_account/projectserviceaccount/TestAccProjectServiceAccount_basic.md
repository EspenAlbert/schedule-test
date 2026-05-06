# service_account/projectserviceaccount/TestAccProjectServiceAccount_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:44](#error-2026-04-11t0044360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.02s
[2026-04-30 00:57](#error-2026-04-30t0057500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 10 seconds
- 2026-04-08 PASS 9 seconds
- 2026-04-09 PASS 44 seconds
- 2026-04-10 PASS 9 seconds
- 2026-04-11

### Error 2026-04-11T00:44:36+00:00
```
2026-04-11T00:44:36.4320868Z === RUN   TestAccProjectServiceAccount_basic
2026-04-11T00:44:36.4323905Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-5034155042160286872
2026-04-11T00:44:36.4324822Z     resource_test.go:24: 
2026-04-11T00:44:36.4326535Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:44:36.4330538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:44:36.4334362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:44:36.4337741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:24
2026-04-11T00:44:36.4338771Z         	Error:      	Received unexpected error:
2026-04-11T00:44:36.4340813Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:36.4341863Z         	Test:       	TestAccProjectServiceAccount_basic
2026-04-11T00:44:36.4343960Z         	Messages:   	Project creation failed: test-acc-tf-p-5034155042160286872, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:36.4345172Z --- FAIL: TestAccProjectServiceAccount_basic (61.25s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 8 seconds
- 2026-04-14 PASS 12 seconds
- 2026-04-15 PASS 7 seconds
- 2026-04-16 PASS 11 seconds
- 2026-04-17 PASS 8 seconds
- 2026-04-18 PASS 10 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 8 seconds
- 2026-04-21 PASS 13 seconds
- 2026-04-22 PASS 10 seconds
- 2026-04-23 PASS 34 seconds
- 2026-04-24 PASS 10 seconds
- 2026-04-25 PASS 16 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 7 seconds
- 2026-04-28 PASS 14 seconds
- 2026-04-29 PASS 9 seconds
- 2026-04-30

### Error 2026-04-30T00:57:50+00:00
```
2026-04-30T00:57:50.4302975Z === RUN   TestAccProjectServiceAccount_basic
2026-04-30T00:57:50.4303851Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-2709004126994875007
2026-04-30T00:57:50.4304735Z     resource_test.go:23: 
2026-04-30T00:57:50.4306360Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:50.4309580Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:50.4311503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:50.4313566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:23
2026-04-30T00:57:50.4314404Z         	Error:      	Received unexpected error:
2026-04-30T00:57:50.4316922Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:50.4318016Z         	Test:       	TestAccProjectServiceAccount_basic
2026-04-30T00:57:50.4319838Z         	Messages:   	Project creation failed: test-acc-tf-p-2709004126994875007, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:50.4321263Z --- FAIL: TestAccProjectServiceAccount_basic (79.10s)
```

- 2026-05-01 PASS 10 seconds
- 2026-05-02 PASS 11 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 10 seconds
- 2026-05-05 PASS 12 seconds
- 2026-05-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 11 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 8 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 8 seconds
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
- 2026-05-03 PASS 8 seconds
- 2026-05-04 PASS 7 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 seconds
